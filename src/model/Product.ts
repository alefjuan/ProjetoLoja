import { IProduct } from "../interface/IProduct";
import Errors from "../errors/CustomErrors"

export default abstract class Product implements IProduct {
    id: number = 0;
    name: string = "";
    marca: string = "";
    preco: number = 0;

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNome(): string {
        return this.name;
    }

    public setNome(nome: string): void {
        this.name = nome;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public getPreco(): number {
        return this.preco;
    }

    // Sobrecarga do método setPreco
    public setPreco(preco: number): void;
    public setPreco(preco: string): void;

    public setPreco(preco: number | string): void {
        if (typeof preco === "number") {
            if (isNaN(preco)) {
                throw new Errors("O preço deve ser um número");
            }
            this.preco = preco;
        } else if (typeof preco === "string") {
            const parsedPreco = parseFloat(preco);
            if (isNaN(parsedPreco)) {
                throw new Errors("O preço deve ser um número");
            }
            this.preco = parsedPreco;
        } else {
            throw new Errors("Tipo inválido para preço");
        }
    }

    public exibirProduto(): void {
        const precoString = this.preco.toFixed(2); // Formata o preço como string com duas casas decimais
        console.log(`Id: ${this.id}\nNome: ${this.name}\nMarca: ${this.marca}\nPreço: ${precoString}`);
    }

    public divisao(): void {
        console.log("\n - - - - - - - - - - - - - - - - -");
    }
}
