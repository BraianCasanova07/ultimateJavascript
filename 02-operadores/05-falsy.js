// short-circuit

// Valores que evaluan en falso:
// false
// 0
// ''
// null
// undefined
// NaN

let nombre = '';
let username = nombre || 'anonimo';
console.log(username);

function fn1() {
  console.log('soy funcion 1');
  return false;
}

function fn2() {
  console.log('soy funcion 2');
  return true;
}

let x = fn1() && fn2()