import { colors } from 'styles/constants/colors'
import { sizes } from 'styles/constants/devices'
import { fontFamily } from 'styles/constants/typography'
import boxShadow from './boxShadow'

const preset = {
  theme: {
    extends: {
      colors,
      fonts: fontFamily,
      screens: {
        xs: 0,
        sm: sizes.mobile,
        md: sizes.tablet,
        lg: sizes.smLaptop,
        xl: sizes.laptop,
        '2xl': sizes.desktop,
        '3xl': 1920,
      },
    },
  },
  plugins: [
    '@tailwindcss/aspect-ratio',
    '@tailwindcss/container-queries',
    '@tailwindcss/forms',
    '@tailwindcss/typography',
    boxShadow,
  ],
}

export default preset
