/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const settingsScreens = require('./tailwind.settings.screens')
const settingsFontSizes = require('./tailwind.settings.fontSizes')
module.exports = {
  darkMode: 'class',
  mode: "jit",
  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./*.{vue,js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    screens: settingsScreens,
    fontSize: settingsFontSizes,
    extend: {
      fontFamily: {
        'sen':['Sen'],
        'aeonik-light':['AeonikLight'],
        'aeonik':['Aeonik'],
        'aeonik-bold':['AeonikBold']
      },
      colors: {
        ...colors,
        grey:{
          25:"#FCFCFD",
          50:"#F9FAFB",
          100:"#F2F4F7",
          200:"#EAECF0",
          300:"#D0D5DD",
          400:"#98A2B3",
          500:" #667085",
          600:"#475467",
          700:"#344054",
          800:"#1D2939",
          900:"#101828"
        },
        "secondary": {
          "50": "#41495c",
          "100": "#373f52",
          "200": "#2d3548",
          "300": "#232b3e",
          "400": "#192134",
          "500": "#0f172a",
          "600": "#050d20",
          "700": "#000316",
          "800": "#00000c",
          "900": "#000002"
        },
        "primary": {
          "50": "#6cf1ff",
          "100": "#62e7ff",
          "200": "#58ddff",
          "300": "#4ed3ff",
          "400": "#44c9ff",
          "500": "#3abff8",
          "600": "#30b5ee",
          "700": "#26abe4",
          "800": "#1ca1da",
          "900": "#1297d0"
        },
        "accent": {
          "50": "#ffa3e7",
          "100": "#ff99dd",
          "200": "#ff8fd3",
          "300": "#ff85c9",
          "400": "#fe7bbf",
          "500": "#f471b5",
          "600": "#ea67ab",
          "700": "#e05da1",
          "800": "#d65397",
          "900": "#cc498d"
        },
        "neutral": {
          "50": "#4f5a6c",
          "100": "#455062",
          "200": "#3b4658",
          "300": "#313c4e",
          "400": "#273244",
          "500": "#1d283a",
          "600": "#131e30",
          "700": "#091426",
          "800": "#000a1c",
          "900": "#000012"
        },
        "base": {
          "50": "#41495b",
          "100": "#373f51",
          "200": "#2d3547",
          "300": "#232b3d",
          "400": "#192133",
          "500": "#0f1729",
          "600": "#050d1f",
          "700": "#000315",
          "800": "#00000b",
          "900": "#000001"
        },
        "info": {
          "50": "#3ed8ff",
          "100": "#34ceff",
          "200": "#2ac4ff",
          "300": "#20bafd",
          "400": "#16b0f3",
          "500": "#0ca6e9",
          "600": "#029cdf",
          "700": "#0092d5",
          "800": "#0088cb",
          "900": "#007ec1"
        },
        "success": {
          "50": "#5dffef",
          "100": "#53fce5",
          "200": "#49f2db",
          "300": "#3fe8d1",
          "400": "#35dec7",
          "500": "#2bd4bd",
          "600": "#21cab3",
          "700": "#17c0a9",
          "800": "#0db69f",
          "900": "#03ac95"
        },
        "warning": {
          "50": "#fff384",
          "100": "#ffe97a",
          "200": "#ffdf70",
          "300": "#ffd566",
          "400": "#fecb5c",
          "500": "#f4c152",
          "600": "#eab748",
          "700": "#e0ad3e",
          "800": "#d6a334",
          "900": "#cc992a"
        },
        "error": {
          "50": "#ffa1b6",
          "100": "#ff97ac",
          "200": "#ff8da2",
          "300": "#ff8398",
          "400": "#ff798e",
          "500": "#fb6f84",
          "600": "#f1657a",
          "700": "#e75b70",
          "800": "#dd5166",
          "900": "#d3475c"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
