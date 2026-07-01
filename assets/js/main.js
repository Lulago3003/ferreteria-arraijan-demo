// ===== Datos de ejemplo del catálogo =====
// Reemplaza esto con los productos reales de la ferretería cuando el cliente confirme.
const PRODUCTS = [
  { name: "Martillo de uña 16oz", cat: "Herramientas Manuales", price: 8.50, emoji: "🔨" },
  { name: "Juego de destornilladores (6 pzs)", cat: "Herramientas Manuales", price: 12.00, emoji: "🪛" },
  { name: "Cinta métrica 5m", cat: "Herramientas Manuales", price: 5.25, emoji: "📏" },
  { name: "Llave inglesa 10\"", cat: "Herramientas Manuales", price: 9.75, emoji: "🔧" },

  { name: "Taladro percutor 1/2\"", cat: "Herramientas Eléctricas", price: 64.99, emoji: "🪚" },
  { name: "Sierra circular 7 1/4\"", cat: "Herramientas Eléctricas", price: 89.00, emoji: "🪚" },
  { name: "Esmeriladora angular 4 1/2\"", cat: "Herramientas Eléctricas", price: 42.50, emoji: "⚙️" },

  { name: "Caja tornillos autorroscantes (100u)", cat: "Tornillería", price: 4.50, emoji: "🔩" },
  { name: "Anclas de expansión 3/8\" (20u)", cat: "Tornillería", price: 6.90, emoji: "🔩" },
  { name: "Tuercas y arandelas surtidas", cat: "Tornillería", price: 3.25, emoji: "🔩" },

  { name: "Pintura látex interior 1 galón", cat: "Pintura", price: 22.00, emoji: "🎨" },
  { name: "Rodillo y bandeja para pintar", cat: "Pintura", price: 7.40, emoji: "🖌️" },
  { name: "Brocha profesional 3\"", cat: "Pintura", price: 4.10, emoji: "🖌️" },

  { name: "Tubo PVC 1/2\" (6m)", cat: "Plomería", price: 5.60, emoji: "🚰" },
  { name: "Llave de paso 1/2\"", cat: "Plomería", price: 6.75, emoji: "🚿" },
  { name: "Cinta teflón (paquete 5u)", cat: "Plomería", price: 2.30, emoji: "🚰" },

  { name: "Cable eléctrico #12 THHN (rollo)", cat: "Eléctrico", price: 38.00, emoji: "🔌" },
  { name: "Interruptor sencillo", cat: "Eléctrico", price: 2.95, emoji: "💡" },
  { name: "Breaker 20A", cat: "Eléctrico", price: 8.20, emoji: "⚡" },

  { name: "Casco de seguridad", cat: "Seguridad Industrial", price: 11.50, emoji: "🪖" },
  { name: "Guantes de trabajo (par)", cat: "Seguridad Industrial", price: 4.80, emoji: "🧤" },
  { name: "Lentes de protección", cat: "Seguridad Industrial", price: 3.60, emoji: "🥽" },

  { name: "Bulto de cemento 42.5kg", cat: "Construcción", price: 9.90, emoji: "🧱" },
  { name: "Bloque de concreto 6\"", cat: "Construcción", price: 0.85, emoji: "🧱" },
  { name: "Arena lavada (bulto)", cat: "Construcción", price: 4.20, emoji: "🏗️" },
];

// WhatsApp de Maximateriales Sucursal 2 (visible en su rótulo): 6107-3702
const WHATSAPP_NUMBER = "50761073702";

const grid = document.getElementById("productGrid");
const filtersEl = document.getElementById("categoryFilters");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");

let activeCategory = "todos";

function buildCategoryFilters() {
  const cats = [...new Set(PRODUCTS.map(p => p.cat))];
  cats.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "chip";
    btn.dataset.cat = cat;
    btn.textContent = cat;
    filtersEl.appendChild(btn);
  });
}

function waLink(productName) {
  const text = encodeURIComponent(`Hola, quiero cotizar: ${productName}`);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = PRODUCTS.filter(p => {
    const matchesCategory = activeCategory === "todos" || p.cat === activeCategory;
    const matchesQuery = p.name.toLowerCase().includes(query) || p.cat.toLowerCase().includes(query);
    return matchesCategory && matchesQuery;
  });

  grid.innerHTML = filtered.map(p => `
    <article class="product-card">
      <div class="product-emoji">${p.emoji}</div>
      <div class="p-cat">${p.cat}</div>
      <h3>${p.name}</h3>
      <div class="p-price">$${p.price.toFixed(2)}</div>
      <a class="p-quote" href="${waLink(p.name)}" target="_blank" rel="noopener">Cotizar por WhatsApp →</a>
    </article>
  `).join("");

  emptyState.hidden = filtered.length !== 0;
}

filtersEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".chip");
  if (!btn) return;
  filtersEl.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  activeCategory = btn.dataset.cat;
  renderProducts();
});

searchInput.addEventListener("input", renderProducts);

const navToggle = document.getElementById("navToggle");
navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

buildCategoryFilters();
renderProducts();
