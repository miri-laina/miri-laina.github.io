/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  fontFamily: {
			sans: ['Outfit', 'sans-serif'],
			heading: ['Boldfinger', 'sans-serif']
		  },
		  colors: {
			primary: {
				DEFAULT: '#234852',
				100: '#CFE6EC',
				200: '#ADCBD3',
				300: '#7CA2AC',
				400: '#56818C',
				500: '#234852',
			},
			secondary: {
				DEFAULT: '#540B0E',
				100: '#E5BFC1',
				200: '#CF999B',
				300: '#A06063',
				400: '#7E3235',
				500: '#540B0E'
			},
			neutral: {
				DEFAULT: '#E09F3E',
				100: '#F9CA84',
				200: '#ECB35F',
				300: '#E09F3E'
			},
			accent: {
				DEFAULT: '#FFF3B0',
				100: '#FFF3B0'
			}
		  }
		}
	  },
	plugins: [],
}
