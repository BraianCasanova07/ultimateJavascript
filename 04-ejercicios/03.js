// indicar el valor que no sea menor a cero y que el elemento exita en el array

function getbyIdx(arr, idx) {
    if (idx < 0 || arr.lenght <= idx) {
      return "elemento no exite";
    }

      return arr[idx];

}

let resultado = getbyIdx([1, 2], 1);
console.log(resultado);