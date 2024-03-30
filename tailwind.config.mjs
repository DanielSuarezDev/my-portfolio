/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			h1: {
				fontSize: '2.5rem',
				fontWeight: '700',
				lineHeight: '1.2',
			},
			h2: {
				fontSize: '2rem',
				fontWeight: '700',
				lineHeight: '1.2',
			},
			h3: {
				fontSize: '1.75rem',
				fontWeight: '700',
				lineHeight: '1.2',
			},
		},
	},
	plugins: [],
}
