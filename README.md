# Versus JavaScript/ReactJS Style Guide

>> /o/ |o| \o\

>> Note: Not all rules are listed here just the important parts. Please refer to .eslintrc.js

>> Anyone up for making the badge?

Legend:

  - * = Still open for discussion

## Table of Contents

  1. [General](#general)
  1. [Conditional Statement](#conditional-statement)
  1. [Whitespace](#whitespace)
  1. [Code Structure](#code-structure)
  1. [Class](#class)
  1. [Variables](#variables)
  1. [Functions](#functions)
  1. [ReactJs](#reactjs)

## General

  - Always use `isNaN()` function when checking if variable is NaN[use-isnan]

  ```js
  // BAD
  if (x === NaN) { ... }

  // GOOD
  if (isNaN(x)) { ... }
  ```

  - No unused variable[no-unused-var]
  - Always use **2 spaces** for idention and not tabs[no-mixed-spaces-and-tabs] [no-tabs]
  - No variable assignment on return statemetns[no-return-assign]

  ```js
  // BAD
  function fn () {
    return a = 2 + 2
  }
  ```

  - No script for URLS[no-script-url]

  ```js
  // BAD
  location.href = 'javascript:void(0)'
  ```

  - I'm sorry yoda but you are not allowed[yoda]

  ```js
  // BAD
  if (true === foo) { ... }
  if ('test' === bar) { ... }

  // GOOD
  if (foo === true) { ... }
  if (bar === 'test') { ... }
  ```

  - Variable names should be camelCased except properties*[camelcase]

  ```js
  // BAD
  const not_camelcased = 'NOOOO!'
  import { no_t_camel } from 'bar'

  // GOOD
  const camelCase = 'YEY'
  import { camelCased } from 'foo'
  obj = {
    test_me: 5
  }
  ```

  - There should be no commas on the last element of an array or object[comma-dangle]

  ```js
  // BAD
  const badArray = [
    foo,
    bar,
  ]
  const badObj = {
    foo: 'test',
    bar: 'me',
  }

  // GOOD
  const goodArr = [
    foo,
    bar
  ]
  const goodObj = {
    foo: 'test',
    me: 'bar'
  }
  ```

## Conditional Statement

  - No constant expressions in conditions[no-constant-condition]

  ```js
  // BAD
  if (false) {
    doSomething()
  }

  while (true) {
    doSomething()
  }
  ```

  - No empty block statements[no-empty]

  ```js
  // BAD
  if (foo) {
  }

  While () {
  }

  // GOOD
  if (wat) {
    // Comment here
  }
  ```

  - No case statement fallthrough[no-fallthrough]

  ```js
  // BAD
  switch (f) {
    case 1:
      doSomething()
    case 2:
      doAnything()
  }

  // GOOD
  switch (f) {
    case 1:
      doSomething()
      break;
    case 2:
      return doAnything()
    case 3:
      ...
  }

  switch (f) {
    case 1:
    case 2:
      return doForBoth()
  }
  ```

## Whitespace

  - There should be no spacing on array brackets except for deconstructing array[array-bracket-spacing]

  ```js
  // BAD
  const a = [ 'test' ]
  const b = [ 'foo', 'arf']
  var [x,y,x] = a

  // GOOD
  const a = ['boo']
  const c = ['foo', 'bar']
  var [ x, y, z ] = a
  ```

  - Spacing on commas should be after the commas[comma-spacing]

  ```js
  // BAD
  var arr = [ 1 ,2 ]
  var c = [ 1 , 2 ]

  // GOOD
  var b = [ 2, 3 ]
  ```

  - Indention on blocks should be 2 spaces[indent]

  ```js
  // BAD
  function fn () {
        wee()
  }

  // GOOD
  function test () {
    yey()
  }
  ```

  - Spacing on object keys should be after the colon and not before[key-spacing]

  ```js
  // BAD
  const obj = { foo :5 }
  const a = { poke : 'er' }

  // GOOD
  const obj = { foo: 'bar' }
  ```

  - Spacing on keywords should be before and after[keyword-spacing]

  ```js
  // BAD
  if(test) { ... }
  function fn() { ... }
  if (true){ ... }

  // GOOD
  if (test) { ... }
  function fn () { ... }
  ```

  - No multiple empty lines[no-multiple-empty-lines]

  ```js
  // BAD (MAXIMUM 2)
  const a = 5



  cosnt b = 3

  // OKAY
  const a = 5


  const b = 3

  // GOOD
  const a = 5

  const b = 4
  ```

  - There should be a space after open curly brace and before close curly brace for objects and destructor[object-curly-spacing]

  ```js
  // BAD
  const obj = {foo: 'bar'}
  const a = {foo: ['test'] }
  const b = ({foo}) => { ... }

  // GOOD
  const a = { foo: 'bar' }
  const b = { foo: ['test']}
  const c = ({ foo }) => { ... }
  ```

  - There should be a space before and after a block[space-before-blocks]

  ```js
  // BAD
  if (a){
    c()
  }else {
    t()
  }

  function a(){ .. }

  // GOOD
  if (a) {
    d()
  } else {
    g()
  }

  function a() { ... }
  ```

  - There should a space before and after an arrow - ES6[arrow-spacing]

  ```js
  // BAD
  const a = ()=>{}

  // GOOD
  const a = () => {}
  ```

## Code Structure

  - No unreachable code[no-unreachable]

  ```js
  // BAD
  function fn () {
    x = 1
    return x
    x = y
  }
  ```

  - All require statements should be arranged*[no-mixed-requires]

  ```js
  // BAD
  const fs = require('fs')
  const async = require('async')
  const file = require('./file')
  const a = 'hello'

  // GOOD
  const fs = require('fs')

  const async = require('async')

  const file = require('./file')
  
  const a = 'hello'
  ```

  - Do not use `new` on requires*[no-new-require]

  ```js
  // BAD
  const app = new require('./App')

  // GOOD
  const App = require('./App')
  const app = new App()
  ```

  - Expression inside braces or bracket should have 2 spaces and inlined with the expression[brace-style]

  ```js
  // BAD
  if (foo)
  {
    bar()
  }
  else {
  test()
  }

  // GOOD
  if (foo) {
    bar()
  } else {
    test()
  }
  ```

  - The last line of your code file should be a newline[eol-last]

  ```js
  // BAD
  const a = () => 'test' // No newline :(

  // GOOD
  const a = () => 'test'

  ```

  - Always use single quotes whenever possible[quotes]

  ```js
  // BAD
  const c = "foo!"
  <Hello foo="bar" />

  // GOOD
  const c = 'foo'
  <Hello foo='bar' />
  ```

  - FUCK SEMICOLON[semi]
  - Never use var[no-var]
  - Always use const when value don't change*[prefer-const]

  ```js
  // BAD
  let a = 6

  // GOOD
  const a = 3
  let b = 8
  b = 25
  ```

## Class

  - Constructor super should only be used when extending a class[constructor-super]

  ```js
  // BAD
  class A {
    constructor () {
      super()
    }
  }

  // GOOD
  class B extends A {
    constructor () {
      super()
    }
  }
  ```

  - `this` should always be after `super()`[no-this-before-super]

  ```js
  // BAD
  class A extend B {
    constructor() {
      this.test = 0
      super()
    }
  }
  ```

## Variables

  - No variaible redeclare[no-redeclare]

  ```js
  // BAD
  var a = 3
  var a = 2
  ```

  - Initializing to undefined is not allowed*[no-undef-init]

  ```js
  // BAD
  let a = undefined

  // GOOD
  let a, b
  ```

  - Early use of variable and function before declaring*[no-use-before-define]

  ```js
  // BAD
  alert(a)
  const a = 5

  b()
  cosnt b = () => { return 'test' }

  // GOOD
  const a = 5
  const b = () => { return 'test' }

  alert(a)
  b()
  ```

  - initializing a variable should have only one var, const or let[one-var]

  ```js
  // BAD
  var a = true, b = 5, c = 6

  // GOOD
  const a = 6
  const c = 3
  const d, e, f
  ```

  - Line break should always be after the operator except ternary operators[operator-linebreak]

  ```js
  // BAD
  const a = 3
    + 5
  const c = true ?
    3 :
    5

  // GOOD
  const a = 3 +
    5
  const c = true
    ? 5
    : 3
  ```

## Functions

  - Always handle callback error*[handle-callback-err]

  ```js
  // BAD
  function cb (err, test) {
    doSomethingToTest(test)
  }

  // GOOD
  function cb (err, test) {
    if (err) return doSomethingToErr(err)
    return doSomethingToTest(test)
  }
  ```

  - When calling a function or a method there should be no space in between variable and parenthesis[func-call-spacing]

  ```js
  // BAD
  method ()
  new Date ()

  // GOOD
  method()
  new Date()
  ```

  - Maximum callback hell should not exceed to 3[max-nested-callbacks]

  ```js
  // LIMIT CALLBACK IS 5
  // BAD
  function () {
    function () {
      function () {
        function () {

        }
      }
    }
  }

  // GOOD
  promise
    .then(() => {

    })
    .then(() => {})
    .then(() => {})
    .then(() => {})
  ```

## ReactJs

  - Component without children should use self-closing component[react/self-closing-comp]

  ```js
  // BAD
  <Hello></Hello>

  // GOOD
  <Hello />
  ```

  - Don't add a space inside a an attribute brace[react/jsx-curly-spacing]

  ```js
  // BAD
  <Hello name={ name } />

  // GOOD
  <Hello name={name} />
  ```

  - Always add `key` to component that was iterated[react/jsx-key]

  ```js
  // GOOD
  {arr
    .map((v, idx) => {
      <div key={idx}>
        <p> Hello </p>
      </div>
    })
  }
  ```

  - When using `target='_blank' always add `rel='noreferrer noopener'`. This is for security reason[react/jsx-no-target-blank]

  ```js
  // GOOD
  <a href={url} target='_blank' rel='noreferrer noopener'> Hello </a>
  ```

  - Always add a space before a self-closing component[react/jsx-space-before-closing]

  ```js
  // GOOD
  <Hello />  
  ```
