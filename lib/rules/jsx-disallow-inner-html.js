module.exports = function(context) {
    return {
        JSXAttribute: function(node) {
            if (node.name.name === 'dangerouslySetInnerHTML') {
                context.report({
                    node: node.name,
                    loc: node.name.loc.start,
                    message: 'dangerouslySetInnerHTML is not allowed. Disable this rule locally and make sure your input is sanitized.'
                });
            }
        }
    };
};
