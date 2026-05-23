import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0D0D0F',
        card: '#13131A',
        accent: '#6B4EFF',
        green: '#22C55E',
        red: '#EF4444',
        text: '#F0F0F5',
        muted: '#6B7280',
      },
      fontFamily: {
        serif: ['"Playfair Display SC"', 'serif'],
        sans: ['"Karla"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
