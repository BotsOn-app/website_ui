import { sveltekit } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess';
import { resolve } from 'path';

/** @type {import('vite').UserConfig} */
const config = {
        plugins: [sveltekit()],
        preprocess: [
                preprocess({
                        postcss: true,
                })
        ],
        resolve: {
                alias: {
                        $components: resolve('src/lib/components'),
                }
        }
};

export default config;