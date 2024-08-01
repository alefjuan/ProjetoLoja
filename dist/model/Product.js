"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor() {
        this.id = 0;
        this.name = "";
        this.marca = "";
        this.preco = 0;
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
        if (isNaN(preco)) {
            throw new Error("O preço deve ser um número");
        }
        this.preco = preco;
    }
    divisao() {
        console.log("\n - - - - - - - - - - - - - - - - -\n");
    }
}
exports.default = Product;
