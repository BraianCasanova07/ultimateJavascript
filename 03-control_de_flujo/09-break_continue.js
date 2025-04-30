let a = 0;

while (a <= 5) {
  a++
  if (a === 2) {
    continue; // salta el codigo que tenga abajo si se cumple la condicion
  }
  if (a === 4) {
    break; // corta con el bucle
  }
  console.log(a)
}