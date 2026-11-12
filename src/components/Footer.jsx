import React from 'react';
import { Cpu, ShieldCheck, Truck, Headphones } from './Icons';

export default function Footer({ onSelectCategory }) {
  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-[#05080f] text-slate-400 text-xs">
      
      {/* Top Value Banner */}
      <div className="border-b border-slate-800/60 py-8 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400">
                <Truck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Catalogo visuale</h4>
                <p className="text-slate-400 text-xs">Foto e video per presentare i prodotti</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Dettagli tecnici</h4>
                <p className="text-slate-400 text-xs">Descrizioni e specifiche per ogni scheda</p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center md:justify-start">
              <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                <Headphones className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">Elettronica e prototipazione</h4>
                <p className="text-slate-400 text-xs">Droni, PC, chip, telefoni e componenti elettronici</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500 flex items-center justify-center text-slate-950 font-black">
                <Cpu className="w-4 h-4" />
              </div>
              <span className="text-base font-black text-white tracking-wider">
                GÉRANT <span className="text-cyan-400">ELECTRONIC</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Catalogo di elettronica con schede prodotto, foto, video e descrizioni tecniche.
            </p>
          </div>

          {/* Quick Categories */}
          <div>
            <h4 className="font-bold text-sm text-white mb-3 uppercase tracking-wider text-[11px] text-cyan-400">
              Categorie Principali
            </h4>
            <ul className="space-y-2">
              {['Droni', 'Hard Disk & Storage', 'Componenti PC', 'Chip & Microcontrollori', 'Telefoni & Accessori', 'Componenti Elettronici'].map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => onSelectCategory(cat)}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Catalog information */}
          <div>
            <h4 className="font-bold text-sm text-white mb-3 uppercase tracking-wider text-[11px] text-cyan-400">
              Informazioni
            </h4>
            <ul className="space-y-2">
              <li>Dominio ufficiale: gerantelectronic.com</li>
              <li>Spedizione rapida 24/48h tracciata</li>
              <li>Garanzia 24 mesi su tutti i prodotti</li>
              <li>Assistenza clienti dedicata</li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold text-sm text-white mb-3 uppercase tracking-wider text-[11px] text-cyan-400">
              Contatti
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <span>Email: <a href="mailto:info@gerantelectronic.com" className="text-cyan-400 hover:underline">info@gerantelectronic.com</a></span>
              </li>
              <li className="flex items-center gap-2">
                <span>Web: <a href="https://gerantelectronic.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">gerantelectronic.com</a></span>
              </li>
              <li className="flex items-center gap-2">
                <span>Supporto ordini via WhatsApp</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p>© {new Date().getFullYear()} Geran Electronic (gerantelectronic.com). Tutti i diritti riservati.</p>
          <p className="text-slate-500">Droni, Power Bank, Storage, Audio e Materiali Elettronici & Arduino.</p>
        </div>

      </div>

    </footer>
  );
}
