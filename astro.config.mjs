import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://konradmiosga.github.io',
    base: '/cs-notes/',
    vite: {
        resolve: {
            preserveSymlinks: true
        }
    },
    build: {
        format: 'file'
    },
    markdown: {
        shikiConfig: {
            // Choose from Shiki's built-in themes (or add your own)
            // https://github.com/shikijs/shiki/blob/main/docs/themes.md
            theme: 'material-theme-darker',
            // Alternatively, provide multiple themes
            // https://github.com/antfu/shikiji#lightdark-dual-themes
            // experimentalThemes: {
            //     light: 'github-light',
            //     dark: 'github-dark',
            // },
        },
    },
});
