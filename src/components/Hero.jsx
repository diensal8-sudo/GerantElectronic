import React from 'react';
import { ChevronRight } from './Icons';
import { publicAsset } from '../utils/publicAsset.js';

const categories = [
  { name: 'Droni', cat: 'Droni' },
  { name: 'Hard Disk & SSD', cat: 'Hard Disk & Storage' },
  { name: 'Componenti PC', cat: 'Componenti PC' },
  { name: 'Chip', cat: 'Chip & Microcontrollori' },
  { name: 'Telefoni', cat: 'Telefoni & Accessori' },
  { name: 'Componenti elettronici', cat: 'Componenti Elettronici' }
];

export default function Hero({ onExploreCategory }) {
  return (
    <section className="relative isolate flex items-center overflow-hidden border-b border-slate-700/60 py-5 sm:py-6">
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-600/10 blur-3xl" />

      <div
        className="hero-scene absolute inset-0 -z-10 h-full w-full overflow-hidden"
        role="img"
        aria-label="Animazione di droni e componenti per telefoni e computer"
      >
        <div className="hero-scene-grid absolute inset-0" />
        <div className="hero-scene-orbit hero-orbit-one" />
        <div className="hero-scene-orbit hero-orbit-two" />
        <img
          src={publicAsset('images/mini-drone.svg')}
          alt=""
          aria-hidden="true"
          className="hero-flying-drone absolute left-[4%] top-[12%] z-10 w-[38%] max-w-[460px] rounded-3xl opacity-40 shadow-[0_0_70px_rgba(34,211,238,0.16)]"
        />
        <img
          src={publicAsset('images/phone-components.svg')}
          alt=""
          aria-hidden="true"
          className="hero-product-float hero-phone-tile absolute right-[4%] top-[10%] z-10 w-[18%] max-w-[220px] rounded-2xl opacity-45"
        />
        <img
          src={publicAsset('images/storage.svg')}
          alt=""
          aria-hidden="true"
          className="hero-product-float hero-storage-tile absolute bottom-[8%] left-[11%] z-10 w-[23%] max-w-[280px] rounded-2xl opacity-45"
        />
        <img
          src={publicAsset('images/electronics.svg')}
          alt=""
          aria-hidden="true"
          className="hero-product-float hero-chip-tile absolute bottom-[8%] right-[10%] z-10 w-[23%] max-w-[280px] rounded-2xl opacity-45"
        />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-6 px-4 sm:px-6 md:grid-cols-[minmax(0,1fr)_max-content] lg:gap-10 lg:pl-8 lg:pr-[10px]">
        <div className="max-w-4xl text-center md:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/70 px-3.5 py-1.5 text-xs font-semibold text-cyan-300 shadow-lg shadow-cyan-950/50">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
            <span>50 schede dimostrative di elettronica e tecnologia</span>
          </div>

          <h1 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-4xl lg:text-5xl">
            Tecnologia e componenti per{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              PC, telefoni e progetti elettronici
            </span>
          </h1>

          <p className="mx-auto mb-0 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base md:mx-0">
            Droni, storage, componenti per computer e telefoni, chip e materiali per prototipazione. Esplora il catalogo con foto e dettagli per ogni prodotto.
          </p>
        </div>

        <aside className="w-fit max-w-full justify-self-end rounded-2xl border border-cyan-300/30 bg-slate-900/70 p-3 shadow-xl shadow-slate-950/30 backdrop-blur-sm">
          <h2 className="mb-1.5 text-[10px] font-extrabold uppercase tracking-[0.16em] text-cyan-200">
            Esplora il catalogo
          </h2>
          <nav aria-label="Categorie prodotti" className="space-y-0 border-l border-cyan-300/60 pl-2">
            {categories.map((item) => (
              <button
                key={item.cat}
                onClick={() => onExploreCategory(item.cat)}
                className="group flex w-full items-center justify-between gap-2 rounded-lg border-l-2 border-transparent px-2.5 py-1 text-left transition-all hover:border-cyan-300 hover:bg-slate-700/60"
              >
                <span className="text-xs font-bold text-slate-100 sm:text-sm">{item.name}</span>
                <ChevronRight className="h-3 w-3 shrink-0 text-cyan-300 transition-transform group-hover:translate-x-1" />
              </button>
            ))}
          </nav>
        </aside>
      </div>
    </section>
  );
}
