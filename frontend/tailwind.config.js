const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  // purge: ['./dist/**/*.css'],
  purge: false,
  theme: {
    // screens: {
    //   'sm': '640px',
    //   // => @media (min-width: 640px) { ... }

    //   'md': '768px',
    //   // => @media (min-width: 768px) { ... }

    //   'lg': '1024px',
    //   // => @media (min-width: 1024px) { ... }

    //   'xl': '1280px',
    //   // => @media (min-width: 1280px) { ... }
    // },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      height: {
        'poster-xl': '26rem',
        'poster-lg': '22rem',
        'poster-md': '20rem',
        'poster-sm': '7rem',
      },
      width: {
        'poster-xl': '18rem',
        'poster-lg': '16rem',
        'poster-md': '14rem',
        'poster-sm': '5rem',
        '96': '24rem'
      },
    },
  },
}