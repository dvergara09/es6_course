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

/**parametros en objetos */
let name = "Daniel";
let age = 23;
//antes
obj = { name: name, age: age };
//ahora
obj2 = { name, age };

/** Arrow functions*/
/**problema particular
 * sitaxis mas reducida
 * this no vinculable
 */
const names = [
  { name: "Daniel", age: 23 },
  { name: "Mile", age: 20 },
];
//antes
/**aqui pasamos una funcion anonima */
let listOfNames = names.map(function (item) {
  console.log(item.name);
});
/**aqui usamos arrow function */
let listOfNames2 = names.map((item) => console.log(item.name));

const listOfNames3 = (name, age, country) => {
  //code
};

const listOfNames4 = (name) => {
  //code
};

const square = (num) => num * num;

/**PROMESAS */
/**JS No es sincronicos
 * sino que  va manejando elemento por elemento
 * estas solucionan el callback hell
 * son utiles para llamar a apis
 */
const helloPromise = () => {
  return new Promise((result, reject) => {
    if (false) {
      result("Hey");
    } else {
      reject("Ups");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
