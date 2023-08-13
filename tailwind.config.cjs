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
    "tailwindCSS.emmetCompletions": true,
    "editor.inlineSuggest.enabled": true,
    "editor.quickSuggestions": {
        "strings": true
    },
    "css.validate": false,
};