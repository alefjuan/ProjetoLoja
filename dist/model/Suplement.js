"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suplement = void 0;
const Product_1 = __importDefault(require("./Product"));
const SuplementCategory_1 = require("./SuplementCategory");
class Suplement extends Product_1.default {
    constructor() {
        super();
        this.categoria = SuplementCategory_1.SuplementCategory.OUTROS; // Valor padrão
    }
    setCategoria(categoria) {
        this.categoria = categoria;
    }
    exibirProduto() {
        console.log(`\nId: ${this.id}\nNome: ${this.name}\nMarca: ${this.marca}\nPreço: ${this.preco}\nCategoria: ${this.categoria}`);
        super.divisao();
    }
}
exports.Suplement = Suplement;
