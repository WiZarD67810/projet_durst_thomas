import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from 'src/app/models/commande.model';
import { OrderService } from 'src/app/service/order/order.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

    commandes: Commande[]

    constructor(private order: OrderService, private router: Router) { }

    ngOnInit(): void {
        this.order.getOrders().subscribe(
            (data: Commande[]) => {
                this.commandes = data;
            },
            (error) => {
                this.router.navigate(['/page/Connexion']);
            }
        )
    }
}
