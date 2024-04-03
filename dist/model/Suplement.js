"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suplement = void 0;
const Product_1 = __importDefault(require("./Product"));
class Suplement extends Product_1.default {
    constructor(id, name, marca, preco, sabor) {
        super(id, name, marca, preco);
        this.sabor = sabor;
    }
    exibirSuplemento() {
        console.log(`Id: ${this.id}\nNome: ${this.name}\nMarca: ${this.marca}\nPreço: ${this.preco}\nSabor: ${this.sabor}`);
        super.divisao();
    }
}
exports.Suplement = Suplement;
