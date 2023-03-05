module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
        'simple-import-sort',
    ],
    rules: {
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        indent: [2, 4],
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
        'import/no-named-as-default': 'off',
        '@typescript-eslint/default-param-last': 'off',
        '@typescript-eslint/lines-between-class-members': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        'class-methods-use-this': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        'no-console': 'warn',
        'i18next/no-literal-string': ['error', { markupOnly: true }],
        'max-len': [
            'error',
            {
                code: 120,
                ignoreStrings: true,
                ignoreComments: true,
            },
        ],
        '@typescript-eslint/member-delimiter-style': [
            'error',
        ],
        'simple-import-sort/imports': ['error', {
            groups: [
                ['^react', '^', '^\\u0000'], // node_modules
                ['^shared/', 'shared', '^pages/', 'pages', '^widgets/', 'widgets'], // apps and libs
                ['^\\.\\.'], // reltive paths(other folders)
                ['^\\.'], // relative paths (current folders)
                ['^.+\\.?(scss)$', '^.+\\.?(styles)$', '^.+\\.?(css)$'], // styles in scss and ts
            ],
        }],
        'simple-import-sort/exports': 'error',
        'no-duplicate-imports': 'error',
        'jsx-quotes': ['error', 'prefer-double'],
    },
    globals: {
        __IS_DEV__: true,
    },
};
