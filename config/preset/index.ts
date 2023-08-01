import defaultTheme from 'tailwindcss/defaultTheme'

import boxShadow from './boxShadow'
import colors from './colors'
import screens from './screens'

const preset = {
  theme: {
    colors,

    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },

    screens: {
      mobile: '375px',
      tablet: '800px',
      laptop: '1080px',
      desktop: '1366px',
      wide: '1600px',
    },
  },
  plugins: [
    '@tailwindcss/aspect-ratio',
    '@tailwindcss/container-queries',
    '@tailwindcss/forms',
    '@tailwindcss/typography',
    boxShadow,
    colors,
    screens,
  ],
}

export default preset
