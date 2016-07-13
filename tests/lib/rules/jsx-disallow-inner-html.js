var rule = require('../../../lib/rules/jsx-disallow-inner-html');
var RuleTester = require('eslint').RuleTester;

var parserOptions = {
    ecmaVersion: 6,
    ecmaFeatures: {
        jsx: true
    }
};

var ruleTester = new RuleTester();
ruleTester.run('jsx-disallow-inner-html', rule, {
    valid: [
        {code: '<App foo />', parserOptions: parserOptions}
    ],
    invalid: [
        {
            code: '<div dangerouslySetInnerHTML={{_html: "hello world"}} />',
            parserOptions: parserOptions,
            options: ['never'],
            errors: [{message: 'dangerouslySetInnerHTML is not allowed. Disable this rule locally and make sure your input is sanitized.'}]
        }
    ]
});
