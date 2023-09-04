const readlineSync = require('readline-sync');

// Função que calcula o nível do herói com base nas vitórias e derrotas
function calcularSaldoRanking(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = "";

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias <= 100) {
        nivel = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivel = "Imortal";
    }

    return nivel;
}

// Mensagem de boas-vindas
console.log("Calculadora de Nível de Herói\n");

// Solicita ao usuário as quantidades de vitórias e derrotas
let vitoriasHeroi = parseInt(readlineSync.question("Digite a quantidade de vitorias: "));
let derrotasHeroi = parseInt(readlineSync.question("Digite a quantidade de derrotas: "));

// Calcula o nível do herói
let nivelHeroi = calcularSaldoRanking(vitoriasHeroi, derrotasHeroi);

// Exibe a mensagem com o saldo e o nível do herói
console.log(`O Herói tem um saldo de ${vitoriasHeroi - derrotasHeroi} e está no nível de ${nivelHeroi}`);

