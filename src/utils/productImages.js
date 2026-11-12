import { publicAsset } from './publicAsset.js';

const FALLBACK_REAL_PHOTOS = {
  'Droni': 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=1000&q=80',
  'Power Bank': 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=1000&q=80',
  'Hard Disk & Storage': 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=1000&q=80',
  'Telefoni & Accessori': 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=80',
  'Componenti PC': 'https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?auto=format&fit=crop&w=1000&q=80',
  'Chip & Microcontrollori': 'https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=1000&q=80',
  'Componenti Elettronici': 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
  'Cuffie & Audio': 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=80'
};

const SVG_FALLBACKS = {
  'Droni': publicAsset('images/mini-drone.svg'),
  'Power Bank': publicAsset('images/power-bank.svg'),
  'Hard Disk & Storage': publicAsset('images/storage.svg'),
  'Telefoni & Accessori': publicAsset('images/phone-components.svg'),
  'Componenti PC': publicAsset('images/electronics.svg'),
  'Chip & Microcontrollori': publicAsset('images/electronics.svg'),
  'Componenti Elettronici': publicAsset('images/electronics.svg'),
  'Cuffie & Audio': publicAsset('images/electronics.svg')
};

export function getProductFallbackImage(product, preferSvg = false) {
  if (!product) return publicAsset('images/electronics.svg');
  if (preferSvg) {
    return SVG_FALLBACKS[product.category] || publicAsset('images/electronics.svg');
  }
  return FALLBACK_REAL_PHOTOS[product.category] || SVG_FALLBACKS[product.category] || 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80';
}
