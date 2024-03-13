/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'brand': {
					'red': '#FF4152',
				}
			},
			fontFamily: {
				'heading': ['Playflair Display', 'serif'],
			},
		},
	},
	plugins: [],
}
