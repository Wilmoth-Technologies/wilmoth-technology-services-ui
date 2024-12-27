/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['como', 'sans-serif']
      },
      colors: {
        'grey-primary': '#252826',
        'grey-footer': '#151515',
        'action-yellow': '#FFAC00',
        'comment-card-color': '#F1F1F1',
        'comment-card-review-date-color': '#838383',
        'border-gray': '#D3D3D3',
        'gray-text': '#A9A9A9',
        'search-background': '#F4F8F9',
        'modal-background': '#E6E5DF',
        'olive-green': '#556B2F',
        'olive-light': '#7C8F4F',
        'olive-lighter': '#A4B472',
        'olive-dark': '#3F511F',
        'olive-darker': '#2A3615',
        'sage': '#8FA977',
        'wheat': '#F5DEB3',
        'cream': '#FDFBF7',
        'navy-blue': '#0A2647',
        'sky-400': '#38BDF8',
        'lime-accent': '#9DC209',
        'citrus': '#C4D600',
        'mint': '#98FF98',
        'chartreuse': '#7FFF00',
        'spring-green': '#00FF7F',
        'navy-blue': '#001F3F',
        'sky-400': '#38BDF8',
        'sky-500': '#0EA5E9',
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '80%': { transform: 'scaleY(1.2)' },
          '100%': { transform: 'scaleY(1)' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      },
      backgroundImage: {
        'desktop-landing-page': "url('/DSC07175.jpg')",
        'mobile-landing-page': "url('/DSC07202-2.jpg')",
        'kei-footer': "url('/Kei-footer.png')",
        'landing-page-kei-lineup': "url('/LandingKeiLineUp2.png')",
        'inventory-kei-banner-mobile': "url('/DSC07293-2.jpg')",
        'inventory-kei-banner': "url('/DSC07293.jpg')",
        'modal-kei-standoff': "url('/KeisStandOffModal.jpg')",
        'kei-hauler': "url('/Kei-Hauler.png')",
      },
      dropShadow: {
        'lg': '0 10px 8px rgb(0, 0, 0, 0.2)',
      },
      screens: {
        'navLineWrapEnd': '768px',
        'navLineWrapStart': '1425px',
        'threeInventoryColBreakPoint': '950px',
        'fourInventoryColBreakPoint': '1160px',
        'fiveInventoryColBreakPoint': '1600px',
        'sixInventoryColBreakPoint': '1790px',
        'eightInventoryColBreakPoint': '1929px',
        'largerMobile': '391px',
      },
      rotate: {
        '135': '135deg',
      }
    },
  },
  plugins: [flowbite],
}

