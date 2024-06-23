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
  plugins: [daisyui],
  daisyui: {
    themes: ["light", "emerald", "cupcake", "wireframe"],
  },
};
