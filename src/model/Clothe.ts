import Product from "./Product";

export class Clothe extends Product {

    // tamanho : number;
    // constructor(id : number, name: string, marca: string, preco: number, tamanho:number) {
    //     super(id, name, marca, preco);
    //     this.tamanho=tamanho;
    // }
    exibirProduto():void{
        console.log(`Id: ${this.id}\nNome: ${this.name}\nMarca: ${this.marca}\nPreço: ${this.preco}`)
        super.divisao();
    }
}