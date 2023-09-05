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
      keyframes: {
        'bounce': {
          '0%, 100%': {
            transform: 'translateY(-25%)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'
            // animation-timing-function: 'cubic-bezier(0.8, 0, 1, 1)'
          },
          '50%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)'
            // animation-timing-function: 'cubic-bezier(0, 0, 0.2, 1)'
          },
        },
      },
      animation: {
        'bounce-fast': 'bounce 0.75s ease-in-out infinite',
      },
    }
  },
  plugins: [],
};

