const readlineSync = require('readline-sync');

// Solicita o nome do herói ao usuário
let nome = readlineSync.question("Olá, Herói! Digite o seu nome: ");

// Solicita a quantidade de experiência (XP) do herói ao usuário
let experienciaInput = readlineSync.question("Digite a quantidade de experiência (XP) do herói: ");

// Converte a entrada de experiência para um número
let experiencia = parseFloat(experienciaInput);

// Define os níveis de acordo com a experiência
let niveis = [
    "Ferro", "Bronze", "Prata", "Ouro",
    "Platina", "Ascendente", "Imortal", "Radiante"
];

// Determina o nível do herói, mediante experiência
let nivelDoHeroi = "";

if (experiencia < 1000) {
    nivelDoHeroi = niveis[0];
} else if (experiencia <= 2000) {
    nivelDoHeroi = niveis[1];
} else if (experiencia <= 5000) {
    nivelDoHeroi = niveis[2];
} else if (experiencia <= 7000) {
    nivelDoHeroi = niveis[3];
} else if (experiencia <= 8000) {
    nivelDoHeroi = niveis[4];
} else if (experiencia <= 9000) {
    nivelDoHeroi = niveis[5];
} else if (experiencia <= 10000) {
    nivelDoHeroi = niveis[6];
} else {
    nivelDoHeroi = niveis[7];
}

// Exibe o resultado para o usuário
console.log("O Herói de nome " + nome + " está no nível de " + nivelDoHeroi + ".");