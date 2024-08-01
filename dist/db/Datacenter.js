"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Datacenter {
    constructor() {
        this.suplements = [];
        this.clothes = [];
    }
    addNewSuplement(suplement) {
        this.suplements.push(suplement);
    }
    removeSuplement(id) {
        this.suplements.splice(id, 1);
    }
    getSuplementSize() {
        return this.suplements.length;
    }
    getSuplementById(id) {
        return this.suplements[id];
    }
    getAllSuplements() {
        return this.suplements;
    }
    addNewClothe(clothe) {
        this.clothes.push(clothe);
    }
    removeClothe(id) {
        this.clothes.splice(id, 1);
    }
    getClotheSize() {
        return this.clothes.length;
    }
    getClotheById(id) {
        return this.clothes[id];
    }
    getAllClothes() {
        return this.clothes;
    }
}
exports.default = Datacenter;
