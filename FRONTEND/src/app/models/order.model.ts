import { Cart } from "./cart.model";

export class Order {
    
    constructor(public carts: Cart[]) { }
}
