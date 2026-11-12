import React from 'react';
import { X, ShoppingBag } from './Icons';

export default function CheckoutNotice({ isOpen, onClose, cartItems }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="checkout-notice-title"
        className="w-full max-w-lg rounded-3xl border border-slate-700 bg-slate-900 p-6 shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-cyan-500/10 p-2 text-cyan-400">
              <ShoppingBag className="h-5 w-5" />
            </span>
            <h2 id="checkout-notice-title" className="text-lg font-extrabold text-white">
              Riepilogo prodotti
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Chiudi"
            className="rounded-xl p-2 text-slate-400 hover:bg-slate-800 hover:text-white"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <ul className="mt-5 space-y-2 text-sm text-slate-300">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between gap-4">
              <span>{item.name} × {item.quantity}</span>
              <span>€{(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>

        <p className="mt-4 border-t border-slate-800 pt-4 text-sm font-bold text-white">
          Subtotale indicativo: €{subtotal.toFixed(2)}
        </p>
        <p className="mt-3 rounded-xl border border-amber-500/30 bg-amber-950/30 p-3 text-xs leading-relaxed text-amber-100">
          Gli ordini e i pagamenti online non sono attivi. Prezzi e disponibilità sono esempi: verifica i dati e configura un sistema di vendita prima di accettare ordini.
        </p>
        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full rounded-xl bg-cyan-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-cyan-500"
        >
          Torna al catalogo
        </button>
      </section>
    </div>
  );
}
