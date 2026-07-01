// ===== Datos de ejemplo del catálogo =====
// Reemplaza precios, imágenes y existencias por el inventario real cuando el cliente confirme.
const WHATSAPP_NUMBER = "50761073702";

function commonsImage(fileName) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(fileName)}?width=900`;
}

const IMG = {
  block: commonsImage("Concrete Masonry blocks.jpg"),
  blockWall: commonsImage("A building constructed with Concrete Masonry blocks.jpg"),
  paver: commonsImage("-2021-01-09 Reclaimed concrete paving blocks, Trimingham, Norfolk (1).JPG"),
  doorWood: commonsImage("Dorfkirche Sanitz (main door), 2025-04-20.jpg"),
  doorSteel: commonsImage("Steel door panel.jpg"),
  doorLock: commonsImage("Door Knob with Lock USA.jpg"),
  doorHandle: commonsImage("Door handle.jpg"),
  cement: commonsImage("Portland cement CEM I 42,5 R (bag).jpg"),
  rebar: commonsImage("A bunch of rebar up close.jpg"),
  metalSheet: commonsImage("Grey galvanized corrugated striped slightly dusty steel metal sheet seamless surface texture.jpg"),
  plywood: commonsImage("Plywood.jpg"),
  lumber: commonsImage("Sanger Sawmill Lumber Drying Yard.jpg"),
  pvc: commonsImage("FlexibleRainPipe.JPG"),
  faucet: commonsImage("Grohe kitchen faucet veris 1.jpg"),
  paint: commonsImage("Paint bucket and brush.jpg"),
  tile: commonsImage("Modern ceramic tiles with wood appearance.jpg"),
  wire: commonsImage("Wooden electric wire coil.jpg"),
  drill: commonsImage("Drill-driver.JPG"),
  tools: commonsImage("Tools 66.jpg"),
  wheelbarrow: commonsImage("2008-07-15 Construction wheelbarrow at Duke.jpg"),
};

const PRODUCTS = [
  { name: "Puerta metálica lisa", cat: "Puertas y Cerraduras", price: 89.00, unit: "unidad", badge: "Pedido frecuente", desc: "Para entradas, depósitos y proyectos de seguridad.", image: IMG.doorSteel },
  { name: "Puerta de madera interior", cat: "Puertas y Cerraduras", price: 74.50, unit: "unidad", badge: "Para hogar", desc: "Opción económica para habitaciones y remodelaciones.", image: IMG.doorWood },
  { name: "Cerradura pomo con llave", cat: "Puertas y Cerraduras", price: 14.95, unit: "unidad", badge: "Complemento", desc: "Cerradura básica para puertas interiores o exteriores.", image: IMG.doorLock },
  { name: "Manigueta para puerta", cat: "Puertas y Cerraduras", price: 18.75, unit: "unidad", badge: "Herraje", desc: "Herraje tipo palanca para puertas residenciales.", image: IMG.doorHandle },
  { name: "Bisagra reforzada 3 pulgadas", cat: "Puertas y Cerraduras", price: 2.25, unit: "unidad", badge: "Por caja", desc: "Ideal para instalación de puertas nuevas.", image: IMG.doorHandle },
  { name: "Marco metálico para puerta", cat: "Puertas y Cerraduras", price: 42.00, unit: "juego", badge: "Cotizar medida", desc: "Marco para instalación en obra gris o remodelación.", image: IMG.doorSteel },

  { name: "Bloque de concreto 4 pulgadas", cat: "Bloques y Cemento", price: 0.75, unit: "unidad", badge: "Por volumen", desc: "Para divisiones livianas y remodelaciones.", image: IMG.block },
  { name: "Bloque de concreto 6 pulgadas", cat: "Bloques y Cemento", price: 0.85, unit: "unidad", badge: "Más vendido", desc: "Bloque estándar para paredes y cerramientos.", image: IMG.block },
  { name: "Bloque de concreto 8 pulgadas", cat: "Bloques y Cemento", price: 1.10, unit: "unidad", badge: "Obra pesada", desc: "Mayor resistencia para muros y estructuras.", image: IMG.blockWall },
  { name: "Bulto de cemento 42.5 kg", cat: "Bloques y Cemento", price: 9.90, unit: "bulto", badge: "Stock diario", desc: "Cemento para mezcla, repello y fundaciones.", image: IMG.cement },
  { name: "Adoquín de concreto", cat: "Bloques y Cemento", price: 0.95, unit: "unidad", badge: "Exterior", desc: "Para patios, accesos y áreas de circulación.", image: IMG.paver },
  { name: "Mortero preparado", cat: "Bloques y Cemento", price: 7.50, unit: "saco", badge: "Listo para mezcla", desc: "Para pega de bloques, repello y reparaciones.", image: IMG.cement },

  { name: "Varilla corrugada 3/8 pulgadas", cat: "Hierro y Techo", price: 4.95, unit: "unidad", badge: "Obra gris", desc: "Acero de refuerzo para columnas y vigas.", image: IMG.rebar },
  { name: "Varilla corrugada 1/2 pulgada", cat: "Hierro y Techo", price: 7.80, unit: "unidad", badge: "Alta demanda", desc: "Refuerzo para losas, columnas y zapatas.", image: IMG.rebar },
  { name: "Malla electrosoldada", cat: "Hierro y Techo", price: 29.00, unit: "paño", badge: "Cotizar medida", desc: "Para pisos, losas livianas y refuerzos.", image: IMG.rebar },
  { name: "Lámina de zinc galvanizada", cat: "Hierro y Techo", price: 12.50, unit: "lámina", badge: "Techo", desc: "Cubierta para techos, anexos y depósitos.", image: IMG.metalSheet },
  { name: "Cumbrera galvanizada", cat: "Hierro y Techo", price: 10.75, unit: "pieza", badge: "Techo", desc: "Remate superior para cubiertas de zinc.", image: IMG.metalSheet },
  { name: "Tornillo autoperforante para zinc", cat: "Hierro y Techo", price: 6.50, unit: "caja", badge: "Accesorio", desc: "Fijación para techos y estructuras metálicas.", image: IMG.metalSheet },

  { name: "Plywood 1/2 pulgada", cat: "Madera y Tableros", price: 24.00, unit: "lámina", badge: "Carpintería", desc: "Tablero para formaleta, muebles y divisiones.", image: IMG.plywood },
  { name: "Plywood 3/4 pulgada", cat: "Madera y Tableros", price: 34.50, unit: "lámina", badge: "Resistente", desc: "Mayor espesor para trabajos de carga.", image: IMG.plywood },
  { name: "Tabla de madera", cat: "Madera y Tableros", price: 5.80, unit: "pieza", badge: "Por medida", desc: "Para carpintería, soporte y acabados.", image: IMG.lumber },
  { name: "Listón cepillado", cat: "Madera y Tableros", price: 3.95, unit: "pieza", badge: "Acabado", desc: "Listón para marcos, refuerzos y detalles.", image: IMG.lumber },

  { name: "Tubo PVC 1/2 pulgada", cat: "Plomería", price: 5.60, unit: "tira", badge: "6 m", desc: "Tubería para agua fría y reparaciones.", image: IMG.pvc },
  { name: "Tubo PVC 3/4 pulgada", cat: "Plomería", price: 7.20, unit: "tira", badge: "6 m", desc: "Mayor caudal para instalaciones residenciales.", image: IMG.pvc },
  { name: "Codo PVC 90 grados", cat: "Plomería", price: 0.65, unit: "unidad", badge: "Conexión", desc: "Accesorio para cambios de dirección.", image: IMG.pvc },
  { name: "Llave de paso 1/2 pulgada", cat: "Plomería", price: 6.75, unit: "unidad", badge: "Instalación", desc: "Control de agua para baños, cocinas y lavaderos.", image: IMG.faucet },
  { name: "Grifo para lavamanos", cat: "Plomería", price: 22.00, unit: "unidad", badge: "Acabado", desc: "Grifería para baño o reemplazo rápido.", image: IMG.faucet },
  { name: "Cinta teflón", cat: "Plomería", price: 2.30, unit: "paquete", badge: "Básico", desc: "Sellado de roscas para conexiones de agua.", image: IMG.pvc },

  { name: "Cable eléctrico #12 THHN", cat: "Eléctrico", price: 38.00, unit: "rollo", badge: "Residencial", desc: "Cable para circuitos de tomacorrientes.", image: IMG.wire },
  { name: "Cable eléctrico #14 THHN", cat: "Eléctrico", price: 29.50, unit: "rollo", badge: "Iluminación", desc: "Cable para iluminación y cargas livianas.", image: IMG.wire },
  { name: "Breaker 20A", cat: "Eléctrico", price: 8.20, unit: "unidad", badge: "Panel", desc: "Protección para circuitos residenciales.", image: IMG.wire },
  { name: "Tomacorriente doble", cat: "Eléctrico", price: 2.95, unit: "unidad", badge: "Acabado", desc: "Repuesto para viviendas, oficinas y locales.", image: IMG.wire },
  { name: "Cajilla eléctrica plástica", cat: "Eléctrico", price: 1.25, unit: "unidad", badge: "Instalación", desc: "Caja para interruptores o tomacorrientes.", image: IMG.wire },

  { name: "Pintura látex interior 1 galón", cat: "Pintura y Acabados", price: 22.00, unit: "galón", badge: "Colores", desc: "Pintura para paredes interiores y retoques.", image: IMG.paint },
  { name: "Sellador acrílico", cat: "Pintura y Acabados", price: 16.50, unit: "galón", badge: "Preparación", desc: "Base para mejorar el acabado de pintura.", image: IMG.paint },
  { name: "Rodillo y bandeja", cat: "Pintura y Acabados", price: 7.40, unit: "juego", badge: "Kit", desc: "Herramienta básica para pintar paredes.", image: IMG.paint },
  { name: "Cerámica tipo madera", cat: "Pintura y Acabados", price: 11.90, unit: "m²", badge: "Acabado", desc: "Piso decorativo para interiores.", image: IMG.tile },
  { name: "Pegamento para cerámica", cat: "Pintura y Acabados", price: 8.25, unit: "saco", badge: "Instalación", desc: "Adhesivo para pisos y revestimientos.", image: IMG.tile },

  { name: "Taladro percutor 1/2 pulgada", cat: "Herramientas", price: 64.99, unit: "unidad", badge: "Eléctrica", desc: "Para perforar concreto, metal y madera.", image: IMG.drill },
  { name: "Juego de herramientas", cat: "Herramientas", price: 39.00, unit: "set", badge: "Multiuso", desc: "Herramientas manuales para hogar y obra.", image: IMG.tools },
  { name: "Carretilla de construcción", cat: "Herramientas", price: 58.00, unit: "unidad", badge: "Obra", desc: "Transporte de arena, piedra, bloques y mezcla.", image: IMG.wheelbarrow },
  { name: "Nivel de burbuja", cat: "Herramientas", price: 9.75, unit: "unidad", badge: "Precisión", desc: "Para instalación de puertas, marcos y cerámica.", image: IMG.tools },
];

const grid = document.getElementById("productGrid");
const filtersEl = document.getElementById("categoryFilters");
const searchInput = document.getElementById("searchInput");
const emptyState = document.getElementById("emptyState");

let activeCategory = "todos";

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

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

function priceLabel(product) {
  if (product.price == null) return "Cotizar";
  return `Desde $${product.price.toFixed(2)}`;
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = PRODUCTS.filter(p => {
    const haystack = [p.name, p.cat, p.desc, p.badge].join(" ").toLowerCase();
    const matchesCategory = activeCategory === "todos" || p.cat === activeCategory;
    const matchesQuery = haystack.includes(query);
    return matchesCategory && matchesQuery;
  });

  grid.innerHTML = filtered.map(p => `
    <article class="product-card">
      <div class="product-media">
        <img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy">
        <span class="product-badge">${escapeHtml(p.badge)}</span>
      </div>
      <div class="product-body">
        <div class="p-cat">${escapeHtml(p.cat)}</div>
        <h3>${escapeHtml(p.name)}</h3>
        <p class="p-desc">${escapeHtml(p.desc)}</p>
        <div class="product-footer">
          <div>
            <div class="p-price">${priceLabel(p)}</div>
            <span class="p-unit">/${escapeHtml(p.unit)}</span>
          </div>
          <a class="p-quote" href="${waLink(p.name)}" target="_blank" rel="noopener">Cotizar</a>
        </div>
      </div>
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

document.querySelectorAll("#mainNav a").forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

buildCategoryFilters();
renderProducts();
