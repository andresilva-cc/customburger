import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  theme: {
    colors: {
      primary: {
        500: '#d53734',
        600: '#c0322f',
        700: '#a02927'
      },
      secondary: {
        500: '#faa916',
        600: '#e19814',
        700: '#c3810a'
      },
      light: {
        50: '#fff7f7',
        100: '#fdefef',
        200: '#f5d9d8'
      },
      gray: {
        900: '#26272b'
      },
      white: '#ffffff',
      transparent: 'transparent'
    },
    fontFamily: {
      heading: ['Londrina Solid', 'sans-serif'],
      body: ['Signika', 'sans-serif']
    },
    fontSize: {
      xs: '0.75rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '2.125rem'
    },
    borderRadius: {
      none: '0',
      DEFAULT: '0.3125rem',
      lg: '0.625rem'
    },
    extend: {
      screens: {
        'preview-height': { raw: '(min-height: 768px)' }
      }
    }
  }
}
