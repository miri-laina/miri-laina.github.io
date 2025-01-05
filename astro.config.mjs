// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

const SCRIPT = process.env.npm_lifecycle_script || '';
const isBuild = SCRIPT.includes('build');
const LOCALHOST_URL = 'http://localhost:4321';
const LIVE_URL = 'https://lisa-lavigne.github.io';

let BASE_URL = LOCALHOST_URL;

if (isBuild) {
    BASE_URL = LIVE_URL;
}


export default defineConfig({
    integrations: [tailwind()],
    vite: {
        define: {
            'import.meta.env.NOTION_API_KEY': JSON.stringify(process.env.NOTION_API_KEY),
        },
    },
    site: BASE_URL
});
