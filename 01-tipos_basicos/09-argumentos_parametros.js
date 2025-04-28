function suma(a, b) {
  console.log(arguments);
  return a + b;
}

let resultado = suma(9, 5)
console.log(resultado)
console.log(suma(5, 5, 6, 7, 8))
console.log(typeof suma)