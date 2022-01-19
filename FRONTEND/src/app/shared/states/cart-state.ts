import { Injectable } from "@angular/core";
import { State, Selector, Action, StateContext } from "@ngxs/store";
import { Cart } from "src/app/models/cart.model";
import { AddProduct } from "../actions/addProduct.actions";
import { EmptyCart } from "../actions/emptyCart.actions";
import { RemoveOneProduct } from "../actions/removeOneProduct.actions";
import { RemoveProduct } from "../actions/removeProduct.actions";
import { CartStateModel } from "./cart-state-models";

@State<CartStateModel>({
    name: "cart",
    defaults: {
        carts: [],
    },
})
@Injectable()
export class CartState {

    @Selector()
    static getCart(state: CartStateModel): Cart[] {
        return state.carts;
    }

    @Selector()
    static getNumberCart(state: CartStateModel): number {
        return state.carts.length;
    }

    @Selector()
    static getCost(state: CartStateModel): number {
        return state.carts.reduce(
            function(prev, data) {
                return prev + (data.Qte * data.product.Prix);
            }, 0
        );
    }

    @Selector()
    static getQte(state: CartStateModel) {
        return state.carts.reduce(
            function(prev, data) {
                return prev + data.Qte;
            }, 0
        );
    }

    @Action(AddProduct)
    add({ getState, patchState }: StateContext<CartStateModel>, { product }: AddProduct) {
        const state = getState();
        const indexItem = state.carts.findIndex((item: Cart) => item.product.Reference === product.Reference);

        if(indexItem === -1) {
            // Item not found
            const cart = new Cart(product, 1);
            patchState({
                carts: [
                    ...state.carts, cart
                ],
            });
        } else {
            // item found
            /**
             * Mr Maurice j'ai un problème inconnu à cet endroit
             * voici la seule solution pour que cela fonctionne
             * 
             * Ancien code :
             * 
             * const cartWithNewNumberOfQte = state.carts;
             * cartWithNewNumberOfQte[indexItem].Qte++;
             * patchState({
             *      carts: cartWithNewNumberOfQte,
             * });
             */
            
            let cartsNew: Cart[] = [];
            const carts = state.carts;

            carts.forEach(
                element => {
                    if(element.product.Reference == product.Reference) {
                        cartsNew.push(new Cart(element.product, element.Qte+1));
                    } else {
                        cartsNew.push(new Cart(element.product, element.Qte));
                    }
                    
                }
            )

            patchState({
                carts: cartsNew
            });
        }
    }

    @Action(RemoveOneProduct)
    removeOne({ getState, patchState }: StateContext<CartStateModel>, { product }: RemoveOneProduct) {
        const state = getState();

        let cartsNew: Cart[] = [];
        const carts = state.carts;

        carts.forEach(
            element => {
                if(element.product.Reference == product.Reference) {
                    if(element.Qte > 1) {
                        cartsNew.push(new Cart(element.product, element.Qte-1));
                    }
                } else {
                    cartsNew.push(new Cart(element.product, element.Qte));
                }
                
            }
        )

        patchState({
            carts: cartsNew,
        });
    }

    @Action(RemoveProduct)
    remove({ getState, patchState }: StateContext<CartStateModel>, { product }: RemoveProduct) {
        const state = getState();

        patchState({
            carts: state.carts.filter(
                item => item.product.Reference !== product.Reference
            )
        });
    }

    @Action(EmptyCart)
    empty({ getState, patchState }: StateContext<CartStateModel>): void {
        const state = getState();

        patchState({ 
            carts: [] 
        });
    }
}