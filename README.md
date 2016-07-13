eslint-plugin-react-html
========================

An eslint plugin for disallowing dangerouslySetInnerHTML.

Installation
------------

Install ESLint either locally or globally.

```
$ npm install eslint --save-dev
```

If you installed ESLint globally, you have to install this plugin globally too. Otherwise, install it locally.

```
$ npm install eslint-plugin-react --save-dev
```

Configuration
-------------

Add plugins section and specify `eslint-plugin-react-html` as a plugin.

```json
{
  "plugins": [
    "react-html"
  ]
}
```

If it is not already the case you must also configure ESLint to support JSX.

```json
{
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  }
}
```

Use the recommended configuration:

```json
{
  "plugins": [
    "react"
  ],
  "extends": ["eslint:recommended", "plugin:react-html/recommended"]
}
```

License
-------

MIT
