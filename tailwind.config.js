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
        hovera:[
          "#a9a9ab"
        ]
      },
      height:{
        navH:[
          "75px"
        ]
      },
      backgroundColor:{
        trans:[
          "#a9a9ab"
        ],
        bga:[
          "#d0d0d1"
        ]
      }
    },
  },
  plugins: [],
}

