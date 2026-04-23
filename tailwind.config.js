/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    // Keep MEA global CSS (themes, components) intact
    preflight: false,
  },
  theme: {
    extend: {
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: '#FFFFFF',
        foreground: '#000000',
        muted: '#6F6F6F',
      },
    },
  },
  plugins: [],
}
