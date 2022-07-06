/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px'
		},
		extend: {
			colors: {
				primary: '#202c39',
				'primary-light': '#283845',
				'primary-dark': '#1d2834',
				secondary: '#f2c584',
				'secondary-light': '#f2d492',
				'secondary-dark': '#f2b576'
			}
		}
	},
	plugins: []
};
