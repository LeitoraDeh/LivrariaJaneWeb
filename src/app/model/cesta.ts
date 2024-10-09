import { Item } from "./item";
import { Cadastro } from "./cadastro";

export class Cesta {
    public codigo: number = 0;
    public cliente: Cadastro = new Cadastro();
    public total: number = 0;
    public itens: Item[] = [];
}
