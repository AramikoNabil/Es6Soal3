// Merubah ke objct Destructuring

let nama , umur;
const person = {name: 'rizal', asal : 'Prabumulih' };

({name : nama , asal : dari} = person);

console.log (nama)
console.log (dari)