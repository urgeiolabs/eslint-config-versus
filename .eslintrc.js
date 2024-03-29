module.exports = {
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 7,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    node: true,
    es6: true
  },
  extends: 'eslint:recommended',
  plugins: ['react'],
  rules: {
    'no-console': 0,
    'no-irregular-whitespace': 0,
    'no-case-declarations': 0,
    'no-undef': 0,
    'no-octal-escape': 1,
    'no-proto': 1,
    'no-prototype-builtins': 0,
    'no-redeclare': 1,
    'no-return-assign': 1,
    'no-script-url': 1,
    'no-self-compare': 1,
    'no-unmodified-loop-condition': 1,
    'no-useless-call': 1,
    'no-useless-concat': 0,
    'no-useless-escape': 1,
    'no-void': 1,
    'no-with': 1,
    'wrap-iife': [1, 'any'],
    'yoda': 1,
    'no-delete-var': 1,
    'no-label-var': 1,
    'no-shadow-restricted-names': 1,
    'no-undef-init': 1,
    'no-unused-vars': [1, { vars: 'all', args: 'none', caughtErrors: 'none' }],
    'handle-callback-err': [1, '^.*(e|E)rr'],
    'no-mixed-requires': [1, { grouping: true, allowCall: true }],
    'no-new-require': 1,
    'array-bracket-spacing': [1, 'never', { singleValue: false, objectsInArrays: false, arraysInArrays: false }],
    'brace-style': [1, '1tbs', { allowSingleLine: true }],
    'camelcase': [1, { properties: 'never' }],
    'comma-spacing': [1, { after: true, before: false }],
    'eol-last': 1,
    'func-call-spacing': [1, 'never'],
    'key-spacing': [1, { beforeColon: false, afterColon: true }],
    'keyword-spacing': [1, { before: true, after: true }],
    'max-nested-callbacks': [1, 5],
    'new-cap': [1, { newIsCap: true, capIsNew: false }],
    'new-parens': 1,
    'no-bitwise': 1,
    'no-mixed-spaces-and-tabs': 1,
    'no-multiple-empty-lines': 1,
    'no-tabs': 1,
    'no-trailing-spaces': 1,
    'no-unneeded-ternary': 1,
    'no-whitespace-before-property': 1,
    'one-var': [1, { initialized: 'never' }],
    'quotes': [1, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'semi-spacing': [1, { before: false, after: true }],
    'semi': [1, 'never'],
    'space-before-blocks': [1, 'always'],
    'space-in-parens': [1, 'never'],
    'space-infix-ops': 1,
    'space-unary-ops': [1, { words: true, nonwords: false }],
    'unicode-bom': [1, 'never'],
    'arrow-spacing': [1, { before: true, after: true }],
    'constructor-super': 1,
    'no-class-assign': 1,
    'no-const-assign': 1,
    'no-dupe-class-members': 1,
    'no-duplicate-imports': 1,
    'no-this-before-super': 1,
    'no-useless-computed-key': 1,
    'no-useless-constructor': 1,
    'no-useless-rename': 1,
    'no-var': 1,
    'prefer-const': 1,
    'rest-spread-spacing': [1, 'never'],
    'template-curly-spacing': [1, 'never'],
    // ReactJS rules starts here
    'jsx-quotes': [1, 'prefer-single'],
    'react/jsx-boolean-value': 1,
    'react/jsx-curly-spacing': [1, 'never'],
    'react/jsx-equals-spacing': [1, 'never'],
    'react/jsx-key': 1,
    'react/jsx-no-duplicate-props': 1,
    'react/jsx-no-target-blank': 1,
    'react/jsx-no-undef': 1,
    'react/jsx-tag-spacing': [1, { beforeSelfClosing: 'always' }],
    'react/jsx-uses-vars': 1,
    'react/jsx-uses-react': 1
  }
}
