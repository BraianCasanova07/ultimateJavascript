let celular = {
  marca: 'samsung',
  modelo: 's20',
  color: 'azul',
};

for (let celu1 in celular) { // for in sirve para obtener propiedades de un objeto
  console.log(celu1, celular[celu1]);
}

let animales = ['gato', 'perro', 'pajaro']

for (let indice in animales) { // tambien sirve para el array, dandote el indice
  console.log(indice, animales[indice])
}