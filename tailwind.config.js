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
        ],
        divH:[
          "635px"
        ],
        sec1:[
          "15%"
        ],
        sec2:[
          "40%"
        ],
        sec3:[
          "45%"
        ]
      },
      backgroundColor:{
        trans:[
          "#a9a9ab"
        ],
        bga:[
          "#d0d0d1"
        ],
        dark:[
          "rgb(40,45,53)"
        ],
        textBg:[
          "rgb(84,93,102)"
        ]
      }
    },
  },
  plugins: [],
}

