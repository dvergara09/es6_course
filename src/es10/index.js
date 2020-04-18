let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

let array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap((value) => [value, value * 2]));

let hello = "    hello world   ";
console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

let entries = [
  ["name", "daniel"],
  ["age", 12],
];
console.log(Object.fromEntries(entries));

let mySimbol = `My simbol`;
let symbol = Symbol(mySimbol);
console.log(symbol.description);
