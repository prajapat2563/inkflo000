// Shared state + helpers (customer site and admin both use this)

export const CATS = [
  { key: "tees", slug: "oversized-t-shirts", nav: "Oversized T-Shirts", title: "OVERSIZED T-SHIRTS", noun: "t-shirts",
    filters: [
      { id: "design", label: "Design Type", field: "designType" },
      { id: "size", label: "Size", field: "sizes", multi: true },
      { id: "color", label: "Color", field: "colors", multi: true } ] },
  { key: "lamps", slug: "aesthetic-lamps", nav: "Aesthetic Lamps", title: "AESTHETIC LAMPS", noun: "lamps",
    filters: [
      { id: "lamp", label: "Lamp Type", field: "lampType" },
      { id: "color", label: "Color", field: "colors", multi: true } ] },
  { key: "prints", slug: "3d-printed-articles", nav: "3D Printed Articles", title: "3D PRINTED ARTICLES", noun: "pieces",
    filters: [
      { id: "article", label: "Category", field: "articleCategory" },
      { id: "color", label: "Color", field: "colors", multi: true } ] },
  { key: "merch", slug: "merchandise", nav: "Merchandise", title: "MERCHANDISE", noun: "pieces",
    filters: [
      { id: "type", label: "Product Type", field: "productType" },
      { id: "theme", label: "Theme", field: "theme" } ] }
];
export const catByKey = (k) => CATS.find((c) => c.key === k);
export const catBySlug = (s) => CATS.find((c) => c.slug === s);

export const DEFAULT_FILTERS = {
  tees: { design: ["Anime", "Graphic", "Pop Culture", "Typography"], size: ["S", "M", "L", "XL"], color: ["Cream", "Ink", "Forest", "Sand"] },
  lamps: { lamp: ["Table Lamp", "Desk Lamp", "Ambient Lamp"], color: ["Cream", "Ink", "Forest", "Sand"] },
  prints: { article: ["Toys", "Decor", "Desk"], color: ["Cream", "Ink", "Forest", "Sand", "Pink"] },
  merch: { type: ["Keychains", "Fridge Magnets", "Coasters"], theme: ["Ink", "Smile", "Studio"] }
};

export const DEFAULT_BANNERS = {
  hero: "img/hero.jpg", tees: "img/tees.jpg", lamps: "img/lamps.jpg",
  prints: "img/prints.jpg", merch: "img/merch.jpg", about: "img/about.jpg"
};
export const BANNER_LABELS = { hero: "Home hero", tees: "Oversized T-Shirts", lamps: "Aesthetic Lamps", prints: "3D Printed Articles", merch: "Merchandise", about: "About Us" };

export const DEFAULT_ABOUT = {
  heading: "Ajay & Aishwarya",
  nameLine: "Aishwarya Sahdev",
  designation: "Mrs. Asia Global 2025",
  body: "INKFLO is the studio of Ajay and Aishwarya. We design oversized t-shirts, aesthetic lamps, 3D printed articles, and merchandise that stay quiet, useful, and a little playful.",
  extra: "",
  ajayPhoto: "",
  aishwaryaPhoto: ""
};

export const DEFAULT_SITE = {
  contactEmail: "", phone: "", instagram: "", facebook: "", address: "", footerNote: "",
  razorpayKeyId: "", shippingFee: 0, freeShippingAbove: 0
};

