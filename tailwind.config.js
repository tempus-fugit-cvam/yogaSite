
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand-dark-salmon': '#F09A7F',
        'brand-melon': '#FDC0AF',
        'brand-peach': '#F6DAA2',
        'brand-medium-champagne': '#FBEBB1',
        'brand-platinum': '#EBEAEB',
        'brand-antique-white': '#FFEFDE',
        'brand-deep-champagne': '#FED7AA',
        'brand-gunmetal': '#1F2937',
      },
    },

    screens: {
      'sm': '360px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
}
