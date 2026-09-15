
const nome = 'Miguel';
const sobrenome = 'de jeusus Santana';
const idade = 8;
const peso = 30.5;
const nota1 = 10.0;
const nota2 = 6.5;
const nota3 = 7.6;
let media;

media = (nota1 + nota2 + nota3) / 3;

console.log(`${nome} ${sobrenome}`);
console.log(`Idade: ${idade}`);
console.log(`Peso: ${peso}`);
console.log(`1º Nota: ${nota1} \n2º Nota: ${nota2} \n3º Nota: ${nota3}`);
console.log(`Média: ${Number(media.toFixed(2))}`);
