const assert = require('assert');

const addOne = param =>{
  let output = [];
  for (let i = 0; i < param.length; i += 1) {
    output.push(param[i] + 1);
  }
  return output;
}

const myArray = [31, 57, 12, 5];
const unchanged = [31, 57, 12, 5];
const expected = [32, 58, 13, 6];
const output = addOne(myArray);

assert.strictEqual(typeof addOne, 'function');
assert.deepStrictEqual(output, expected);
assert.deepStrictEqual(myArray, unchanged);

//exercicio 2
