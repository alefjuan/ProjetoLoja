export default class Product
{
    id: number;
    name : string;
    marca : string;
    preco : number;


    constructor(id:number,name:string, marca: string, preco:number){
        this.id = id;
        this.name = name;
        this.marca = marca;
        this.preco = preco;
    }
    public getId():number {
        return this.id;
    }
    public setId(id:number) {
        this.id = id;
    }
    
    public getNome():string {
        return this.name;
    }
    public setNome(nome:string) {
        this.name = nome;
    }

    public getMarca() : string {
        return this.marca;
    }
    
    public setMarca(marca:string) : void {
        this.marca = marca;
    }

    public getPreco() : number {
        return this.preco;
    }
    
    public setPreco(preco:number) : void {
        if (isNaN(preco)) throw new Error("O preço deve ser um número");
        this.preco = preco;
    }

    // exibirInformacoes(): void {
    //     console.log(`Nome: ${this.name}, Preço: ${this.preco}, Tipo: ${this.tipo}, Sabor: ${this.sabor},`);
    // }
    public divisao():void{
        console.log("\n - - - - - - - - - - - - - - - - -\n")
    }
}