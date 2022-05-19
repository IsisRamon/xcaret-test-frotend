module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    enabled:true,
    content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx', '.src/styles/**/*.css']
  }
  ,
  theme: {
    extend: {
      colors:{
        'ejemplo1':'#234145',
      }
    },
  },
  variants: {},
  plugins: [
    "tailwindcss", 
    "postcss-preset-env"
  ]
};