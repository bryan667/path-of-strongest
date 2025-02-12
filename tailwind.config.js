// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Include your source files
  ],
  theme: {
    extend: {
      fontFamily: {
        fontinRegular: ['"FontinRegular"', 'serif'], // Add your custom font
      },
    },
  },
  plugins: [],
};
