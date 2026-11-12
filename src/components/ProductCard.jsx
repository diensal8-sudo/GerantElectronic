import React from 'react';
import { Play, ShoppingBag, Eye, Zap, CheckCircle2 } from './Icons';
import { getProductFallbackImage } from '../utils/productImages';

export default function ProductCard({ 
  product, 
  onSelectProduct, 
  onOpenVideo, 
  onAddToCart 
}) {
  const discountPercent = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) 
    : null;

  return (
    <div className="group relative flex flex-col rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/40 overflow-hidden">
      
      {/* Product Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-950">
        <img
          src={(product.images && product.images.length > 0 && product.images[0]) ? product.images[0] : getProductFallbackImage(product)}
          alt={product.name}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = getProductFallbackImage(product, true);
          }}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badge && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-cyan-500/90 text-slate-950 text-[11px] font-black uppercase tracking-wider shadow-md backdrop-blur-sm">
              <Zap className="w-3 h-3 fill-current" />
              {product.badge}
            </span>
          )}
          {discountPercent && (
            <span className="inline-block px-2 py-0.5 rounded-md bg-rose-500 text-white text-[11px] font-extrabold shadow-md">
              -{discountPercent}%
            </span>
          )}
        </div>

        {/* Video Preview Button */}
        {product.videoUrl && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenVideo(product);
            }}
            className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 hover:bg-cyan-500 text-cyan-400 hover:text-slate-950 text-xs font-bold border border-cyan-500/30 backdrop-blur-md transition-all shadow-lg hover:scale-105 z-10"
            title="Guarda il video dimostrativo"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Video</span>
          </button>
        )}

        {/* Quick View Button on Image Bottom */}
        <div className="absolute bottom-3 inset-x-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <button
            onClick={() => onSelectProduct(product)}
            className="flex-1 flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white text-xs font-semibold border border-slate-700/80 backdrop-blur-md transition-all"
          >
            <Eye className="w-4 h-4 text-cyan-400" />
            <span>Dettagli & Foto</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-4 sm:p-5 flex flex-col flex-1 justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-cyan-400 font-semibold tracking-wide uppercase text-[11px]">
              {product.category}
            </span>
          </div>

          {/* Title */}
          <h3 
            onClick={() => onSelectProduct(product)}
            className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors line-clamp-1 cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Short description */}
          <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
            {product.shortDesc || product.description}
          </p>

          {/* Stock info */}
          <div className="flex items-center gap-1.5 mt-2.5 text-[11px] text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Disponibilità da confermare</span>
          </div>
        </div>

        {/* Price & Add to Cart button */}
        <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-lg sm:text-xl font-extrabold text-white">
                €{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-500 line-through">
                  €{product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-500 active:scale-95 text-white font-semibold text-xs shadow-md shadow-cyan-600/30 transition-all"
            aria-label={`Aggiungi ${product.name} al carrello`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Aggiungi</span>
          </button>
        </div>

      </div>

    </div>
  );
}
