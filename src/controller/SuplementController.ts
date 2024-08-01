import Datacenter from "../db/Datacenter";
import { Suplement } from "../model/Suplement";

export default class SuplementController {

    private datacenter: Datacenter = new Datacenter();

    public getNewSuplement(): Suplement {
        return new Suplement();
    }

    public registerNewSuplement(suplement: Suplement) {
        this.datacenter.addNewSuplement(suplement);
    }

    public listAllSuplements(): void {
        console.log(this.datacenter.getAllSuplements());
    }

    public isDuplicateId(id: number): boolean {
        return this.datacenter.getAllSuplements().some(suplement => suplement.getId() === id);
    }
}