export const SEED_PRODUCTS = [
  { id: "ink-drop-tee", name: "Ink Drop Tee", category: "tees", description: "Oversized cream tee with a green botanical print and a small INKFLO mark.", price: 1499, salePrice: null, colors: ["Cream", "Ink"], sizes: ["S", "M", "L", "XL"], stock: 14, designType: "Graphic" },
  { id: "bloom-study-tee", name: "Bloom Study Tee", category: "tees", description: "Oversized olive tee printed with a clover, INKFLO and FLOW.", price: 1699, salePrice: null, colors: ["Cream", "Forest"], sizes: ["S", "M", "L", "XL"], stock: 9, designType: "Anime" },
  { id: "quiet-type-tee", name: "Quiet Type Tee", category: "tees", description: "Oversized black tee with a white line-art flower on the chest.", price: 1399, salePrice: null, colors: ["Ink"], sizes: ["S", "M", "L", "XL"], stock: 4, designType: "Typography" },
  { id: "pop-frame-tee", name: "Pop Frame Tee", category: "tees", description: "Oversized black tee with INKFLO FLOW and a small clover.", price: 1599, salePrice: null, colors: ["Sand", "Cream", "Forest"], sizes: ["S", "M", "L", "XL"], stock: 0, designType: "Pop Culture" },
  { id: "moon-orb-lamp", name: "Moon Orb Lamp", category: "lamps", description: "A glowing moon lamp on a small wooden stand. Warm light for a bedside.", price: 4299, salePrice: 3899, colors: ["Cream", "Sand"], sizes: [], stock: 6, lampType: "Table Lamp" },
  { id: "wave-glow-lamp", name: "Wave Glow Lamp", category: "lamps", description: "A tall ribbed lamp that glows warm from within.", price: 5499, salePrice: null, colors: ["Sand", "Ink"], sizes: [], stock: 5, lampType: "Desk Lamp" },
  { id: "bunny-lamp", name: "Bunny Lamp", category: "lamps", description: "A small glowing bunny lamp with a quiet smile.", price: 3199, salePrice: null, colors: ["Cream"], sizes: [], stock: 7, lampType: "Ambient Lamp" },
  { id: "pocket-dino", name: "Pocket Dino", category: "prints", description: "A chubby green 3D-printed dinosaur. Matte, sturdy, and desk-sized.", price: 799, salePrice: null, colors: ["Sand"], sizes: [], stock: 2, articleCategory: "Toys" },
  { id: "facet-planter", name: "Facet Planter", category: "prints", description: "A small white faceted planter with a little green plant.", price: 1299, salePrice: null, colors: ["Forest"], sizes: [], stock: 8, articleCategory: "Decor" },
  { id: "pink-axolotl", name: "Pink Axolotl", category: "prints", description: "A small pink 3D-printed axolotl with a soft smile.", price: 999, salePrice: null, colors: ["Pink"], sizes: [], stock: 10, articleCategory: "Toys" },
  { id: "leaf-keychain", name: "Leaf Keychain", category: "merch", description: "Enamel pebble charm on a gold ring.", price: 399, salePrice: null, colors: ["Forest"], sizes: [], stock: 24, productType: "Keychains", theme: "Ink" },
  { id: "smile-magnet", name: "Smile Magnet", category: "merch", description: "Square speckled ceramic magnet.", price: 299, salePrice: null, colors: ["Cream"], sizes: [], stock: 30, productType: "Fridge Magnets", theme: "Smile" },
  { id: "round-coaster-set", name: "Round Coaster Set", category: "merch", description: "A pair of speckled ceramic coasters.", price: 599, salePrice: null, colors: ["Sand", "Cream"], sizes: [], stock: 16, productType: "Coasters", theme: "Studio" }
];

export const ORDER_STATUSES = ["placed", "confirmed", "packed", "shipped", "delivered", "cancelled"];
export const PAYMENT_STATUSES = ["paid", "refunded"];

// ---------- shared state ----------
export const S = {
  products: [], productsReady: false,
  siteDoc: {}, aboutDoc: {}, filtersDoc: {}, banners: {},
  user: null, isAdmin: false, authReady: false,
  dataError: "",
  cart: load("inkflo_cart", []),
  wish: load("inkflo_wish", []),
  listeners: new Set()
};
export const notify = () => S.listeners.forEach((f) => { try { f(); } catch (e) { console.error(e); } });

