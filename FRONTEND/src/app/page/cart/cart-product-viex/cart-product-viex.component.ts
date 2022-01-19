import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Cart } from 'src/app/models/cart.model';
import { Produit } from 'src/app/models/produit.model';
import { AddProduct } from 'src/app/shared/actions/addProduct.actions';
import { RemoveOneProduct } from 'src/app/shared/actions/removeOneProduct.actions';
import { RemoveProduct } from 'src/app/shared/actions/removeProduct.actions';
import { CartComponent } from '../cart/cart.component';

@Component({
  selector: 'app-cart-product-viex',
  templateUrl: './cart-product-viex.component.html',
  styleUrls: ['./cart-product-viex.component.css']
})
export class CartProductViexComponent implements OnInit {

    @Input()
    cart: Cart;
  
    Qte = 0;
  
    constructor(private store: Store, private cartView: CartComponent) { }
  
    ngOnInit(): void {
    }
  
    updateData(): void {
      this.cartView.ngOnInit();
    }
  
    getCount() : number {
      return this.cart.Qte * this.cart.product.Prix;
    }
  
    removeItem(product: Produit): void{
        this.store.dispatch(new RemoveOneProduct(this.cart.product));
        this.updateData();
    }
  
    addItem(product: Produit): void {
        this.store.dispatch(new AddProduct(this.cart.product));
        this.updateData();
    }
  
    removeProduct(product: Produit) : void {
        this.store.dispatch(new RemoveProduct(this.cart.product));
        this.updateData();
    }
}
