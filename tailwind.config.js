
const colors = require('tailwindcss/colors')


module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            white: {
                DEFAULT: '#ffffff',
            },
            green: {
                light: '#6fcf97',
                DEFAULT: '#27AE60',
                dark: '#219653',
                darker: '#1e874b',
            },
            red: colors.red,
            orange: {
                light: '#FFEBDA',
                DEFAULT: '#F66A0A',
                dark: '#A04100',
            },
            primary: {
                DEFAULT: '#24292E',
            },
            warning: {
                DEFAULT: '#D1711C',
            },
            blue: colors.blue,
            gray: colors.gray,
black : colors.black
        },
        extend: {
            boxShadow: {
                default: '0px 10px 20px rgba(150, 150, 187, 0.1)',
            },
            fontSize: {
                '2rem': '2rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};