import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#ffffff',
      gray: '#a7a7a7',
      gray1: '#f5f6f7',
      gray2: '#32393c',
      primary: '#0c7fb0',
      fields: "#CFE7DA",
      color_10: '#f7fbfe',
      color_50: '#eef0ff',
      color_100: '#e0e4ff',
      color_200: '#c7ccfe',
      color_400: '#8382f7',
      color_500: '#7064f0',
      color_600: '#6147e4',
      color_700: '#6149cd',
      color_800: '#4431a2',
      color_900: '#3b2f80',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
