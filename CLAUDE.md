# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About

A personal playground for small frontend experiments. The backend serves Pug-rendered HTML pages; frontend uses plain HTML, CSS, and JavaScript.

## Tech stack

- Backend: Node.js + Express (`app.js`), started via `bin/www`
- Templating: Pug
- Frontend: plain HTML, CSS, JavaScript (no build step, no bundler)

## Running

```bash
npm start        # starts the server on http://localhost:3000
```

## Architecture

```
bin/www                    # HTTP server entry point
app.js                     # Express app setup (middleware, routes, error handling)
src/routes/                # Route definitions (one file per project)
views/                     # Pug templates
  layout.pug               # Base layout (blocks: stylesheets, content, scripts)
  index.pug                # Home page
  <project>/index.pug      # One subdirectory per project
public/                    # Static assets (stylesheets, images, javascripts)
```

Routes render Pug views via `res.render()`. Each project gets a route file in `src/routes/` and a view directory under `views/`. Adding a new project: create `src/routes/<name>.js`, add its view at `views/<name>/index.pug`, and register the router in `app.js`.

## Routes

| Path | Description |
|------|-------------|
| `/` | Home — lists all project links |
| `/drag-and-drop` | Drag & Drop app |
