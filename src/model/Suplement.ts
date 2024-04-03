import Product from "./Product";

export class Suplement extends Product {

    sabor : string;
    constructor(id : number, name: string, marca: string, preco: number, sabor:string) {
        super(id, name, marca, preco);
        this.sabor=sabor;
    }

    exibirSuplemento():void{
        console.log(`Id: ${this.id}\nNome: ${this.name}\nMarca: ${this.marca}\nPreço: ${this.preco}\nSabor: ${this.sabor}`)
        super.divisao();
    }
}