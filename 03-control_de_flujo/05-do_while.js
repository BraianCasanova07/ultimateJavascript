// busca los pares
let i = 2;

while (i < 2) {
  if (i % 2 == 0) {
  console.log(i);
  }
  i++; // para ver el loop infinito comentar esta linea, ya que no se rompe el bucle
}

// el ciclo do while hace que el while se ejecute al final del codigo, donde "do" es donde empieza

do {
  if (i % 2 == 0) {
    console.log(i);
    }
    i++; // para ver el loop infinito comentar esta linea, ya que no se rompe el bucle
  } while (i < 2);