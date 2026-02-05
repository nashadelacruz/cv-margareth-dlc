/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',    // Azul noche para textos
          primary: '#6366f1', // Indigo vibrante
          secondary: '#ec4899', // Rosa fucsia (para destacar)
          accent: '#8b5cf6',    // Violeta
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        storyScript: ["Story Script", 'sans-serif'],
        rubickVyn: ["Rubik Vinyl", 'system-ui'],
        miChromma: ["Michroma", 'sans-serif']
      },
      backgroundImage: {
        "grad-rose": "linear-gradient(135deg, #fbc2eb, #a6c1ee)",
        "grad-peach": "linear-gradient(135deg, #fddb92, #d1fdff)",
        'grad-lavender': "linear-gradient(180deg, #c471f5, #fa71cd)",

        'radial-turk': 'radial-gradient(circle, #87007cff, #0f172a)',

        'radial-smart': 'radial-gradient(circle, rgb(255, 179, 249), #aae3ff)',
        'radial-roseviolet': 'radial-gradient(circle, rgb(255, 0, 234), #6d00fb)',

        'radial-rose': 'radial-gradient(circle, rgb(242, 149, 220), #ffffff)',
        'radial-violet': 'radial-gradient(circle, rgb(197, 149, 242), #ffffff)',
        'radial-cyan': 'radial-gradient(circle, rgb(149, 234, 242), #ffffff)',

        'radial-grosso': 'radial-gradient(circle, #2e0013, rgb(0, 0, 0))',

        // 'efg': linear-gradient(to_bottom, #003734ff , #0f172a),
        // "abcd": linear-gradient(to_top, #132933ff 0%, #004666ff 25%, #0f172a 60%)

        //👇con imágenes
        'hero-haikei': "url('/images/wave-beaut.svg')",
        'hero-skatter': "url('/images/circle-scatter.svg')",
      },

      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.5)', // Brillo neon suave
      }
    },
  },
  plugins: [],
}