/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html","./dist/*.html"],
  theme: {
    extend: {
      fontFamily:{
        myfont:[
          "Sigmar", "serif"
        ]
      },
      textColor:{
        primary_color: [
          "rgb(138,180,248)"
        ],
        pink:[

        ]
      }
    },
  },
  plugins: [],
}

