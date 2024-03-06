import animations from '@midudev/tailwind-animations'

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/flowbite/**/*.js"
	],
	theme: {
		extend: {
			colors: {
				'light-primary': '#fff9e6',
				'light-secondary': '#fff2cc',
				'light-tertiary': '#ffecb3',
				'dark-primary': '#000000'
			}
		},
	},
	 plugins: [animations]
	 
}
