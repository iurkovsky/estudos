const peso1 = 1.0;
const peso2 = Number('2.0');
console.log(peso1, peso2);
console.log(Number.isInteger(peso1));


const avaliacao1 = 9.293;
const avaliacao2 = 6.238;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);
console.log(media);
console.log(total);


console.log(media.toFixed(4)); //tu escolhe quantas casa decimais quer
console.log(media.toString(2)); // em binario

console.log(typeof media); // tipo do dado
console.log(typeof Number); //é uma função