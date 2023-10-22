import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'collectionBg': "url('/assets/images/thumbnail-background.svg')",
        'hero-background': "url('/assets/images/collection-background.svg')",
      },
      colors: {
        'peachy': '#ff6452',
        'peachy-dark': '#E55A49',
        'peachy-darker': '#cc5041 ',
      },
    },
  },
  plugins: [],
}
export default config
