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
