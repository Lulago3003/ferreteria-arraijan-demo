# Maximateriales — Sitio Demo

Demo de sitio web para presentar a Maximateriales (ferretería con 2 sucursales en Arraiján, Panamá). El catálogo de productos y precios es de ejemplo — reemplázalo por el inventario real antes de entregarlo como producto final.

## Qué incluye
- Hero con fotos reales de las 2 sucursales destacadas apenas se entra a la página
- Catálogo de productos con filtro por categoría y buscador en vivo
- Botón de WhatsApp (flotante y en cada producto) para cotizar — número real de Sucursal 2 (6107-3702)
- Sección de ofertas del mes
- Sección "Nuestras sucursales" con foto real, dirección, horario y mapa por cada local
- Testimonios de clientes
- Diseño responsive (móvil/tablet/escritorio)
- Paleta de marca en rojo y blanco

## Pendiente antes de presentarlo como final
- **Catálogo de productos y precios**: siguen siendo de ejemplo, reemplazar por el inventario real.
- **Teléfono/WhatsApp de la Sucursal 1**: se usa 259-1352 (fijo, encontrado en directorios) — confirmar si tienen un celular propio para WhatsApp.
- **Horarios exactos**: confirmar con el cliente (hoy están puestos por defecto).

## Cómo personalizarlo
- **Productos**: edita el arreglo `PRODUCTS` en [assets/js/main.js](assets/js/main.js)
- **Número de WhatsApp**: cambia `WHATSAPP_NUMBER` en el mismo archivo y los enlaces `wa.me` en [index.html](index.html)
- **Nombre, direcciones, horario**: edita directamente el contenido en [index.html](index.html)
- **Colores y estilos**: variables CSS al inicio de [assets/css/styles.css](assets/css/styles.css)

## Cómo verlo localmente
No requiere instalación. Abre `index.html` en el navegador, o sirve la carpeta con cualquier servidor estático:

```bash
python -m http.server 5500
```

Luego visita `http://localhost:5500`.

## Publicarlo gratis (GitHub Pages)
1. Sube este repositorio a GitHub
2. Ve a **Settings → Pages**
3. En "Source" selecciona la rama `main` y carpeta `/ (root)`
4. Guarda — el sitio quedará disponible en `https://<usuario>.github.io/<repositorio>/`
