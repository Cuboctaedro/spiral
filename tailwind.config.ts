import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
        sans: ['Arial', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
    },
    colors: {
        gray: {
            50: '#f7f7f6',
            100: '#e4e4e3',
            200: '#c9c9c6',
            300: '#a7a6a1',
            400: '#84837d',
            500: '#696963',
            600: '#53534e',
            700: '#454440',
            800: '#393936',
            900: '#32322f',
            950: '#1d1d1b',
            brand: '#1d1d1b',
        },
        blue: {
            50: '#ebf6ff',
            100: '#d1ecff',
            200: '#aedeff',
            300: '#76cbff',
            400: '#35adff',
            500: '#0784ff',
            600: '#005dff',
            700: '#0044ff',
            800: '#0038d7',
            900: '#003096',
            950: '#062265',
            brand: '#003096',
        },
        red: {
            50: '#fff0f1',
            100: '#ffdde0',
            200: '#ffc0c5',
            300: '#ff949d',
            400: '#ff5765',
            500: '#ff2335',
            600: '#ff0015',
            700: '#d70012',
            800: '#b10311',
            900: '#920a15',
            950: '#500007',
            brand: '#ff0015',
        },
        green: {
            50: '#f0fdf6',
            100: '#dbfded',
            200: '#baf8da',
            300: '#84f1bd',
            400: '#47e199',
            500: '#20d17f',
            600: '#13a662',
            700: '#13824f',
            800: '#146742',
            900: '#135438',
            950: '#042f1d',
            brand: '#20d17f',
        },
    },
    extend: {},
},
plugins: [],
};
export default config;
