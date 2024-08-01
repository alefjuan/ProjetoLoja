"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clothe = void 0;
const Product_1 = __importDefault(require("./Product"));
class Clothe extends Product_1.default {
    // tamanho : number;
    // constructor(id : number, name: string, marca: string, preco: number, tamanho:number) {
    //     super(id, name, marca, preco);
    //     this.tamanho=tamanho;
    // }
    exibirProduto() {
        console.log(`Id: ${this.id}\nNome: ${this.name}\nMarca: ${this.marca}\nPreço: ${this.preco}`);
        super.divisao();
    }
}
exports.Clothe = Clothe;
