export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'scroll-x': 'scrollX 40s linear infinite',
      },
      keyframes: {
        scrollX: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }, // adjust depending on content width
        },
      },
    }
  },
  plugins: [],
};
