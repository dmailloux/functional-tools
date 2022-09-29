# Functional Tools

Fully typed utility functions to write Typescript in a more functional style

## Installation

```bash
npm i --save functional-tools
```

```bash
yarn add functional-tools
```

## Basic Example

## Evaluate

```ts
import { evaluate } from "./evaluate";

const startsWithH = (x: string) => x[0] === "h";

const hasAComma = (x: string) => x.includes(",");

const result = evaluate("hello, world", startsWithH, hasAComma);

console.log(result);
// true
```

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
