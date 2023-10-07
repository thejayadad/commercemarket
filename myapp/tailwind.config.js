/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#2e00c6",
        
"secondary": "#aa8dd6",
        
"accent": "#beea44",
        
"neutral": "#2b2433",
        
"base-100": "#e7ebee",
        
"info": "#a8c8f0",
        
"success": "#71e5be",
        
"warning": "#bd9505",
        
"error": "#e33631",
        },
      },
    ],
  },
  theme: {
    extend: {

    },
  },
  plugins: [require("daisyui")],
}
