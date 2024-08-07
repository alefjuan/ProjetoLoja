import { Suplement } from "../model/Suplement";
import Errors from "../errors/CustomErrors";
import { SuplementCategory } from "../model/SuplementCategory";

export default class SuplementController {
    private suplements: Suplement[] = [];

    public getNewSuplement(): Suplement {
        return new Suplement();
    }
    //sobrecarga
    public registerNewSuplement(suplement: Suplement): void;
    public registerNewSuplement(id: number, name: string, marca: string, preco: number, categoria: SuplementCategory): void;

    public registerNewSuplement(suplementOrId: Suplement | number, name?: string, marca?: string, preco?: number, categoria?: SuplementCategory): void {
        if (typeof suplementOrId === "number") {
            // Criar novo suplemento a partir dos parâmetros
            const suplement = new Suplement();
            suplement.setId(suplementOrId);
            suplement.setNome(name!);
            suplement.setMarca(marca!);
            suplement.setPreco(preco!);
            suplement.setCategoria(categoria!);

            this.suplements.push(suplement);
        } else {
            this.suplements.push(suplementOrId);
        }
    }

    public listAllSuplements(): void {
        this.suplements.forEach(suplement => suplement.exibirProduto());
    }

    public isDuplicateId(id: number): boolean {
        return this.suplements.some(suplement => suplement.getId() === id);
    }

    public deleteSuplementById(id: number): void {
        const index = this.suplements.findIndex(suplement => suplement.getId() === id);
        if (index === -1) {
            throw new Errors("Suplemento não encontrado.");
        }
        this.suplements.splice(index, 1);
        console.log(`Suplemento com id ${id} foi excluído com sucesso.`);
    }
}
