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
  doorWhite6: commonsImage("EFTA00002867-Pool-House - White six-panel door with black doorknob set in a light-colored frame against a plain wall.jpg"),
  doorCarved: commonsImage("Door panel showing Astamangala in a Lalitpur street.jpg"),
  doorPanel: commonsImage("Interior view of former living porch showing original wooden panel door at main entry, facing west. - Marine Barracks, Panama Canal, Officers' Quarters, 800' West of Bruja Road, HABS CZ,1-BALB.V,3B-14.tif"),
  doorSteel: commonsImage("Steel door panel.jpg"),
  doorLock: commonsImage("Door Knob with Lock USA.jpg"),
  doorHandle: commonsImage("Door handle.jpg"),
  cement: commonsImage("Portland cement CEM I 42,5 R (bag).jpg"),
  blockStack: commonsImage("Close-Up of Stacked Concrete Blocks in Sunlight.jpg"),
  sand: commonsImage("Pile of Sand for Building in Anambra State.jpg"),
  rebar: commonsImage("A bunch of rebar up close.jpg"),
  metalSheet: commonsImage("Grey galvanized corrugated striped slightly dusty steel metal sheet seamless surface texture.jpg"),
  plywood: commonsImage("Plywood.jpg"),
  lumber: commonsImage("Sanger Sawmill Lumber Drying Yard.jpg"),
  pvc: commonsImage("FlexibleRainPipe.JPG"),
  faucet: commonsImage("Grohe kitchen faucet veris 1.jpg"),
  paint: commonsImage("Paint bucket and brush.jpg"),
  paintColors: commonsImage("Paint in cans and bottles (25c2ab72-006a-4aec-9562-329009d3a997).jpg"),
  tile: commonsImage("Modern ceramic tiles with wood appearance.jpg"),
  wire: commonsImage("Wooden electric wire coil.jpg"),
  drill: commonsImage("Drill-driver.JPG"),
  tools: commonsImage("Tools 66.jpg"),
  wheelbarrow: commonsImage("2008-07-15 Construction wheelbarrow at Duke.jpg"),
};

