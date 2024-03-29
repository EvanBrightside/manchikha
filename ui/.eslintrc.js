module.exports = {
    rules: {
        indent: [
            2,
            4
        ],
        quotes: [
            2,
            'single'
        ],
        'linebreak-style': [
            2,
            'unix'
        ],
        semi: [
            2,
            'always'
        ]
    },
    env: {
        es6: true,
        node: true,
        browser: true
    },
    extends: 'eslint:recommended',
    parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
            // modules: true,
            jsx: true,
            experimentalObjectRestSpread: true
        }
    },
    plugins: [
        'react'
    ]
};
