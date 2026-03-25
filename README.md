# Disney Landing Page

Landing page estatica inspirada en Disney+ y ESPN, preparada para publicarse en GitHub Pages.

## Estructura

```text
.
|-- index.html
|-- src/
|   |-- css/
|   |   `-- styles.css
|   |-- js/
|   |   `-- scroll.js
|   `-- img/
|       |-- Background/
|       |-- channels/
|       |-- devices/
|       |-- logo/
|       |-- logo-nav/
|       |-- Movies/
|       |-- recent/
|       `-- Sports/
`-- .nojekyll
```

## Publicar en GitHub Pages

1. Sube este repositorio a GitHub.
2. En GitHub, abre `Settings`.
3. Entra en `Pages`.
4. En `Build and deployment`, configura:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
5. Guarda los cambios y espera la URL publica.

## Notas

- Las rutas locales quedaron en formato relativo para que funcionen dentro de GitHub Pages.
- `.nojekyll` evita que GitHub procese el proyecto como un sitio Jekyll.
- Si renombras carpetas o imagenes, actualiza tambien las referencias en `index.html` y `src/css/styles.css`.