const PRODUCTS = [
  { name: "Puerta metálica lisa", cat: "Puertas y Cerraduras", price: 89.00, unit: "unidad", badge: "Pedido frecuente", desc: "Para entradas, depósitos y proyectos de seguridad.", image: IMG.doorSteel },
  { name: "Puerta de madera interior", cat: "Puertas y Cerraduras", price: 74.50, unit: "unidad", badge: "Para hogar", desc: "Opción económica para habitaciones y remodelaciones.", image: IMG.doorWood },
  { name: "Puerta de madera colonial 2 paneles", cat: "Puertas y Cerraduras", price: 79.99, unit: "unidad", badge: "Diseño colonial", desc: "Estilo clásico para habitaciones, oficinas y remodelaciones.", image: IMG.doorPanel },
  { name: "Puerta Craftmaster 6 paneles blanca", cat: "Puertas y Cerraduras", price: 64.99, unit: "unidad", badge: "6 paneles", desc: "Diseño blanco tipo colonial, similar a modelos comunes en ferreterías de Panamá.", image: IMG.doorWhite6 },
  { name: "Puerta de madera tallada decorativa", cat: "Puertas y Cerraduras", price: 145.00, unit: "unidad", badge: "Diseño bonito", desc: "Para mostrar una línea premium de puertas con detalle decorativo.", image: IMG.doorCarved },
  { name: "Puerta entamborada lisa Okume", cat: "Puertas y Cerraduras", price: 49.95, unit: "unidad", badge: "Interior", desc: "Puerta liviana de uso interior para habitaciones y baños.", image: IMG.doorWood },
  { name: "Puerta de madera natural con veta", cat: "Puertas y Cerraduras", price: 92.50, unit: "unidad", badge: "Acabado madera", desc: "Opción cálida para clientes que quieren acabado natural.", image: IMG.doorPanel },
  { name: "Puerta plegable color chocolate", cat: "Puertas y Cerraduras", price: 46.99, unit: "unidad", badge: "Espacios pequeños", desc: "Ideal para closets, lavanderías y divisiones interiores.", image: IMG.doorWood },
  { name: "Cerradura pomo con llave", cat: "Puertas y Cerraduras", price: 14.95, unit: "unidad", badge: "Complemento", desc: "Cerradura básica para puertas interiores o exteriores.", image: IMG.doorLock },
  { name: "Manigueta para puerta", cat: "Puertas y Cerraduras", price: 18.75, unit: "unidad", badge: "Herraje", desc: "Herraje tipo palanca para puertas residenciales.", image: IMG.doorHandle },
  { name: "Bisagra reforzada 3 pulgadas", cat: "Puertas y Cerraduras", price: 2.25, unit: "unidad", badge: "Por caja", desc: "Ideal para instalación de puertas nuevas.", image: IMG.doorHandle },
  { name: "Marco metálico para puerta", cat: "Puertas y Cerraduras", price: 42.00, unit: "juego", badge: "Cotizar medida", desc: "Marco para instalación en obra gris o remodelación.", image: IMG.doorSteel },

  { name: "Bloque de concreto 4 pulgadas", cat: "Bloques y Cemento", price: 0.75, unit: "unidad", badge: "Por volumen", desc: "Para divisiones livianas y remodelaciones.", image: IMG.block },
  { name: "Bloque de concreto 6 pulgadas", cat: "Bloques y Cemento", price: 0.85, unit: "unidad", badge: "Más vendido", desc: "Bloque estándar para paredes y cerramientos.", image: IMG.block },
  { name: "Bloque de concreto 8 pulgadas", cat: "Bloques y Cemento", price: 1.10, unit: "unidad", badge: "Obra pesada", desc: "Mayor resistencia para muros y estructuras.", image: IMG.blockWall },
  { name: "Bloque de cemento 6 pulgadas por ciento", cat: "Bloques y Cemento", price: 85.00, unit: "100 unidades", badge: "Por ciento", desc: "Presentación ideal para cotizaciones de construcción y muros.", image: IMG.blockStack },
  { name: "Bloque de cemento 4 pulgadas por ciento", cat: "Bloques y Cemento", price: 75.00, unit: "100 unidades", badge: "Por ciento", desc: "Para divisiones internas y proyectos livianos.", image: IMG.blockStack },
  { name: "Bulto de cemento 42.5 kg", cat: "Bloques y Cemento", price: 9.90, unit: "bulto", badge: "Stock diario", desc: "Cemento para mezcla, repello y fundaciones.", image: IMG.cement },
  { name: "Cemento gris uso general", cat: "Bloques y Cemento", price: 9.75, unit: "bulto", badge: "Obra gris", desc: "Para pega de bloques, pisos, columnas y reparaciones.", image: IMG.cement },
  { name: "Adoquín de concreto", cat: "Bloques y Cemento", price: 0.95, unit: "unidad", badge: "Exterior", desc: "Para patios, accesos y áreas de circulación.", image: IMG.paver },
  { name: "Mortero preparado", cat: "Bloques y Cemento", price: 7.50, unit: "saco", badge: "Listo para mezcla", desc: "Para pega de bloques, repello y reparaciones.", image: IMG.cement },
  { name: "Arena lavada", cat: "Arena y Agregados", price: 38.00, unit: "yarda", badge: "Para mezcla", desc: "Arena limpia para concreto, repello y pega de bloques.", image: IMG.sand },
  { name: "Arena gruesa", cat: "Arena y Agregados", price: 34.00, unit: "yarda", badge: "Construcción", desc: "Para mezclas de obra gris y trabajos de albañilería.", image: IMG.sand },
  { name: "Arena fina para repello", cat: "Arena y Agregados", price: 36.00, unit: "yarda", badge: "Acabado", desc: "Arena más fina para repello y terminaciones.", image: IMG.sand },
  { name: "Piedra cuarta", cat: "Arena y Agregados", price: 42.00, unit: "yarda", badge: "Concreto", desc: "Agregado para concreto, bases y trabajos estructurales.", image: IMG.sand },
  { name: "Gravilla para construcción", cat: "Arena y Agregados", price: 40.00, unit: "yarda", badge: "Agregado", desc: "Material de apoyo para mezclas, drenajes y rellenos.", image: IMG.sand },

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

  { name: "Pintura látex interior 1 galón", cat: "Pintura y Acabados", price: 22.00, unit: "galón", badge: "Colores", desc: "Pintura para paredes interiores y retoques.", image: IMG.paintColors, colors: [{ name: "Blanco", hex: "#f7f5ee" }, { name: "Arena", hex: "#c8ad7f" }, { name: "Gris", hex: "#aeb4b8" }, { name: "Azul", hex: "#5b8fc9" }] },
  { name: "Pintura acrílica color arena", cat: "Pintura y Acabados", price: 24.50, unit: "galón", badge: "Color Panamá", desc: "Tono neutral muy usado para interiores y fachadas.", image: IMG.paintColors, colors: [{ name: "Arena", hex: "#c8ad7f" }, { name: "Crema", hex: "#ead9b5" }, { name: "Café claro", hex: "#b38867" }] },
  { name: "Pintura acrílica blanco mate", cat: "Pintura y Acabados", price: 21.95, unit: "galón", badge: "Interior", desc: "Color base para paredes, techos y retoques rápidos.", image: IMG.paint, colors: [{ name: "Blanco", hex: "#f8f8f2" }, { name: "Hueso", hex: "#ede4d1" }] },
  { name: "Pintura color gris perla", cat: "Pintura y Acabados", price: 25.00, unit: "galón", badge: "Moderno", desc: "Acabado sobrio para casas, oficinas y locales.", image: IMG.paintColors, colors: [{ name: "Gris perla", hex: "#c7ccd1" }, { name: "Grafito", hex: "#555b60" }] },
  { name: "Pintura color azul cielo", cat: "Pintura y Acabados", price: 25.00, unit: "galón", badge: "Color vivo", desc: "Color fresco para habitaciones y fachadas tropicales.", image: IMG.paintColors, colors: [{ name: "Azul cielo", hex: "#74b7e6" }, { name: "Azul intenso", hex: "#2f68ad" }] },
  { name: "Pintura color verde menta", cat: "Pintura y Acabados", price: 25.00, unit: "galón", badge: "Decorativo", desc: "Tono suave para interiores, locales y áreas comunes.", image: IMG.paintColors, colors: [{ name: "Verde menta", hex: "#8ed4b0" }, { name: "Verde hoja", hex: "#3f8d4e" }] },
  { name: "Pintura rojo ladrillo exterior", cat: "Pintura y Acabados", price: 26.50, unit: "galón", badge: "Exterior", desc: "Color fuerte para fachadas, detalles y muros.", image: IMG.paintColors, colors: [{ name: "Rojo ladrillo", hex: "#a33b32" }, { name: "Terracota", hex: "#c4623d" }] },
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

function colorSwatches(product) {
  if (!product.colors?.length) return "";

  return `
    <div class="color-swatches" aria-label="Colores disponibles">
      ${product.colors.map(color => `
        <span class="color-swatch" style="--swatch:${escapeHtml(color.hex)}" title="${escapeHtml(color.name)}"></span>
      `).join("")}
    </div>
  `;
}

function renderProducts() {
  const query = searchInput.value.trim().toLowerCase();

  const filtered = PRODUCTS.filter(p => {
    const colorNames = p.colors?.map(color => color.name).join(" ") || "";
    const haystack = [p.name, p.cat, p.desc, p.badge, colorNames].join(" ").toLowerCase();
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
        ${colorSwatches(p)}
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
