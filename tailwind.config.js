/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'j-gray-500': '#737994',
        'j-blue-500': '#8CAAEE',
        'j-blue-900': '#303446',
      },
      width: {
        120: '30rem',
        125: '31.25rem',
      },
      height: {
        120: '30rem',
        125: '31.25rem',
      },
    },
  },
  plugins: [],
};
