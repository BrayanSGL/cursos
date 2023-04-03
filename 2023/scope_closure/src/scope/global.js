//ejemplo de global scope
var hello = "Hello";
let world = "Hello World";
const helloWorld = "Hello World!";

function anotherFunction() {
  hola = "hola"; //no se recomienda usar esta forma de declarar variables globales
  console.log(hello);
  console.log(world);
  console.log(helloWorld);
}

anotherFunction();
console.log(hola);
