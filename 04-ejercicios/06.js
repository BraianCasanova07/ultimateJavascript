// devolver cantidad de positivos

let array = [2, 5, 7, 15, -5, -100, 55];

function numerosPositivos(arr) {
  let positivos = 0;
  for (let n of arr) {
    if (n >= 0) {
      positivos++
    }
  }
  return positivos
  }

let resultado = numerosPositivos(array);
console.log(resultado);