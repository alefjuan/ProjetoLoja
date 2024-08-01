import { Suplement } from "../model/Suplement";
import { Clothe } from "../model/Clothe";

export default class Datacenter
{
    public suplements : Suplement[] = []
    public clothes: Clothe[] = [];

    public addNewSuplement(suplement: Suplement): void {
        this.suplements.push(suplement);
    }
    public removeSuplement(id: number): void{
        this.suplements.splice(id, 1);
    }
    public getSuplementSize(): number{
        return this.suplements.length;
    }
    public getSuplementById(id: number): Suplement{
        return this.suplements[id];
    }
    public getAllSuplements(): Suplement[]{
        return this.suplements;
    }

    public addNewClothe(clothe: Clothe): void {
        this.clothes.push(clothe);
    }
    public removeClothe(id: number): void{
        this.clothes.splice(id, 1);
    }
    public getClotheSize(): number{
        return this.clothes.length;
    }
    public getClotheById(id: number): Clothe{
        return this.clothes[id];
    }
    public getAllClothes(): Clothe[]
    {
        return this.clothes;
    }
}
