//Ejemplo de function scope
const helloWorld = () => {
  globalVar = "im global";
};

helloWorld();
console.log(globalVar);

//Ejemplo de function scope
const anotherFunction = () => {
  var localVar = (globalVar = "im global");
  console.log(localVar); //se puede acceder a la variable local desde dentro de la funcion
};

anotherFunction();
console.log(globalVar);
console.log(localVar); //no se puede acceder a la variable local desde fuera de la funcion
