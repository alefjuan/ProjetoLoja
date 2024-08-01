import { IProduct } from "../interface/IProduct";

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

    public setPreco(preco: number): void {
        if (isNaN(preco)) {
            throw new Error("O preço deve ser um número");
        }
        this.preco = preco;
    }

    abstract exibirProduto(): void;

    public divisao(): void {
        console.log("\n - - - - - - - - - - - - - - - - -\n");
    }
}
