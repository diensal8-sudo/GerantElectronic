import React, { useState } from 'react';
import { Search, ShoppingBag, PlusCircle, Menu, X, Cpu, Sun, Moon } from './Icons';

export default function Navbar({ 
  searchQuery, 
  setSearchQuery, 
  cartCount, 
  setIsCartOpen, 
  setIsPublishOpen, 
  selectedCategory, 
  setSelectedCategory,
  categories,
  user,
  onOpenAuth,
  onSignOut,
  theme,
  onToggleTheme
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-[#070b14]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setSelectedCategory('Tutti i Prodotti')}>
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25">
              <Cpu className="w-6 h-6 animate-pulse" />
              <div className="absolute -inset-1 rounded-xl bg-cyan-500/20 blur-sm -z-10"></div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base sm:text-2xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-cyan-400">
                  GÉRANT
                </span>
                <span className="hidden sm:inline text-2xl font-black text-cyan-400 tracking-wide">
                  ELECTRONIC
                </span>
              </div>
              <p className="text-[10px] text-cyan-300/80 font-medium tracking-widest uppercase -mt-1 hidden sm:block">
                Droni • PC • Chip • Telefoni • Componenti
              </p>
            </div>
          </div>

          {/* Search bar (Desktop) */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cerca droni, PC, chip, telefoni, componenti..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all shadow-inner"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1 sm:gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Attiva tema giorno' : 'Attiva tema notte'}
              title={theme === 'dark' ? 'Tema giorno' : 'Tema notte'}
              className="rounded-xl border border-slate-700 bg-slate-800/80 p-2 sm:p-2.5 text-amber-300 transition hover:border-cyan-500 hover:bg-slate-700"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {user ? (
              <button
                onClick={onSignOut}
                className="rounded-xl border border-slate-700 bg-slate-800/80 px-2 sm:px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300"
                title={`Esci da ${user.email}`}
              >
                <span className="hidden sm:inline">{user.email}</span>
                <span className="sm:hidden">Esci</span>
              </button>
            ) : (
              <button
                onClick={onOpenAuth}
                className="rounded-xl border border-slate-700 bg-slate-800/80 px-2 sm:px-3 py-2 text-xs font-semibold text-slate-200 transition hover:border-cyan-500 hover:text-cyan-300"
              >
                Accedi
              </button>
            )}

            {/* Publish Product Button */}
            <button
              onClick={() => setIsPublishOpen(true)}
              className="flex items-center gap-2 p-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-cyan-600/25 transition-all transform active:scale-95"
              title="Aggiungi una scheda prodotto con foto e video"
              aria-label="Aggiungi prodotto"
            >
              <PlusCircle className="w-4 h-4 text-cyan-200" />
              <span className="hidden sm:inline">Aggiungi prodotto</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 sm:p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-slate-200 hover:text-cyan-400 transition-all"
              aria-label="Carrello della spesa"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex items-center justify-center min-w-[20px] h-5 px-1 rounded-full bg-cyan-500 text-slate-950 text-xs font-black shadow-lg shadow-cyan-500/50 animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 sm:p-2.5 rounded-xl bg-slate-800/80 border border-slate-700 text-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search & Category Bar */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-slate-800 animate-fadeIn">
            <div className="relative mb-3">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Cerca prodotti..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-900 border border-slate-700 text-sm text-slate-200 focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setMobileMenuOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
