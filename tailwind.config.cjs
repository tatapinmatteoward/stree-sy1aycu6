/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        accent: '#ff4d6d',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
