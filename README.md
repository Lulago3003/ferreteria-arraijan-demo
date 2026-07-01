# Maximateriales — Sitio Demo

Demo de sitio web para presentar a Maximateriales, ferretería con 2 sucursales en Arraiján, Panamá.

## Qué incluye
- Hero con fotos reales de las 2 sucursales destacadas al entrar a la página.
- Sección de "Más vendidos" con puertas, cemento, bloques, arena y pinturas destacadas.
- Catálogo visual con 60+ productos de muestra, fotos referenciales, categorías, buscador y filtros.
- Enfoque comercial en puertas de madera con diseños, bloques, cemento, arena, agregados, zinc, hierro, madera, plomería, eléctrico, pinturas por color y herramientas.
- Botón de WhatsApp flotante, compra rápida por WhatsApp y carrito demo para armar una cotización.
- Carrito lateral con cantidades, total estimado y mensaje automático para enviar por WhatsApp.
- Ofertas del mes orientadas a obra gris, puertas/cerraduras y despacho local.
- Sección de sucursales con foto, dirección, horario, teléfono, mapa, Google Maps y Waze.
- Diseño responsive para móvil, tablet y escritorio.
- Logo real integrado en header y footer.

## Pendiente antes de presentarlo como producto final
- Reemplazar productos, precios y fotos referenciales por el inventario real del cliente.
- Confirmar horarios exactos.
- Confirmar teléfonos y WhatsApp por sucursal.
- Validar coordenadas exactas de Google Maps/Waze con el cliente.

## Cómo personalizarlo
- Productos: edita el arreglo `PRODUCTS` en `assets/js/main.js`.
- Número de WhatsApp: cambia `WHATSAPP_NUMBER` en `assets/js/main.js` y los enlaces `wa.me` en `index.html`.
- Direcciones, horarios y enlaces de ruta: edita la sección `ubicacion` en `index.html`.
- Colores y estilos: variables CSS al inicio de `assets/css/styles.css`.

## Cómo verlo localmente
No requiere instalación. Abre `index.html` en el navegador, o sirve la carpeta con cualquier servidor estático:

```bash
python -m http.server 5500
```

Luego visita `http://localhost:5500`.

## Publicarlo gratis con GitHub Pages
1. Sube este repositorio a GitHub.
2. Ve a **Settings → Pages**.
3. En **Source**, selecciona la rama `main` y la carpeta `/ (root)`.
4. Guarda. El sitio quedará disponible en `https://<usuario>.github.io/<repositorio>/`.
