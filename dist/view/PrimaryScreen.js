"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SuplementCategory_1 = require("../model/SuplementCategory");
const CustomErrors_1 = __importDefault(require("../errors/CustomErrors")); // Importa a exceção personalizada
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class PrimaryScreen {
    constructor(suplementController) {
        this.prompt = (0, prompt_sync_1.default)();
        this.suplementController = suplementController;
    }
    getFirstScreen() {
        let showScreen = false;
        while (!showScreen) {
            let choice = this.prompt("Escolha:\n1 - Cadastro de Suplemento\n2 - Listar\n3 - Excluir\n4 - Sair\n");
            switch (choice) {
                case "1":
                    if (this.prompt("Deseja registrar com objeto (1) ou parâmetros separados (2)? ") === "1") {
                        let suplement = this.suplementController.getNewSuplement();
                        if (this.registerNewSuplementWithObject(suplement)) {
                            console.log("\nNovo suplemento criado:");
                            suplement.exibirProduto(); // Chama o método exibirProduto do suplemento
                            console.log("\n");
                        }
                        else {
                            console.log("Falha ao criar o suplemento. Verifique os dados e tente novamente.");
                        }
                    }
                    else {
                        if (this.registerNewSuplementWithParams()) {
                            console.log("\nNovo suplemento criado com parâmetros separados.\n");
                        }
                        else {
                            console.log("Falha ao criar o suplemento. Verifique os dados e tente novamente.");
                        }
                    }
                    break;
                case "2":
                    this.getAllSuplements();
                    break;
                case "3":
                    this.deleteSuplement();
                    break;
                case "4":
                    showScreen = true;
                    break;
                default:
                    console.log("Resposta inválida!");
            }
        }
    }
    registerNewSuplementWithObject(suplement) {
        try {
            let idInput = this.prompt("Digite o id do suplemento (apenas números): ");
            if (!/^\d+$/.test(idInput)) {
                throw new CustomErrors_1.default("O ID deve conter apenas números.");
            }
            let id = parseFloat(idInput);
            if (this.suplementController.isDuplicateId(id)) {
                throw new CustomErrors_1.default("ID já existe. Por favor, insira um ID único.");
            }
            suplement.setId(id);
            let name = this.prompt("Digite o nome do suplemento: ");
            suplement.setNome(name);
            let marca = this.prompt("Digite a marca do suplemento: ");
            suplement.setMarca(marca);
            let precoInput = this.prompt("Digite o preço do suplemento: ");
            let preco = parseFloat(precoInput);
            suplement.setPreco(preco);
            let categoriaInput = this.prompt("Digite a categoria do suplemento (1: Vitaminas, 2: Proteínas, 3: Aminoácidos, 4: Energéticos): ");
            let categoria;
            switch (categoriaInput) {
                case "1":
                    categoria = SuplementCategory_1.SuplementCategory.VITAMINAS;
                    break;
                case "2":
                    categoria = SuplementCategory_1.SuplementCategory.PROTEINAS;
                    break;
                case "3":
                    categoria = SuplementCategory_1.SuplementCategory.AMINOACIDOS;
                    break;
                case "4":
                    categoria = SuplementCategory_1.SuplementCategory.ENERGETICOS;
                    break;
                default:
                    throw new CustomErrors_1.default("Categoria inválida.");
            }
            suplement.setCategoria(categoria);
            this.suplementController.registerNewSuplement(suplement);
            return true;
        }
        catch (error) {
            if (error instanceof CustomErrors_1.default) {
                console.error(error.message);
            }
            else {
                console.error("Um erro desconhecido ocorreu");
            }
            return false;
        }
    }
    registerNewSuplementWithParams() {
        try {
            let idInput = this.prompt("Digite o id do suplemento (apenas números): ");
            if (!/^\d+$/.test(idInput)) {
                throw new CustomErrors_1.default("O ID deve conter apenas números.");
            }
            let id = parseFloat(idInput);
            if (this.suplementController.isDuplicateId(id)) {
                throw new CustomErrors_1.default("ID já existe. Por favor, insira um ID único.");
            }
            let name = this.prompt("Digite o nome do suplemento: ");
            let marca = this.prompt("Digite a marca do suplemento: ");
            let precoInput = this.prompt("Digite o preço do suplemento: ");
            let preco = parseFloat(precoInput);
            let categoriaInput = this.prompt("Digite a categoria do suplemento (1: Vitaminas, 2: Proteínas, 3: Aminoácidos, 4: Energéticos): ");
            let categoria;
            switch (categoriaInput) {
                case "1":
                    categoria = SuplementCategory_1.SuplementCategory.VITAMINAS;
                    break;
                case "2":
                    categoria = SuplementCategory_1.SuplementCategory.PROTEINAS;
                    break;
                case "3":
                    categoria = SuplementCategory_1.SuplementCategory.AMINOACIDOS;
                    break;
                case "4":
                    categoria = SuplementCategory_1.SuplementCategory.ENERGETICOS;
                    break;
                default:
                    throw new CustomErrors_1.default("Categoria inválida.");
            }
            this.suplementController.registerNewSuplement(id, name, marca, preco, categoria);
            return true;
        }
        catch (error) {
            if (error instanceof CustomErrors_1.default) {
                console.error(error.message);
            }
            else {
                console.error("Um erro desconhecido ocorreu");
            }
            return false;
        }
    }
    getAllSuplements() {
        this.suplementController.listAllSuplements();
    }
    deleteSuplement() {
        try {
            let idInput = this.prompt("Digite o id do suplemento a ser excluído (apenas números): ");
            if (!/^\d+$/.test(idInput)) {
                throw new CustomErrors_1.default("O ID deve conter apenas números.");
            }
            let id = parseFloat(idInput);
            this.suplementController.deleteSuplementById(id);
        }
        catch (error) {
            if (error instanceof CustomErrors_1.default) {
                console.error(error.message);
            }
            else {
                console.error("Um erro desconhecido ocorreu");
            }
        }
    }
}
exports.default = PrimaryScreen;
