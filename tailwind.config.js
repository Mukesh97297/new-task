/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial':'radial-gradient(58.43% 58.43% at 50% 0%, #0E1330 0%, #060B27 100%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'gradient-custom': 'linear-gradient(90deg, #C561FF 0%, #5533FF 100%)',
          'back-color': "url('/images/Background.png')",
          'hero-back-img':"url('/images/Background-color.png')",
          'rectangle-8': "url('/images/Rectangle 8.png')",
          
        
      },
      boxShadow: {
        'custom-sm': '0px 0px 16px 0px rgba(58, 54, 255, 0.24)',
        'custom-lg': '0px 0px 64px 0px rgba(225, 194, 255, 0.48)',
      },
      backgroundPosition: {
        'topleft': '0% 0%',
        'top': 'top',
        'bottom': 'bottom',
      },
      backgroundColor: {
        'transparent': 'rgba(14, 19, 48, 0)',
        'white-opacity-10': 'rgba(255, 255, 255, 0.1)',
      },
      backgroundSize: {
        'auto': 'auto',
      },
      gradientColorStops: {
        'transparent': 'rgba(14, 19, 48, 0)',
        'white-opacity-10': 'rgba(255, 255, 255, 0.1)',
      },
      colors:{
        'gradiant': 'linear-gradient(95.87deg, #F34079 4.95%, #FC894D 95.07%)',
      }
    },
  },
  plugins: [],
}
