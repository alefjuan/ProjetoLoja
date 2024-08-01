"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Datacenter_1 = __importDefault(require("../db/Datacenter"));
const Suplement_1 = require("../model/Suplement");
class SuplementController {
    constructor() {
        this.datacenter = new Datacenter_1.default();
    }
    getNewSuplement() {
        return new Suplement_1.Suplement();
    }
    registerNewSuplement(suplement) {
        this.datacenter.addNewSuplement(suplement);
    }
    listAllSuplements() {
        console.log(this.datacenter.getAllSuplements());
    }
    isDuplicateId(id) {
        return this.datacenter.getAllSuplements().some(suplement => suplement.getId() === id);
    }
}
exports.default = SuplementController;
