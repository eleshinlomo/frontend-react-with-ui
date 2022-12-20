/** @type {import('tailwindcss').Config} */
module.exports = {

  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {

      fontFamily: {

        previhear: "'Preahvihear', sans-seri",
        mt: "'Montserrat', sans-serif",
        os: "'Oswald', sans-serif",
        pp: "'Poppins', sans-serif"

      },

      colors: {

        tp: 'rgb(44,18,80)',
        eleshp: 'rgb(113,39,186)',
        
        
      },

      backgroundImage: {

        radialpurple: 'radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)'

      }
    },
  },
  plugins: [],
}