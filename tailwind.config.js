module.exports = {
  content: [ "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        doctorthems: {
          primary: "#0FCFEC",
          secondary:"#3A4256",
          accent: "#19D3AE",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },




  plugins: [require("daisyui")],
}
