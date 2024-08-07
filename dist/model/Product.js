"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomErrors_1 = __importDefault(require("../errors/CustomErrors"));
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
        if (typeof preco === "number") {
            if (isNaN(preco)) {
                throw new CustomErrors_1.default("O preço deve ser um número");
            }
            this.preco = preco;
        }
        else if (typeof preco === "string") {
            const parsedPreco = parseFloat(preco);
            if (isNaN(parsedPreco)) {
                throw new CustomErrors_1.default("O preço deve ser um número");
            }
            this.preco = parsedPreco;
        }
        else {
            throw new CustomErrors_1.default("Tipo inválido para preço");
        }
    }
    exibirProduto() {
        const precoString = this.preco.toFixed(2); // Formata o preço como string com duas casas decimais
        console.log(`Id: ${this.id}\nNome: ${this.name}\nMarca: ${this.marca}\nPreço: ${precoString}`);
    }
    divisao() {
        console.log("\n - - - - - - - - - - - - - - - - -");
    }
}
exports.default = Product;
