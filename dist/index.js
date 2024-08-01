"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BasicController_1 = __importDefault(require("./controller/BasicController"));
// import { Clothe } from "./model/Clothe";
// import { Suplement } from "./model/Suplement";
// const suplement1 = new Suplement(1,"Creatina","Soldiers",20,"Maça verde");
// const roupa1 = new Clothe(1,"Camisa","Insider",35.99,41);
// suplement1.exibirProduto();
// roupa1.exibirProduto();
let startController = new BasicController_1.default();
startController.startSystem();
