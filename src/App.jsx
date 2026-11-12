import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import ProductDetailModal from './components/ProductDetailModal';
import VideoModal from './components/VideoModal';
import CartDrawer from './components/CartDrawer';
import CheckoutNotice from './components/CheckoutNotice';
import PublishModal from './components/PublishModal';
import Footer from './components/Footer';
import { INITIAL_PRODUCTS, CATEGORIES } from './data/products';
import { PRODUCT_COLLECTION } from './data/productCollection';
import { SlidersHorizontal, Check, AlertCircle, PlusCircle } from './components/Icons';
import AuthModal from './components/AuthModal';
import { supabase } from './lib/supabase';

export default function App() {
  const [user, setUser] = useState(null);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('ge_theme') === 'light' ? 'light' : 'dark';
    } catch (error) {
      console.error('Impossibile leggere il tema salvato:', error);
      return 'dark';
    }
  });
  // Load products with localStorage support
  const [products, setProducts] = useState(() => {
    try {
      const saved = localStorage.getItem('ge_products');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          const initialIds = new Set(INITIAL_PRODUCTS.map((product) => product.id));
          const legacyInitialIds = new Set(['arduino-starter']);
          const customProducts = parsed
            .filter((product) => !initialIds.has(product.id) && !legacyInitialIds.has(product.id))
            .map((product) => {
              const migrated = { ...product };
              for (const field of ['name', 'badge', 'shortDesc', 'description']) {
                if (typeof migrated[field] === 'string') {
                  migrated[field] = migrated[field].replace(/arduino/gi, 'componenti elettronici');
                }
              }
              if (migrated.category === 'Arduino & Maker') {
                migrated.category = 'Componenti Elettronici';
              }
              if (Array.isArray(migrated.images)) {
                migrated.images = migrated.images.map((img) => {
                  if (typeof img === 'string' && (img.includes('photo-1609592424388-99fb05ff2e62') || img.includes('photo-1507582020432-2a3bc4ff7a8b') || img.endsWith('.svg'))) {
                    return 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80';
                  }
                  return img;
                });
              }
              return migrated;
            });
          return [
            ...INITIAL_PRODUCTS,
            ...customProducts
          ];
        }
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_PRODUCTS;
  });

  // Load cart with localStorage support
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('ge_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  // UI state
  const [selectedCategory, setSelectedCategory] = useState('Tutti i Prodotti');
  const [includeCollectionProducts, setIncludeCollectionProducts] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  
  // Modals state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeVideoProduct, setActiveVideoProduct] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPublishOpen, setIsPublishOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('ge_theme', theme);
    } catch (error) {
      console.error('Impossibile salvare il tema selezionato:', error);
    }
  }, [theme]);

  useEffect(() => {
    if (!supabase) return undefined;

    let isMounted = true;
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data, error }) => {
      if (error) throw error;
      if (isMounted) setUser(data.session?.user ?? null);
    }).catch((error) => {
      console.error('Impossibile verificare la sessione Supabase:', error);
      if (isMounted) showToast('Impossibile verificare la sessione. Ricarica la pagina.', 'error');
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  // Sync products to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ge_products', JSON.stringify(products));
    } catch (e) {
      console.error(e);
    }
  }, [products]);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ge_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Show toast notification
  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSignOut = async () => {
    if (!supabase) return;
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Errore durante la disconnessione Supabase:', error);
      showToast('Non è stato possibile uscire. Riprova.', 'error');
      return;
    }
    showToast('Hai effettuato la disconnessione.', 'info');
  };

  const handleExploreCategory = (category) => {
    setIncludeCollectionProducts(true);
    setSelectedCategory(category);
    requestAnimationFrame(() => {
      const catalog = document.getElementById('catalogo');
      if (!catalog) return;

      const catalogTop = catalog.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: Math.max(0, catalogTop - 96),
        behavior: 'smooth'
      });
    });
  };

  const handleSelectCategory = (category) => {
    setIncludeCollectionProducts(false);
    setSelectedCategory(category);
  };

  // Cart Management
  const handleAddToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
    showToast(`"${product.name}" aggiunto al carrello!`);
  };

  const handleUpdateQuantity = (productId, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const handleRemoveItem = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
    showToast('Prodotto rimosso dal carrello', 'info');
  };

  // Publish new product
  const handlePublishProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
    showToast(`Scheda "${newProduct.name}" salvata su questo dispositivo.`, 'success');
    setIncludeCollectionProducts(false);
    setSelectedCategory(newProduct.category);
  };

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    let result = includeCollectionProducts
      ? [...products, ...PRODUCT_COLLECTION]
      : [...products];

    // Category filter
    if (selectedCategory !== 'Tutti i Prodotti') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === 'price-asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, includeCollectionProducts, selectedCategory, searchQuery, sortBy]);

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#070b14] text-slate-100 flex flex-col font-sans">
      
      {/* Toast Notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-slate-900 border border-cyan-500/50 text-white text-xs font-semibold shadow-2xl shadow-cyan-950/80 animate-slideUp">
          <div className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
            {toast.type === 'success' ? <Check className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
          </div>
          <span>{toast.message}</span>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={totalCartCount}
        setIsCartOpen={setIsCartOpen}
        setIsPublishOpen={setIsPublishOpen}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleSelectCategory}
        categories={CATEGORIES}
        user={user}
        onOpenAuth={() => setIsAuthOpen(true)}
        onSignOut={handleSignOut}
        theme={theme}
        onToggleTheme={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}
      />

      {/* Main Container */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onExploreCategory={handleExploreCategory} />

        {/* Catalog Section */}
        <section id="catalogo" className="max-w-7xl mx-auto scroll-mt-24 px-4 pt-6 pb-16 sm:px-6 sm:pt-8 lg:px-8">
          
          {/* Section Header & Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
                <h2 className="text-xl sm:text-2xl font-black text-white">
                  {selectedCategory === 'Tutti i Prodotti' ? 'Tutti i Materiali Elettronici' : selectedCategory}
                </h2>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {filteredProducts.length} schede con descrizioni, foto e specifiche
              </p>
            </div>

            <p className="w-full rounded-xl border border-amber-500/30 bg-amber-950/30 px-4 py-3 text-xs leading-relaxed text-amber-100">
              Gli ordini e i pagamenti online non sono attivi. Prezzi e disponibilità sono esempi: verifica i dati e configura un sistema di vendita prima di accettare ordini.
            </p>

            {/* Controls (Category pills + Sort dropdown) */}
            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {/* Category selector pills */}
              <div className="hidden lg:flex items-center bg-slate-900/90 p-1 rounded-2xl border border-slate-800">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleSelectCategory(cat)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedCategory === cat
                        ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Sort by dropdown */}
              <div className="flex items-center gap-2 bg-slate-900/90 px-3 py-2 rounded-xl border border-slate-800 text-xs">
                <SlidersHorizontal className="w-3.5 h-3.5 text-cyan-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-transparent text-slate-200 font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="featured" className="bg-slate-900">In Evidenza</option>
                  <option value="price-asc" className="bg-slate-900">Prezzo: Minore &rarr; Maggiore</option>
                  <option value="price-desc" className="bg-slate-900">Prezzo: Maggiore &rarr; Minore</option>
                </select>
              </div>

              {/* Publish button shortcut */}
              <button
                onClick={() => setIsPublishOpen(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-semibold text-slate-200 hover:text-cyan-400 transition-all"
                title="Aggiungi una scheda prodotto"
              >
                <PlusCircle className="w-3.5 h-3.5 text-cyan-400" />
                <span>Aggiungi scheda</span>
              </button>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-slate-900/30 rounded-3xl border border-slate-800/60 p-8">
              <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center text-slate-500 mx-auto mb-4">
                <AlertCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Nessun prodotto trovato</h3>
              <p className="text-xs text-slate-400 max-w-sm mx-auto mb-6">
                Nessun articolo corrisponde ai criteri di ricerca attuali. Prova a reimpostare i filtri o pubblica un nuovo articolo.
              </p>
              <div className="flex justify-center gap-3">
                <button
                  onClick={() => {
                    handleSelectCategory('Tutti i Prodotti');
                    setSearchQuery('');
                  }}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold"
                >
                  Azzera Filtri
                </button>
                <button
                  onClick={() => setIsPublishOpen(true)}
                  className="px-4 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-semibold shadow-md shadow-cyan-600/30"
                >
                  Aggiungi scheda prodotto
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onSelectProduct={(p) => setSelectedProduct(p)}
                  onOpenVideo={(p) => setActiveVideoProduct(p)}
                  onAddToCart={(p) => handleAddToCart(p, 1)}
                />
              ))}
            </div>
          )}

        </section>
      </main>

      {/* Modals */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          relatedProducts={PRODUCT_COLLECTION}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={handleAddToCart}
          onOpenVideo={(p) => setActiveVideoProduct(p)}
        />
      )}

      {activeVideoProduct && (
        <VideoModal
          product={activeVideoProduct}
          onClose={() => setActiveVideoProduct(null)}
        />
      )}

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOpenCheckout={() => setIsCheckoutOpen(true)}
      />

      <CheckoutNotice
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cart}
      />

      <PublishModal
        isOpen={isPublishOpen}
        onClose={() => setIsPublishOpen(false)}
        onPublish={handlePublishProduct}
        categories={CATEGORIES}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />

      {/* Footer */}
      <Footer onSelectCategory={handleSelectCategory} />

    </div>
  );
}
