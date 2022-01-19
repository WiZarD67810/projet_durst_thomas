import { Component, Input, OnInit } from '@angular/core';
import { Produit } from 'src/app/models/produit.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.css']
})
export class ProductCartComponent implements OnInit {

    @Input()
    Produit: Produit = new Produit("", "", 0);
    @Input() qte: number
    
    constructor() { }

    ngOnInit(): void {
    }
  
}
