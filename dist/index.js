"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Clothe_1 = require("./model/Clothe");
const Suplement_1 = require("./model/Suplement");
const suplement1 = new Suplement_1.Suplement(1, "Creatina", "Soldiers", 20, "Maça verde");
const roupa1 = new Clothe_1.Clothe(1, "Camisa", "Insider", 35.99, 41);
suplement1.exibirSuplemento();
roupa1.exibirRoupa();
