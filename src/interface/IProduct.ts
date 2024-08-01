export interface IProduct {
    id: number;
    name: string;
    marca: string;
    preco: number;

    getId(): number;
    setId(id: number): void;
    getNome(): string;
    setNome(nome: string): void;
    getMarca(): string;
    setMarca(marca: string): void;
    getPreco(): number;
    setPreco(preco: number): void;
    exibirProduto(): void;
}
