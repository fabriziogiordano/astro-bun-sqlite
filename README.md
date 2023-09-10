# Astro and Bun using SQLite (bug)

## Steps

1. Clone the repo
2. `bun install` or `npm install`
3. `bun run dev`

Expected outcome: Astro dev serve the site

Actual outcome:

```bash
# bun run dev                 
$ astro dev
  🚀  astro  v3.0.12 started in 202ms
  
  ┃ Local    http://localhost:4000/
  ┃ Network  use --host to expose
  
Error: The following dependencies are imported but could not be resolved:

  bun:sqlite (imported by /root/astro-bun-sqlite/src/libs/db.ts)

Are they installed?
    at file:///root/astro-bun-sqlite/node_modules/vite/dist/node/chunks/dep-df561101.js:45705:23
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    at async file:///root/astro-bun-sqlite/node_modules/vite/dist/node/chunks/dep-df561101.js:45114:38
```