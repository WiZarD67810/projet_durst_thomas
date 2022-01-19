import { Cart } from "./cart.model";

export class Commande {
    
    Reference: string = "";

    constructor(public carts: Cart[]) { }
}
