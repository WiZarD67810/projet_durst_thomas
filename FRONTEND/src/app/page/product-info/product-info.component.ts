import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Produit } from 'src/app/models/produit.model';
import { ProduitService } from 'src/app/service/produit/produit.service';
import { AddProduct } from 'src/app/shared/actions/addProduct.actions';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {

    Produit: Produit;

    constructor(private route: ActivatedRoute, private productService: ProduitService, private store: Store) { }

    ngOnInit(): void {
        this.productService.getSingleProduct(this.route.snapshot.params['ref']).subscribe(
            (products: Produit) => {
                this.Produit = products;
            }
        );
    }

    addProduct() {
        this.store.dispatch(new AddProduct(this.Produit));
    }
}
