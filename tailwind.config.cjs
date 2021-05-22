module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		colors: {
			transparent: 'transparent',
			basics: {
				'050': 'hsl(0 0% 100%)',
				100: 'hsl(209 36% 86%)',
				200: 'hsl(224 44% 95%)',
				300: 'hsl(204 22% 77%)',
				400: 'hsl(0 0% 27%)',
				500: 'hsl(0 0% 0%)'
			},
			accent: {
				DEFAULT: 'hsl(15 100% 50%)'
			},
			heading: {
				DEFAULT: 'hsla(0 0% 0% / 0.7)'
			},
			text: {
				DEFAULT: 'hsl(0 0% 27%)'
			}
		},
		extend: {
			fontFamily: {
				sans: [
					'Open Sans',
					'ui-sans-serif',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Helvetica Neue',
					'Arial',
					'Noto Sans',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					'Noto Color Emoji'
				],
				mono: [
					'Fira Mono',
					'ui-monospace',
					'SFMono-Regular',
					'Menlo',
					'Monaco',
					'Consolas',
					'Liberation Mono',
					'Courier New',
					'monospace'
				]
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
};
