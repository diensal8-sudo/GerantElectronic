import React, { useState } from 'react';
import { X, Play, Image as ImageIcon, ShoppingBag, Check } from './Icons';
import { getProductFallbackImage } from '../utils/productImages';

export default function ProductDetailModal({
  product, 
  relatedProducts = [],
  onClose, 
  onAddToCart,
  onOpenVideo 
}) {
  if (!product) return null;

  const [activeTab, setActiveTab] = useState('photos'); // 'photos' | 'video'
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [previewProduct, setPreviewProduct] = useState(null);
  const [showAllCollection, setShowAllCollection] = useState(false);
  const similarProducts = relatedProducts.filter((item) => item.category === product.category);
  const visibleRelatedProducts = showAllCollection ? relatedProducts : similarProducts.slice(0, 5);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      
      {/* Modal Container */}
      <div 
        className="relative my-auto max-h-[92vh] w-full max-w-[90rem] overflow-y-auto rounded-3xl border border-slate-700/80 bg-slate-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-800 text-slate-300 hover:text-white transition-all border border-slate-700"
          aria-label="Chiudi"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(260px,0.8fr)]">
          
          {/* Left Column: Media (Gallery / Video) */}
          <div className="flex flex-col justify-between border-b border-slate-800 bg-slate-950/70 p-5 sm:p-6 md:border-b-0 md:border-r">
            
            {/* Media Selector Tabs (Foto vs Video) */}
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => setActiveTab('photos')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'photos'
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                }`}
              >
                <ImageIcon className="w-4 h-4" />
                <span>Foto ({product.images.length})</span>
              </button>

              {product.videoUrl && (
                <button
                  onClick={() => setActiveTab('video')}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                    activeTab === 'video'
                      ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Video Dimostrativo</span>
                </button>
              )}
            </div>

            {/* Main Media Display */}
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
              {activeTab === 'photos' ? (
                <img
                  src={selectedImage || (product.images && product.images[0]) || getProductFallbackImage(product)}
                  alt={product.name}
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = getProductFallbackImage(product, true);
                  }}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-black flex flex-col items-center justify-center relative">
                  <video
                    src={product.videoUrl}
                    poster={product.videoPoster || selectedImage}
                    controls
                    autoPlay
                    className="w-full h-full object-contain"
                  >
                    Il tuo browser non supporta il tag video.
                  </video>
                </div>
              )}
            </div>

            {/* Thumbnail selector (if photos tab) */}
            {activeTab === 'photos' && product.images.length > 1 && (
              <div className="flex gap-2.5 mt-4 overflow-x-auto pb-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      selectedImage === img
                        ? 'border-cyan-400 scale-105 shadow-md shadow-cyan-500/30'
                        : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      onError={(event) => {
                        event.currentTarget.onerror = null;
                        event.currentTarget.src = getProductFallbackImage(product);
                      }}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Information & Actions */}
          <div className="flex flex-col justify-between p-6 sm:p-8">
            <div>
              {/* Category & Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {product.category}
                </span>
                {product.badge && (
                  <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-bold">
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-snug">
                {product.name}
              </h2>

              {/* Price */}
              <div className="mt-4 flex items-baseline gap-3">
                <span className="text-3xl font-black text-white">
                  €{product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-slate-500 line-through">
                    €{product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              {/* Description */}
              <div className="mt-4">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Descrizione</h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Tech Specs */}
              {product.specs && product.specs.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Specifiche Tecniche
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.specs.map((spec, index) => (
                      <div key={index} className="p-2 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs">
                        <span className="text-slate-400 block text-[11px]">{spec.label}</span>
                        <span className="font-semibold text-slate-100">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 rounded-xl border border-amber-500/30 bg-amber-950/30 px-3 py-2 text-xs text-amber-100">
                Prezzo, disponibilità e caratteristiche sono esempi da verificare prima della vendita.
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                {/* Quantity selector */}
                <div className="flex items-center rounded-xl bg-slate-800 border border-slate-700 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 rounded-lg hover:bg-slate-700 flex items-center justify-center text-slate-300 font-bold"
                  >
                    -
                  </button>
                  <span className="w-10 text-center font-bold text-sm text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 rounded-lg hover:bg-slate-700 flex items-center justify-center text-slate-300 font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Add to Cart button */}
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm transition-all shadow-lg ${
                    addedAnimation 
                      ? 'bg-emerald-500 text-slate-950 shadow-emerald-500/30'
                      : 'bg-cyan-500 hover:bg-cyan-400 active:scale-98 text-slate-950 shadow-cyan-500/25'
                  }`}
                >
                  {addedAnimation ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Aggiunto al carrello!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-5 h-5" />
                      <span>Aggiungi al Carrello • €{(product.price * quantity).toFixed(2)}</span>
                    </>
                  )}
                </button>
              </div>

              <aside className="border-t border-slate-800 bg-slate-900/80 p-5 md:border-l md:border-t-0">
                <div className="mb-4 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-extrabold text-white">Prodotti simili</h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                      La scheda selezionata resta aperta mentre esplori la raccolta.
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full bg-cyan-500/15 px-2 py-1 text-[10px] font-bold text-cyan-300">
                    {similarProducts.length} simili
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setShowAllCollection((current) => !current)}
                  className="mb-3 w-full rounded-lg border border-cyan-500/30 bg-cyan-950/40 px-3 py-2 text-left text-xs font-bold text-cyan-200 transition hover:border-cyan-400"
                >
                  {showAllCollection ? 'Mostra meno prodotti simili' : `Mostra tutti i ${similarProducts.length} prodotti simili`}
                </button>

                <div className="max-h-[34vh] space-y-2 overflow-y-auto pr-1">
                  {visibleRelatedProducts.map((item) => (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => setPreviewProduct(item)}
                      aria-pressed={previewProduct?.id === item.id}
                      className={`flex w-full items-center gap-2 rounded-xl border p-2 text-left transition ${
                        previewProduct?.id === item.id
                          ? 'border-cyan-400 bg-cyan-950/50'
                          : 'border-slate-700/80 bg-slate-950/50 hover:border-cyan-500/60'
                      }`}
                    >
                      <img
                        src={item.images[0]}
                        alt=""
                        className="h-12 w-12 shrink-0 rounded-lg bg-slate-800 object-cover"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block line-clamp-2 text-xs font-bold text-slate-100">{item.name}</span>
                        <span className="mt-1 block text-[10px] text-slate-400">{item.category}</span>
                        <span className="mt-1 block text-xs font-extrabold text-cyan-300">€{item.price.toFixed(2)}</span>
                      </span>
                    </button>
                  ))}
                </div>

                {previewProduct && (
                  <div className="mt-4 rounded-xl border border-cyan-500/30 bg-slate-950/70 p-3">
                    <p className="text-[10px] font-extrabold uppercase tracking-wider text-cyan-300">Anteprima scheda</p>
                    <h4 className="mt-1 text-sm font-bold text-white">{previewProduct.name}</h4>
                    <p className="mt-2 text-xs leading-relaxed text-slate-300">{previewProduct.shortDesc}</p>
                    <button
                      type="button"
                      onClick={() => onAddToCart(previewProduct, 1)}
                      className="mt-3 w-full rounded-lg bg-cyan-600 px-3 py-2 text-xs font-bold text-white transition hover:bg-cyan-500"
                    >
                      Aggiungi al carrello · €{previewProduct.price.toFixed(2)}
                    </button>
                  </div>
                )}
              </aside>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
