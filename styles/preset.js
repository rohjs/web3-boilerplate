const { colors } = require('./constants/colors')
const { sizes } = require('./constants/devices')
const { fontFamily } = require('./constants/typography')

module.exports = {
  theme: {
    colors,

    fonts: fontFamily,

    screen: {
      xs: 0,
      sm: sizes.mobile,
      md: sizes.tablet,
      lg: sizes.smLaptop,
      xl: sizes.laptop,
      '2xl': sizes.desktop,
      '3xl': 1920,
    },
  },
}
