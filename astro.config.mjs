import { defineConfig } from 'astro/config';

export default defineConfig({
    server: {
        port: 4000
    },
    vite: {
        build: {
            rollupOptions: {
                external: [
                    "bun:sqlite"
                ]
            },
        },
    },

});
