const plugin = require('tailwindcss/plugin')

const isH5 = process.env.UNI_PLATFORM === 'h5'



function myNegative (obj) {
  let __obj = {}
 
  // 负值转换
  for (let key in obj) {
    if (key === 0 || key === '0') {
      __obj[`${key}`] = `${obj[key]}`
    } else {
      __obj[`-${key}`] = `-${obj[key]}`
    }
  }
  return __obj
}

module.exports = {
  darkMode: 'class',
  purge: {
    content: ['./src/**/*.vue', './src/**/*.wxml'],
  },
  corePlugins: [
    isH5 ? 'preflight' : 'container',
    'alignContent',
    'alignItems',
    'backgroundColor',
    'backgroundPosition',
    'backgroundRepeat',
    'backgroundSize',
    'borderColor',
    'borderRadius',
    'borderStyle',
    'borderWidth',
    'boxSizing',
    'clear',
    'display',
    'fill',
    'flex',
    'flexDirection',
    'flexGrow',
    'flexShrink',
    'flexWrap',
    'fontSize',
    'fontWeight',
    'height',
    'inset',
    'justifyItems',
    'justifyContent',
    'lineHeight',
    'margin',
    'maxHeight',
    'maxWidth',
    'minHeight',
    'minWidth',
    'objectFit',
    'objectPosition',
    'opacity',
    'overflow',
    'position',
    'padding',
    'placeholderColor',
    'placeholderOpacity',
    'rotate',
    'scale',
    'tableLayout',
    'textAlign',
    'textColor',
    'textDecoration',
    'textOverflow',
    'textTransform',
    'transform',
    'transformOrigin',
    'transitionDelay',
    'transitionDuration',
    'transitionProperty',
    'transitionTimingFunction',
    'translate',
    'userSelect',
    'verticalAlign',
    'visibility',
    'whitespace',
    'width',
    'wordBreak',
    'zIndex'
  ],
  variants: {
    accessibility: [],
    alignContent: [],
    alignItems: [],
    alignSelf: [],
    appearance: [],
    backgroundAttachment: [],
    backgroundColor: ['dark', 'active', 'disabled'],
    backgroundPosition: [],
    backgroundRepeat: [],
    backgroundSize: [],
    borderCollapse: [],
    borderColor: [],
    borderRadius: [],
    borderStyle: [],
    borderWidth: [],
    boxShadow: [],
    cursor: [],
    display: [],
    fill: [],
    flex: [],
    flexDirection: [],
    flexGrow: [],
    flexShrink: [],
    flexWrap: [],
    float: [],
    fontFamily: [],
    fontSize: [],
    fontSmoothing: [],
    fontStyle: [],
    fontWeight: [],
    height: [],
    inset: [],
    justifyContent: [],
    letterSpacing: [],
    lineHeight: [],
    listStylePosition: [],
    listStyleType: [],
    margin: [],
    maxHeight: [],
    maxWidth: [],
    minHeight: [],
    minWidth: [],
    objectFit: [],
    objectPosition: [],
    opacity: ['disabled'],
    order: [],
    outline: [],
    overflow: [],
    padding: [],
    placeholderColor: [],
    pointerEvents: [],
    position: [],
    resize: [],
    stroke: [],
    tableLayout: [],
    textAlign: [],
    textColor: ['dark', 'active'],
    textDecoration: [],
    textTransform: [],
    userSelect: [],
    verticalAlign: [],
    visibility: [],
    whitespace: [],
    width: [],
    wordBreak: [],
    zIndex: [],
  },
  theme: {
    screens: false,
    spacing: {
      px: '1px',
      '0': '0',
      '1': '1rpx',
      '2': '2rpx',
      '4': '2rpx',
      '6': '6rpx',
      '8': '8rpx',
      '10': '10rpx',
      '12': '12rpx',
      '14': '14rpx',
      '16': '16rpx',
      '18': '18rpx',
      '20': '20rpx',
      '22': '22rpx',
      '24': '24rpx',
      '26': '26rpx',
      '28': '28rpx',
      '30': '30rpx',
      '32': '32rpx',
      '34': '34rpx',
      '36': '36rpx',
      '38': '38rpx',
      '40': '40rpx',
      '42': '42rpx',
      '44': '44rpx',
      '46': '46rpx',
      '48': '48rpx',
      '50': '50rpx',
      '60': '60rpx',
      '56': '56rpx',
      '64': '64rpx',
      '70': '70rpx',
      '80': '80rpx',
      '90': '90rpx',
      '100': '100rpx',
      '120': '120rpx',
      '140': '140rpx',
      '160': '160rpx',
      '200': '200rpx',
      '260': '260rpx',
      '300': '300rpx',
      '350': '350rpx',
      '400': '400rpx',
      '500': '500rpx',
      '600': '600rpx',
      '700': '700rpx',
      '750': '750rpx'
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    minHeight: {
      0: '0rpx',
      '1_5': '20%',
      '2_5': '40%',
      '3_5': '60%',
      '4_5': '80%',
      '5_6': '83.333333%',
      '1_7': '14.285714%',
      '1_8': '12.5%',
      '1_9': '11.111111%',
      '1_10': '10%',
      '1_11': '9.090909%',
      '1_12': '8.333333%',
      '2_12': '16.666667%',
      '3_12': '25%',
      '4_12': '33.333333%',
      '5_12': '41.666667%',
      '6_12': '50%',
      '7_12': '58.333333%',
      '8_12': '66.666667%',
      '9_12': '75%',
      '10_12': '83.333333%',
      '11_12': '91.666667%',
      full: '100%',
      screen: '100vh',
    },

    width: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1_10': '10%',
      '1_9': '11.111111%',
      '1_8': '12.5%',
      '1_7': '14.285714%',
      '1_5': '20%',
      '1_4': '25%',
      '1_3': '33.333333%',
      '1_2': '50%',
      '2_5': '40%',
      '3_5': '60%',
      '4_5': '80%',
      '5_6': '83.333333%',
      '3_4': '75%',
      full: '100%',
      screen: '100vw'
    }),
    height: theme => ({
      auto: 'auto',
      ...theme('spacing'),
      '1_10': '10%',
      '1_9': '11.111111%',
      '1_8': '12.5%',
      '1_7': '14.285714%',
      '1_5': '20%',
      '1_4': '25%',
      '1_3': '33.333333%',
      '1_2': '50%',
      '2_5': '40%',
      '3_5': '60%',
      '4_5': '80%',
      '5_6': '83.333333%',
      '3_4': '75%',
      full: '100%',
      screen: '100vh'
    }),

    inset: {
      '20': '20rpx',
      '-20': '-20rpx',
      '-10': '-10rpx'
    },
    margin: (theme) => {
      // 使用了 reduce 这个包 rpx 是能转换的暂时自己比变量添加
      return {
        auto: 'auto',
        ...theme('spacing'),
        ...myNegative(theme('spacing'))
      }
    },

    letterSpacing: {
      tighter: '-1px',
      tight: '-0.5px',
      normal: '0',
      wide: '1rpx',
      wider: '2rpx',
      widest: '3rpx'
    },
    fontSize: {
      xs: '12rpx',
      sm: '14rpx',
      base: '16rpx',
      lg: '18rpx',
      xl: '20rpx',
      '2xl': '24rpx',
      '3xl': '30rpx',
      '4xl': '36rpx',
      '5xl': '48rpx',
      '6xl': '64rpx'
    },
    borderRadius: {
      none: '0',
      xs: '2rpx',
      sm: '4rpx',
      default: '6rpx',
      lg: '8rpx',
      xl: '10rpx',
      '2xl': '12rpx',
      '3xl': '14rpx',
      '4xl': '16rpx',
      '5xl': '20rpx',
      full: '9999px'
    },
    borderWidth: {
      default: '1rpx',
      '0': '0rpx',
      '2': '2rpx',
      '4': '4rpx',
      '8': '8rpx'
    },
    gradients: theme => ({
      // blue to other
      'blue-green': [theme('colors.blue.500'), theme('colors.green.500')],
      'blue-purple': [theme('colors.blue.500'), theme('colors.purple.500')],

      // green to other
      'green-blue': [theme('colors.green.500'), theme('colors.blue.500')],
      'green-red': [theme('colors.green.500'), theme('colors.red.500')],
      // purple to other
      'purple-blue': [theme('colors.purple.500'), theme('colors.blue.500')],
      'purple-orange': [theme('colors.purple.500'), theme('colors.orange.500')],
      'purple-yellow': [theme('colors.purple.500'), theme('colors.yellow.500')],
      // orange to other
      'orange-purple': [theme('colors.orange.500'), theme('colors.purple.500')],
      'orange-indigo': [theme('colors.orange.500'), theme('colors.indigo.500')],
      // red to other
      'red-purple': [theme('colors.red.500'), theme('colors.purple.500')],
      'red-green': [theme('colors.red.500'), theme('colors.green.500')],

      // teal to other
      'teal-red': [theme('colors.teal.500'), theme('colors.red.500')],

      // indigo to other
      'indigo-red': [theme('colors.indigo.500'), theme('colors.red.500')],

      // pink to other
      'pink-red': [theme('colors.pink.500'), theme('colors.red.500')],
      'pink-blue': [theme('colors.pink.500'), theme('colors.blue.500')],

      // yellow to other
      'yellow-indigo': [theme('colors.yellow.500'), theme('colors.indigo.500')]

    }),
    outline: {
      none: ['4rpx solid transparent', '4rpx'],
      white: ['4rpx dotted white', '4rpx'],
      black: ['4rpx dotted black', '4rpx'],
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const testComponents = {
        '.shadow': {
          boxShadow:
            '0 2rpx 6rpx 0 rgba(0, 0, 0, 0.1), 0 2rpx 4rpx 0 rgba(0, 0, 0, 0.06)',
        },
      }
      addComponents(testComponents)
    })
  ],
}
