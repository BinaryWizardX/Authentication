/** @type {import('tailwindcss').Config} */
export default {
  content: [

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",


  ],
  theme: {
    extend: {
      colors : {
        'lime-green-harshana' : {

          DEFAULT :'#4CBB17',
          100 : '#D1EFC4',
          200 : '#C2F08C',
          300 : '#D2EF4B',
          650 : '#9DCA3D',
          720 : '#8DB600',
          880 : '#355E3B'

        }

      },
      screens : {

        'widescreen' : {'raw' : '(min-aspect-ratio: 3/2)'},
        'tallscreen' : {'raw' : '(max-aspect-ratio: 13/20)'}

      },
      keyframes : {

        mobile_menu :{
          '0%' : {transform : 'scaleY(0)'},
          '80%': {transform : 'scaleY(1.25)'},
          '100%' : {transform : 'scaleY(1)'}
        }

        


      },
      animation : {

        mobile_menu_animation : 'mobile_menu 0.5s ease-in-out forwards '

      }
    },
  },
  plugins: [],
}

