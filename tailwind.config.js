/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          primary: "#03045e", 
          secondary: "#0077b6", 
          tertiary: "#00b4d8",  
        },
      },
    },
    plugins: [],
  };
      