import { Produit } from "./produit.model";

export class Cart {
    
    constructor(public product: Produit, public Qte: number) { }
}
