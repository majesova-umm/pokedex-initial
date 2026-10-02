# Pokédex — Laboratorio Next.js

Proyecto inicial para la práctica de **Diseño de Interfaces** (Universidad Marista de Mérida).

Stack: Next.js (App Router) · React · Tailwind CSS · [PokéAPI](https://pokeapi.co)

## Arranque

```bash
git clone <url-de-este-repo>
cd pokedex-next-initial
npm install
code .
npm run dev
```

Abre http://localhost:3000. Si ves la pantalla "¡Tu proyecto está listo!", continúa con la guía.

## Estructura

```
app/
  layout.js     # estructura común de todas las páginas
  page.js       # página principal (aquí empiezas)
  globals.css   # Tailwind ya está configurado
```

## Scripts

| Comando         | Qué hace                              |
| --------------- | ------------------------------------- |
| `npm run dev`   | Servidor de desarrollo con recarga    |
| `npm run build` | Compila la versión de producción      |
| `npm start`     | Ejecuta la versión compilada          |
