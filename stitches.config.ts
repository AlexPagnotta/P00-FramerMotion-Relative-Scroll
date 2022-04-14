import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      inter: 'Inter, apple-system, sans-serif',
    },
    colors: {},
    media: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
    },
    fontSizes: {
      sm: '14px',
      md: '16px',
      lg: '20px',
    },
  },
})
