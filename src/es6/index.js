// antes de es6
function newFunction(name, age, country) {
  var name = name || "Daniel";
  var age = age || 23;
  var country = country || "CO";
  console.log(name, age, country);
}

newFunction();

function newFunction2(name = "Daniel", age = 23, country = "CO") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Mile", 20, "CO");

/**CONCATENACION (TEMPLATE LITERALS) */
//Antes
var hello = "hello";
var world = "world";
var epic = hello + " " + world;
console.log(epic);
//Despues
let hello = "hello";
let world = "world";
let epic2 = `${hello} ${world}`;
console.log(epic2);

/**MULTILINEA */
let loren =
  "nostrum accusamus dolorem numquam veniam qui reprehenderit placeat \n temporibus quaerat!";
console.log(loren);

let lorem2 = `nostrum accusamus dolorem numquam veniam qui
reprehenderit placeat temporibus quaerat!`;

console.log(lorem2);

/**DESESTRUCTURACION */
let person = {
  name: "Daniel",
  age: 23,
  country: "CO",
};
//Antes
console.log(person.name, person.age);
//Ahora
let { name, age, country } = person;
console.log(name, age, country);

/**OPERADOR DE PROPAGACION */
let team1 = ["Daniel", "Xavier", "Yeison"];
let team2 = ["Eilyn", "Camila", "Lina"];

let education = ["Mauricio", ...team1, ...team2];
console.log(education);

/**LET CONST */
{
  var global = "global var";
}

{
  let globalLet = "global let";
  console.log(globalLet);
}
console.log(global);
//console.log(globalLet);

const a = "b";
a = "c";
