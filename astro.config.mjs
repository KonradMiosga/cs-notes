import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://konradmiosga.github.io',
    base: '/cs-notes',
    vite: {
        resolve: {
            preserveSymlinks: true
        }
    }

});
