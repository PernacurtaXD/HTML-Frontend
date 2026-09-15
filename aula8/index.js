const nome = "Luis";
const sobrenome = "Felipe";
const idade = 20;
const peso = 64.52;
const alturaEmm = 1.68;
let imc;
let anoNascimento;

imc = peso / (alturaEmm * alturaEmm);
anoNascimento = 2025 - idade;

//template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmm} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}`);