/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "class",
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				'white': '#ffffff',
				'black': '#000000',
				'background': '#000000',
				'secondary': '#080808',
				'primary': '#F1C40F',
				'bg-rgba': "rgba(0,0,0,.8)"
			},
			gridTemplateColumns: {
				'about': '1fr auto'
			}
		},
	},
	plugins: [],
}
