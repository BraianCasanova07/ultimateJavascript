// crea algoritmo que tome un array de
// pares y devuelva un array de objetos

let pairs = [
  [1, {name: 'Nicolas'}],
  [2, {name: 'Felipe'}],
  [3, {name: 'Chanchito'}],
];

let array = [{
    id: 1,
    name: 'Nicolas',
  }, {
    id: 2,
    name: 'Felipe',
  }, {
    id: 3,
    name: 'Chanchito',
  }];

function toColecction(arr) {
  let collection = []
  for (idx in arr) {
    let elemento = arr[idx];
    collection[idx] = elemento[1];
    collection[idx].id = elemento[0];
  }
  return collection;
}

let resultado = toColecction(pairs);
console.log(resultado);