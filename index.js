module.exports = {
    rules: {
        'jsx-disallow-inner-html': require('./lib/rules/jsx-disallow-inner-html')
    },
    configs: {
        recommended: {
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            },
            rules: {
                'react-html/jsx-disallow-inner-html': 2
            }
        }
    }
};
