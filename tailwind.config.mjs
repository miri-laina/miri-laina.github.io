/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#22577A'
				},
				secondary: {
					DEFAULT: '#38A3A5'
				},
				tertiary: {
					DEFAULT: '#57CC99'
				},
				quaternary: {
					DEFAULT: '#80ED99'
				},
				quinary: {
					DEFAULT: '#C7F9CC'
				}
			}
		}
	},
	plugins: [],
}
