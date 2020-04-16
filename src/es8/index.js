/**ES8 */
/**cambios
 * trabajo con objetos
 * async await */
const data = {
  frontend: "Daniel",
  designer: "Daniela",
  manager: "Sici",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

const data2 = {
  frontend: "Daniel",
  designer: "Daniela",
  manager: "Sici",
};

const values = Object.values(data2);
console.log(values);
console.log(values.length);

const string = "hello";
console.log(string.padStart(7, "hi"));
console.log(string.padEnd(12, "----"));

const obj = {
  name: "daniel",
};

const helloworld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test error"));
  });
};

const helloAsync = async () => {
  const hello = await helloworld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloworld();
    console.log(hello);
  } catch (error) {
    console.log(error);
  }
};
