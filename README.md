# idealvalues

Idealvalues is a tool you can use for hypothesis testing. Use Idealvalues to find a sum value within an array of numbers.

[![](https://img.shields.io/npm/v/idealvalues.svg)](https://npmjs.org/package/idealvalues)  [![](https://img.shields.io/npm/dt/idealvalues.svg?maxAge=3600)](https://www.npmjs.com/package/idealvalues) [![](https://data.jsdelivr.com/v1/package/npm/idealvalues/badge)](https://www.jsdelivr.com/package/npm/idealvalues)
## Installing

Using npm:

```bash
$ npm install idealvalues
```
---
Using cdn:

```html
<script src="https://cdn.jsdelivr.net/npm/idealvalues/cdn/idealvalues.js" integrity="sha256-pHB+sncAePApDDjJyqPddPhPLKK7OPe493sMwOlFVBs=" crossorigin="anonymous"></script>
```

## API

### idealvalues(number, [values],);

Returns the numbers at which the sum arrives at the desired value.

|           |                                                                           |
| --------- | ------------------------------------------------------------------------- |
| `number`  | `Number` Number that should be the sum of all values.                     |
| `values`  | `Array`  Values to reach the desired number.                              |
| `options` | `Object` options for dealing. **Optional**                                |
| _returns_ | `Array`  Values whose sum results in the desired number.                  |
| _throws_  | `Error`  If it does not find values whose sum reaches the desired value.  |

#### options

|               |                                                                               |
| ------------- | ----------------------------------------------------------------------------- |
| `debug`       | `Boolean` Enable debug. **Default=false**                                     |
| `fullDebug`   | `Boolean` Enable full debug, with all loops of attempts.  **Default=false**   |
| `maxAttempts` | `Number` maximum attempts. **Default=1000**                                   |
| `extends`     | `Bollean` Returns a run report. **Default=false**                             |

## Examples

### Default:

```js
const idealvalues = require("idealvalues");

const values = idealvalues(180, [10, 10, 20, 20, 40, 40, 30, 50, 70, 30, 40]);

console.log(values);
```

#### Output

```js
[ 50, 40, 10, 40, 10, 30 ]
```
---
### Extends

```js
const idealvalues = require("idealvalues");

const values = idealvalues(180, [10, 10, 20, 20, 40, 40, 30, 50, 70, 30, 40], {extends: true});

console.log(values);
```

#### Output

```js
{ values: [ 40, 50, 20, 30, 40 ], sum: 180, attempts: 2 }
```
---
### CDN

```html
<script src="https://cdn.jsdelivr.net/npm/idealvalues/cdn/idealvalues.js" integrity="sha256-pHB+sncAePApDDjJyqPddPhPLKK7OPe493sMwOlFVBs=" crossorigin="anonymous"></script>
<script>
    const values = idealvalues(180, [10, 10, 20, 20, 40, 40, 30, 50, 70, 30, 40]);

    console.log(values);
</script>
```
#### Output

```js
[ 50, 40, 10, 40, 10, 30 ]
```
---
## Use cases

I went to the supermarket, and the total value of the purchase was: **$180**. In my wallet I have the following notes:

- $10
- $20 **x 2**
- $50 **x 4**
- $100

Then:

```js
const idealvalues = require("idealvalues");

const values = idealvalues(180, [10, 20, 20, 50, 50, 50, 50, 100]);

console.log(values);
```

#### Output

```js
[ 50, 100, 10, 20 ]
```

To pay I need to pass the following notes:

- $50
- $100
- $10
- $20