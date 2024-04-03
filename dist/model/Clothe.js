"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clothe = void 0;
const Product_1 = __importDefault(require("./Product"));
class Clothe extends Product_1.default {
    constructor(id, name, marca, preco, tamanho) {
        super(id, name, marca, preco);
        this.tamanho = tamanho;
    }
    exibirRoupa() {
        console.log(`Id: ${this.id}\nNome: ${this.name}\nMarca: ${this.marca}\nPreço: ${this.preco}\nTamanho: ${this.tamanho}`);
        super.divisao();
    }
}
exports.Clothe = Clothe;
