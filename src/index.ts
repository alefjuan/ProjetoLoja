import { Clothe } from "./model/Clothe";
import { Suplement } from "./model/Suplement";

const suplement1 = new Suplement(1,"Creatina","Soldiers",20,"Maça verde");
const roupa1 = new Clothe(1,"Camisa","Insider",35.99,41);


suplement1.exibirSuplemento();
roupa1.exibirRoupa();