import { Component, Input, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { Commande } from 'src/app/models/commande.model';

@Component({
  selector: 'app-historique-line',
  templateUrl: './historique-line.component.html',
  styleUrls: ['./historique-line.component.css']
})
export class HistoriqueLineComponent implements OnInit {

    @Input() commande: Commande
    isShowing: boolean = false;

    constructor() { }

    ngOnInit(): void {
    }

    setShowing(): void {
        this.isShowing = !this.isShowing;
    }
}
