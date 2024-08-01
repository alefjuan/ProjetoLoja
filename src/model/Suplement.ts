import Product from "./Product";
import { SuplementCategory } from "./SuplementCategory";
import { ICategorizable } from "../interface/ICategorizable";

export class Suplement extends Product implements ICategorizable {
    categoria: SuplementCategory;

    constructor() {
        super();
        this.categoria = SuplementCategory.VITAMINAS; // Valor padrão
    }

    public setCategoria(categoria: SuplementCategory): void {
        this.categoria = categoria;
    }

    public exibirProduto(): void {
        console.log(`Id: ${this.id}\nNome: ${this.name}\nMarca: ${this.marca}\nPreço: ${this.preco}\nCategoria: ${this.categoria}`);
        super.divisao();
    }
}
