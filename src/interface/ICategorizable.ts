import { SuplementCategory } from "../model/SuplementCategory";

export interface ICategorizable {
    categoria: SuplementCategory;
    setCategoria(categoria: SuplementCategory): void;
}
