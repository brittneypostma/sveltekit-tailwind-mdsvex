import preprocess from 'svelte-preprocess'
import { mdsvex } from 'mdsvex'
import { mdsvexConfig } from './mdsvex.config.js'
import path from 'path'
/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
		// vite: {
		// 	resolve: {
		// 		alias: {
		// 			// '@utils': path.resolve('./src/utils'),
		// 			// '@lib': path.resolve('./src/lib')
		// 		}
		// 	}
		// }
	}
}

export default config
