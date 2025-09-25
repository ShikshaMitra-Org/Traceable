/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'crimson': ['Crimson Pro', 'serif'],
      },
      colors: {
        'brand-accent': 'hsl(0, 0%, 20%)',
        'text-secondary': 'hsl(0, 0%, 40%)',
        'subtle-border': 'hsl(0, 0%, 90%)',
        'minimal-accent': 'hsl(0, 0%, 10%)',
      },
      letterSpacing: {
        'logo': '0.2em',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}