export const site = () => ({ ...DEFAULT_SITE, ...S.siteDoc });
export const about = () => ({ ...DEFAULT_ABOUT, ...S.aboutDoc });
export const banner = (k) => S.banners[k] || DEFAULT_BANNERS[k];
export const filterValues = (cat, id) => {
  const d = S.filtersDoc && S.filtersDoc[cat] && S.filtersDoc[cat][id];
  return Array.isArray(d) ? d : (DEFAULT_FILTERS[cat] || {})[id] || [];
};

// ---------- tiny helpers ----------
export function load(key, fallback) {
  try { const v = JSON.parse(localStorage.getItem(key)); return v ?? fallback; } catch { return fallback; }
}
export function save(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch {} }
export const saveCart = () => { save("inkflo_cart", S.cart); notify(); };
export const saveWish = () => { save("inkflo_wish", S.wish); notify(); };

export const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
export const money = (n) => "₹" + new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(Number(n) || 0);
export const priceOf = (p) => (p.salePrice != null && p.salePrice !== "" && Number(p.salePrice) > 0 && Number(p.salePrice) < Number(p.price)) ? Number(p.salePrice) : Number(p.price);
export const inStock = (p) => p.available !== false && Number(p.stock) > 0;
export const slugify = (s) => String(s).toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "item";
export const csv = (s) => String(s || "").split(",").map((x) => x.trim()).filter(Boolean);
export const productImage = (p) => (p.images && p.images[0]) || `img/card-${p.category}.jpg`;
export const fmtDate = (t) => {
  const d = t && t.toDate ? t.toDate() : t ? new Date(t) : null;
  return d ? d.toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" }) : "";
};

export function toast(msg, bad = false) {
  let box = document.getElementById("toasts");
  if (!box) { box = document.createElement("div"); box.id = "toasts"; document.body.appendChild(box); }
  const t = document.createElement("div");
  t.className = "toast" + (bad ? " bad" : "");
  t.textContent = msg;
  box.appendChild(t);
  setTimeout(() => { t.classList.add("out"); setTimeout(() => t.remove(), 300); }, 3200);
}

export function friendlyError(e) {
  const c = (e && e.code) || "";
  const map = {
    "auth/invalid-credential": "Email or password is wrong.",
    "auth/wrong-password": "Email or password is wrong.",
    "auth/user-not-found": "No account with this email.",
    "auth/email-already-in-use": "This email already has an account. Try logging in.",
    "auth/weak-password": "Password must be at least 8 characters.",
    "auth/invalid-email": "Enter a valid email address.",
    "auth/too-many-requests": "Too many tries. Wait a few minutes and try again.",
    "auth/network-request-failed": "No internet connection.",
    "auth/requires-recent-login": "Please log in again and retry.",
    "permission-denied": "Not allowed. Check that firestore.rules is published and you are logged in as admin."
  };
  return map[c] || (e && e.message) || "Something went wrong.";
}

// Image -> resized JPEG data URL (stored directly in Firestore, no Storage plan needed)
export function fileToDataUrl(file, maxW = 900, quality = 0.82, ratio = 0) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onerror = () => reject(new Error("Could not read the image."));
    r.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error("This file is not a valid image."));
      img.onload = () => {
        let sx = 0, sy = 0, sw = img.width, sh = img.height;
        if (ratio) {
          const cur = sw / sh;
          if (cur > ratio) { sw = sh * ratio; sx = (img.width - sw) / 2; }
          else { sh = sw / ratio; sy = (img.height - sh) / 2; }
        }
        const scale = Math.min(1, maxW / sw);
        const c = document.createElement("canvas");
        c.width = Math.round(sw * scale); c.height = Math.round(sh * scale);
        const ctx = c.getContext("2d");
        ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, c.width, c.height);
        resolve(c.toDataURL("image/jpeg", quality));
      };
      img.src = r.result;
    };
    r.readAsDataURL(file);
  });
}
