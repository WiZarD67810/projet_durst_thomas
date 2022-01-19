import { Produit } from "src/app/models/produit.model";

export class RemoveProduct {
    static readonly type = "[Cart] Remove Product";

    constructor(public product: Produit) { }
}