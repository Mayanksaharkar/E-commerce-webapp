import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backdropBlur: {
        "3xl": "30px",
      },
      backgroundImage: {
        "jethalal-bg": "url('/public/HomePageImg.jpeg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  variants: {
    extend: {
      backdropBlur: ["responsive"],
    },
  },
  plugins: [
    daisyui,
    function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
        },
      });
    },
  ],
  daisyui: {
    themes: [
      {
        cupcake: {
          primary: "#a991f7",
          secondary: "#333C4D",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "emerald",
      "cupcake",
      "wireframe",
    ],
  },
};
