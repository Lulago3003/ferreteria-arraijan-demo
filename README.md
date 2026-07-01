# Ferretería El Progreso — Sitio Demo

Demo de sitio web para presentar a un cliente (ferretería en Arraiján, Panamá). Usa datos e imágenes de ejemplo — reemplázalos por la información real del negocio antes de entregarlo como producto final.

## Qué incluye
- Catálogo de productos con filtro por categoría y buscador en vivo
- Botón de WhatsApp (flotante y en cada producto) para cotizar
- Sección de ofertas del mes
- Ubicación con mapa embebido, horario y contacto
- Testimonios de clientes
- Diseño responsive (móvil/tablet/escritorio)

## Cómo personalizarlo
- **Productos**: edita el arreglo `PRODUCTS` en [assets/js/main.js](assets/js/main.js)
- **Número de WhatsApp**: cambia `WHATSAPP_NUMBER` en el mismo archivo y los enlaces `wa.me` en [index.html](index.html)
- **Nombre, dirección, horario**: edita directamente el contenido en [index.html](index.html)
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
