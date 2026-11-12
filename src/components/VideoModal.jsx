import React from 'react';
import { X, Play, Volume2, ShieldAlert } from './Icons';

export default function VideoModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-950/80 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-sm font-bold text-white truncate max-w-md">
              Video Dimostrativo: {product.name}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-all"
            aria-label="Chiudi video"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          <video
            src={product.videoUrl}
            poster={product.videoPoster || product.images[0]}
            controls
            autoPlay
            className="w-full h-full object-contain"
          >
            Il tuo browser non supporta il tag video.
          </video>
        </div>

        {/* Bottom info */}
        <div className="p-4 bg-slate-950/90 flex items-center justify-between flex-wrap gap-2 text-xs">
          <div className="text-slate-300">
            <span className="text-cyan-400 font-bold uppercase mr-2">{product.category}</span>
            <span>Prezzo: <strong className="text-white">€{product.price.toFixed(2)}</strong></span>
          </div>
          <div className="text-slate-400 flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-cyan-400" />
            <span>Audio & Video in alta risoluzione HD</span>
          </div>
        </div>
      </div>
    </div>
  );
}
