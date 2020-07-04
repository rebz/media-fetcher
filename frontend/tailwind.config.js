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
        'poster-lg': '26rem',
        'poster-md': '22rem',
        'poster-sm': '20rem',
      },
      width: {
        'poster-lg': '18rem',
        'poster-md': '16rem',
        'poster-sm': '14rem',
        '96': '24rem'
      },
    },
  },
}