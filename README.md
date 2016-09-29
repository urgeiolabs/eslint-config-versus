- Always use === or !== for equality statement
- Variables should always be declared before using except functions
- Arrays should not have spaces before or after the brackets but should have spaces in-between values
- Functions or if statements that are one-liner should have space after the opening curly bracket and before the closing curly brackets
- Variable names should be camelCsed and not underscored
- Last item of array or object should not have a comma
- End of line should be newline
- Function call should have no space or new lines
- Indention should be 2 spaces and not tab
- Writing objects should have space after colon
- Maximum nested block should not be more than 5
- Maximum nested callback should not exeed to 3, otherwise use promises
- Whenever new is called it should be followed by a capslocked function name to know that it is a class
- Newline should only be one
- No whitespace after a property foo. bar() // Error
- Unlike arrays objects should have spacing inside the brackets
- If linebreak is needed for operators it should be after the operator except for ternary `? :`

```js
// Bad
let a = b
  + c
a = c ?
  b :
  d

// Good
let a = b +
  c
a = c
  ? b
  : d
```

- Always use single quote whenever possible
- Fuck the semicolon!
- Always have space before blocks if () { ... }
- Always have space before parenthesis - space-before-function-paren
- Never have spaces inside parenthesis
- Always have space before and after operators
- Always space before and fter when using => on es6
- When using constructor on Es6 class always call super()
- No using of var
- Use only let when you think the value will change; always use const

## Open for discussion:

- Err handling should be available in every callback function - handle-callback-err
- Require call should not be mixed with require statements - no-mixed-requires
- No new require - no-new-require
- One (var, let, const) per variable declaration except for uninitialized variable (let a, b, c)
- Starting and ending blocks should not have a new line - padded-blocks
- When using a boolean attribute just input the attribute for true - react/jsx-boolean-value

## Questions:
- Should we require proptypes always when tackling with props? - react/prop-types
- Should we sort component methods? [react/sort-comp](https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md)
- Should we remove console.log every after push? - no-console
- Should we allow using of method before defining it? - no-use-before-define
```js
// BAD?
hello()
const hello = () => 'test'
```

## ReactJS rules
- JSX attribute quotes should be single quote
- Prefer stateless function when you are not doing anything to the state (consider as warning)
- For components without children use self-closing component
- Never add spaces when using curly bracnes - react/jsx-curly-spacing
- Never add spaces around equal signs - react/jsx-equals-spacing
- Use 2 spaces for idention - react/jsx-indent & react/jsx-indent-props
- Always add key attribute for iterated components - react/jsx-key
- When using target='_blank' always add rel='noopener noreferrer'. This is considered a security [issue](https://mathiasbynens.github.io/rel-noopener/) - react/jsx-no-target-blank
- Add space when closing a tab <Hello /> - react/jsx-space-before-closing