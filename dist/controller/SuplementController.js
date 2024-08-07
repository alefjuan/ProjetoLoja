"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Suplement_1 = require("../model/Suplement");
const CustomErrors_1 = __importDefault(require("../errors/CustomErrors"));
class SuplementController {
    constructor() {
        this.suplements = [];
    }
    getNewSuplement() {
        return new Suplement_1.Suplement();
    }
    registerNewSuplement(suplementOrId, name, marca, preco, categoria) {
        if (typeof suplementOrId === "number") {
            // Criar novo suplemento a partir dos parâmetros
            const suplement = new Suplement_1.Suplement();
            suplement.setId(suplementOrId);
            suplement.setNome(name);
            suplement.setMarca(marca);
            suplement.setPreco(preco);
            suplement.setCategoria(categoria);
            this.suplements.push(suplement);
        }
        else {
            // Adicionar suplemento diretamente
            this.suplements.push(suplementOrId);
        }
    }
    listAllSuplements() {
        this.suplements.forEach(suplement => suplement.exibirProduto());
    }
    isDuplicateId(id) {
        return this.suplements.some(suplement => suplement.getId() === id);
    }
    deleteSuplementById(id) {
        const index = this.suplements.findIndex(suplement => suplement.getId() === id);
        if (index === -1) {
            throw new CustomErrors_1.default("Suplemento não encontrado.");
        }
        this.suplements.splice(index, 1);
        console.log(`Suplemento com id ${id} foi excluído com sucesso.`);
    }
}
exports.default = SuplementController;
