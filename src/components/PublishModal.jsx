import React, { useState } from 'react';
import { X, Upload, Image as ImageIcon, Sparkles, Plus } from './Icons';

export default function PublishModal({ isOpen, onClose, onPublish, categories }) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Droni');
  const [price, setPrice] = useState('');
  const [originalPrice, setOriginalPrice] = useState('');
  const [stock, setStock] = useState('10');
  const [badge, setBadge] = useState('Nuovo Arrivo');
  const [imageUrl, setImageUrl] = useState('');
  const [additionalImageUrls, setAdditionalImageUrls] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [spec1Label, setSpec1Label] = useState('Caratteristica 1');
  const [spec1Value, setSpec1Value] = useState('');
  const [spec2Label, setSpec2Label] = useState('Caratteristica 2');
  const [spec2Value, setSpec2Value] = useState('');

  const sampleImages = {
    'Droni': 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1000&q=80',
    'Hard Disk & Storage': 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=80',
    'Componenti PC': 'https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?auto=format&fit=crop&w=1000&q=80',
    'Chip & Microcontrollori': 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80',
    'Telefoni & Accessori': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80',
    'Power Bank': 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80',
    'Cuffie & Audio': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80',
    'Componenti Elettronici': 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1000&q=80'
  };

  const handleApplyPreset = (cat) => {
    setCategory(cat);
    if (!imageUrl) setImageUrl(sampleImages[cat] || '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !price || !imageUrl.trim() || !description.trim()) return;

    const finalImage = imageUrl.trim();
    const additionalImages = additionalImageUrls
      .split(',')
      .map((url) => url.trim())
      .filter(Boolean);

    const newProduct = {
      id: 'custom-' + Date.now(),
      name: title,
      category,
      price: parseFloat(price),
      originalPrice: originalPrice ? parseFloat(originalPrice) : null,
      stock: parseInt(stock, 10) || 0,
      badge: badge || 'Novità',
      featured: true,
      shortDesc: shortDesc || description.slice(0, 90),
      description: description.trim(),
      images: [finalImage, ...additionalImages],
      ...(videoUrl.trim() ? { videoUrl: videoUrl.trim(), videoPoster: finalImage } : {}),
      specs: [
        ...(spec1Value ? [{ label: spec1Label, value: spec1Value }] : []),
        ...(spec2Value ? [{ label: spec2Label, value: spec2Value }] : [])
      ]
    };

    onPublish(newProduct);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl rounded-3xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-950/70">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400">
              <Upload className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-lg text-white">Aggiungi una scheda prodotto</h3>
              <p className="text-xs text-slate-400">Descrizione, foto, video e dettagli tecnici</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[80vh] overflow-y-auto">
          <p className="rounded-xl border border-amber-500/30 bg-amber-950/30 p-3 text-xs leading-relaxed text-amber-100">
            Le schede vengono salvate solo in questo browser. Per mostrarle a tutti i visitatori servono un archivio online e uno spazio per caricare foto e video.
          </p>
          
          {/* Quick presets helper */}
          <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30">
            <div className="flex items-center gap-1.5 text-xs font-bold text-cyan-300 mb-1.5">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Compilazione Rapida Categoria:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {['Droni', 'Hard Disk & Storage', 'Componenti PC', 'Chip & Microcontrollori', 'Telefoni & Accessori', 'Power Bank', 'Cuffie & Audio', 'Componenti Elettronici'].map((cat) => (
                <button
                  type="button"
                  key={cat}
                  onClick={() => handleApplyPreset(cat)}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-slate-700/80 text-[11px] font-medium transition-all"
                >
                  Esempio {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Nome Prodotto */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Nome del Prodotto *
            </label>
            <input
              type="text"
              required
              placeholder="es. Drone 4K FPV Extreme, SSD NVMe 1TB, PowerBank 20000mAh..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Category & Badge */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Categoria *
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
              >
                {categories.filter(c => c !== 'Tutti i Prodotti').map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Badge Promozionale
              </label>
              <input
                type="text"
                placeholder="es. Novità, Più Venduto, Sconto 30%"
                value={badge}
                onChange={(e) => setBadge(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Price, Original Price, Stock */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Prezzo di Vendita (€) *
              </label>
              <input
                type="number"
                step="0.01"
                min="0"
                required
                placeholder="199.99"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Prezzo di Listino (€)
              </label>
              <input
                type="number"
                step="0.01"
                placeholder="249.99"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1">
                Pezzi Disponibili
              </label>
              <input
                type="number"
                min="0"
                step="1"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Media: Image URL & Video URL */}
          <div className="space-y-3 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4" />
              <span>Media (Foto & Video dimostrativo)</span>
            </h4>

            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                URL della foto principale *
              </label>
              <input
                type="url"
                required
                placeholder="https://... (link pubblico dell'immagine)"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                Altre foto (facoltative, URL separati da virgole)
              </label>
              <input
                type="text"
                placeholder="https://... , https://..."
                value={additionalImageUrls}
                onChange={(e) => setAdditionalImageUrls(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                URL Video Dimostrativo (MP4 o link video)
              </label>
              <input
                type="url"
                placeholder="https://... (link pubblico a un video MP4)"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
              <p className="text-[10px] text-slate-500 mt-1">
                Aggiungi solo un video del prodotto. Se non ne hai uno, lascia il campo vuoto.
              </p>
            </div>
          </div>

          {/* Descriptions */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Descrizione Dettagliata
            </label>
            <textarea
              rows={3}
              required
              placeholder="Descrivi i punti di forza, la qualità dei materiali, le prestazioni..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Tech Specs */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                Specifica Tecnica 1 (Es. Risoluzione / Velocità)
              </label>
              <input
                type="text"
                placeholder="es. 4K 60fps / 7450 MB/s"
                value={spec1Value}
                onChange={(e) => setSpec1Value(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">
                Nome caratteristica
              </label>
              <input
                type="text"
                value={spec2Label}
                onChange={(e) => setSpec2Label(e.target.value)}
                placeholder="es. Compatibilità"
                className="mb-2 w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
              <input
                type="text"
                value={spec2Value}
                onChange={(e) => setSpec2Value(e.target.value)}
                placeholder="es. PC desktop compatibili"
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="pt-4 border-t border-slate-800">
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-sm shadow-xl shadow-cyan-500/25 transition-all transform active:scale-98 flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              <span>Salva scheda su questo dispositivo</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
