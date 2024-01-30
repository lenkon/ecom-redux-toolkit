// const withMT = require("@material-tailwind/react/utils/withMT");
 
// module.exports = withMT({
//  content: [],
//   theme: {
//     extend: {
//       fontFamily: {
//         inter: ["Inter", "sans-serif"],
//       },
//       colors: {
//         'color-green': '#97BF0F', 
//         'color-purple': 'rgb(93 13 83 / var(--tw-bg-opacity))',   
//       },
//     },
//   },
//   plugins: [],
// });

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
});
