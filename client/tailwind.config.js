/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			width: {
				128: "72rem",
			},
			animation: {
				modalf: "modalf 0.15s ease-in-out",
			},
			keyframes: {
				modalf: {
					"0%": { transform: "scale(0)" },
					"100%": { transform: "scale(1.05)" },
				},
			},
		},
	},
	plugins: [],
};
