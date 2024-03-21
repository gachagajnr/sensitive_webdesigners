/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{html,svelte,js,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			'luxury',
			'retro',
			'cmyk',
			'sunset',
			'winter',
			'nord',
			'fantasy',
			'autumn',
			'corporate',
			'business',
			"emerald",
			"dim"
		]
	}
};
