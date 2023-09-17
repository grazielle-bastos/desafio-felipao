// Definição da classe Herói
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataques = "";

        // Verifica o tipo do herói e define os ataques com base no tipo
        if (this.tipo === "mago") {
            ataques = "usou magia";
        } else if (this.tipo === "guerreiro") {
            ataques = "usou espada";
        } else if (this.tipo === "monge") {
            ataques = "usou artes marciais";
        } else if (this.tipo === "ninja") {
            ataques = "usou shuriken";
        } else {
            // Se o tipo não corresponder a nenhum dos tipos conhecidos, define um ataque indefinido
            ataques = "usou ataque indefinido";
        }

        // Exibe a mensagem dos ataques com nome, idade e tipo
        console.log(`O ${this.tipo} ${this.nome}, de ${this.idade} anos, ${ataques}.`);
    }
}

// Criando instâncias de Heróis com diferentes tipos
const mago = new Heroi("Harry Potter", 18, "mago");
const guerreiro = new Heroi("Ron Weasley", 19, "guerreiro");
const monge = new Heroi("Neville Longbottom", 20, "monge");
const ninja = new Heroi("Hermione Granger", 18, "ninja");

// Chamando o método atacar para cada instância
mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
