/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./client/src/**/*.{js,jsx}', './client/src/index.html'],
    theme: {
        extend: {
            colors: {
                primary: '#1B73E8',
            },
        },
    },
    plugins: [],
    
    corePlugins: {
        preflight: false,
    }
};