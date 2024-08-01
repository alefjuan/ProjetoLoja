import SuplementController from "../controller/SuplementController";
import { Suplement } from "../model/Suplement";
import { SuplementCategory } from "../model/SuplementCategory";
import promptSync from "prompt-sync";

export default class PrimaryScreen {

  private suplementController: SuplementController;

  constructor(suplementController: SuplementController) {
    this.suplementController = suplementController;
  }
  private prompt = promptSync();

  public getFirstScreen(): void {
    let showScreen: boolean = false;
    while (!showScreen) {
      //console.clear(); // Limpar a tela a cada iteração
      let choice = this.prompt("Escolha:\n1 - Cadastro de Suplemento\n2 - Listar\n3 - Sair\n");

      switch (choice) {
        case "1":
          let suplement: Suplement = this.suplementController.getNewSuplement();
          if (this.registerNewSuplement(suplement)) {
            console.log("\nNovo suplemento criado:", suplement, "\n");
          } else {
            console.log("Falha ao criar o suplemento. Verifique os dados e tente novamente.");
          }
          break;

        case "2":
          this.getAllSuplements();
          break;

        case "3":
          showScreen = true;
          break;

        default:
          console.log("Resposta inválida!");
      }
    }
  }

  public registerNewSuplement(suplement: Suplement): boolean {
    try {
      let idInput = this.prompt("Digite o id do suplemento (apenas números): ");
      if (!/^\d+$/.test(idInput)) {
        throw new Error("O ID deve conter apenas números.");
      }
      let id = parseFloat(idInput);
      if (this.suplementController.isDuplicateId(id)) {
        throw new Error("ID já existe. Por favor, insira um ID único.");
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
      let categoria: SuplementCategory;
      switch (categoriaInput) {
        case "1":
          categoria = SuplementCategory.VITAMINAS;
          break;
        case "2":
          categoria = SuplementCategory.PROTEINAS;
          break;
        case "3":
          categoria = SuplementCategory.AMINOACIDOS;
          break;
        case "4":
          categoria = SuplementCategory.ENERGETICOS;
          break;
        default:
          throw new Error("Categoria inválida.");
      }
      suplement.setCategoria(categoria);

      this.suplementController.registerNewSuplement(suplement);
      return true;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error("Um erro desconhecido ocorreu");
      }
      return false;
    }
  }

  public getAllSuplements() {
    this.suplementController.listAllSuplements();
  }
}
