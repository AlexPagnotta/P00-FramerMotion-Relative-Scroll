import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  // Resets
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  '*': {
    margin: 0,
  },

  // Global Styles
  body: {
    fontFamily: '$inter',
    fontSize: '$sm',
  },
})
