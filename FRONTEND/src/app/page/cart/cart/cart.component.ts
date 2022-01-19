import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { Order } from 'src/app/models/order.model';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/service/auth/auth.service';
import { OrderService } from 'src/app/service/order/order.service';
import { EmptyCart } from 'src/app/shared/actions/emptyCart.actions';
import { CartState } from 'src/app/shared/states/cart-state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

    @Select(CartState.getCart) carts: Observable<Cart[]>;

    @Select(CartState.getQte) cartLength: Observable<number>;
    
    @Select(CartState.getCost) costTotal: Observable<number>;

    constructor(private store: Store, private authService: AuthService, private Order: OrderService, private route: Router) { }

    ngOnInit(): void {

    }

    get isAuth()
    {
        return this.authService.isAuth;
    }

    onSubmit()
    {
        if(!this.authService.isAuth)
        {
            this.route.navigate(["/page/Connexion"]);
        }

        if(this.store.dispatch.length > 0)
        {
            let list: Cart[] = [];
            this.carts.subscribe(
                (item) => {
                    list = item;
                }
            );

            this.Order.buy(new Order(list)).subscribe(
                (data) => {
                    this.store.dispatch(new EmptyCart)
                },
                (error) => {
                    switch (error.status) {
                        case 400:
                            
                            break;
                        case 401:
                            this.authService.isAuth = false;
                            this.route.navigate(["/page/Connexion"]);
                    }
                }
            )
        }
    }
}
