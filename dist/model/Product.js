"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(id, name, marca, preco) {
        this.id = id;
        this.name = name;
        this.marca = marca;
        this.preco = preco;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getNome() {
        return this.name;
    }
    setNome(nome) {
        this.name = nome;
    }
    getMarca() {
        return this.marca;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    getPreco() {
        return this.preco;
    }
    setPreco(preco) {
        if (isNaN(preco))
            throw new Error("O preço deve ser um número");
        this.preco = preco;
    }
    // exibirInformacoes(): void {
    //     console.log(`Nome: ${this.name}, Preço: ${this.preco}, Tipo: ${this.tipo}, Sabor: ${this.sabor},`);
    // }
    divisao() {
        console.log("\n - - - - - - - - - - - - - - - - -\n");
    }
}
exports.default = Product;
