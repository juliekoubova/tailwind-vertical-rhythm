module.exports = {
  theme: {
    fontFamily: {
      quicksand: ['Quicksand', 'sans-serif']
    }
  },
  verticalRhythm: {
    defaultLineHeight: 'loose',
    fontCapHeight: {
      // Calculated using https://codepen.io/sebdesign/pen/EKmbGL?editors=0011
      'default': 0.705,
    },
    height: 0.5 // Vertical rhythm in rems
  },
  plugins: [
    require('../index.js')
  ]
}