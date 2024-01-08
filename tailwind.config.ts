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
      colors: {
        'customBlack': '#19191B',
        'customGrey': '#BABABB',
        'customPurple': '#262642',
        'customOrange': '#FBA81C',
        'customBlue': '#5454D4',
        'customRed': '#F04037'
      },
      fontFamily: {
        'montserrat': ['var(--font-montserrat)', 'Arial', 'sans-serif'],
        'nunito_sans': ['var(--font-nunito_sans)', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
}

export default config