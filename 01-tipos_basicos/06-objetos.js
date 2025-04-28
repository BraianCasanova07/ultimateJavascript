// Personaje de anime
let nombre = "Ronoroa Zoro"
let anime = "One piece"
let edad = 21;

let personaje = {
  nombre: "Ronoroa Zoro",
  anime: "One piece",
  edad: 21,
};

console.log(personaje)
console.log(personaje.anime)
console.log(personaje['edad'])

personaje.edad = 19;
personaje['messi'] = "pepsi";

delete personaje.anime;

console.log(personaje)