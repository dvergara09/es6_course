/** ES9 */
/**cambios
 * operador de reposo, extrae las propiedades de un objeto
 * que no se ha contruido
 */
const obj = {
  name: "daniel",
  age: 23,
  country: "CO",
};

let { name, ...all } = obj;
console.log(name, all);
console.log(all);

const obj2 = {
  name: "daniel",
  age: 23,
};

const obj3 = {
  ...obj2,
  country: "CO",
};

console.log(obj3);

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("hello world"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("finalizo"));

/**expresiones regulares */
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const math = regexData.exec("2018-04-20");
const year = math[1];
const month = math[2];
const day = math[3];
console.log(year, month, day);
