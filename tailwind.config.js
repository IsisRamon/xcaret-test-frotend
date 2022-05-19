module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    enabled:true,
    content: ['./src/components/**/*.tsx', './src/pages/**/*.tsx', './src/styles/**/*.css']
  }
  ,
  theme: {
    extend: {
      colors:{
        'color1':'#ffffff',
        'color2':'#ededed',
        'color3':'#ebebeb',
        'color4':'#dadada',
        'color5':'#d6d6d6',
        'color6':'#c7c7c7',
        'color7':'#bdbdbd',
        'color8':'#4a4a4a',
        'color9':'#363636',
        'color10':'#2e2e2e',
        'color11':'#161615',
        'color12':'#121212',
        'color13':'#000000',
      }
    },
  },
  variants: {},
  plugins: [
    "tailwindcss", 
    "postcss-preset-env"
  ]
};