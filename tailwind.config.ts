import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    screens: {
      sm: '350px',
      iphone12: '390px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    // colors: {
    //   transparent: 'transparent',
    //   current: 'currentColor',
    //   'danone': '#3b47a7',
    // },
  },
  variants: {},
  plugins: [ require('tailwindcss-animated')],
}

export default config
