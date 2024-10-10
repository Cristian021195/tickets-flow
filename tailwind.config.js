/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}'],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/bg-dna.svg')"
      }
    },
  },
  plugins: [require('daisyui')],
  daisyui:{
    themes: true, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "valentine", // name of one of the included themes for dark mode
  }
}

