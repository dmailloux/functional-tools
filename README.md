# Functional Tools

Fully typed utility functions to write Typescript in a more functional style

## Installation

`npm i --save functional-tools`

`yarn add functional-tools`

## Basic Example

### Pipeline Function

```ts
import { pipeline } from "functional-tools";

const append = (x: string) => (y: string) => y + x;

const capitalize = (x: string) => x.toUpperCase();

const removeWhitespace = (x: string) => x.replace(/ /g, "");

const helloWorld = pipeline("  hello", append(", world! "), capitalize, removeWhitespace);

console.log(helloWorld);
// "HELLO,WORLD!"
```
