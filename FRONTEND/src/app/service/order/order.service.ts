import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { environment } from 'src/environments/environment';
import { Commande } from 'src/app/models/commande.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

    URL_API_ORDER: string = "/Order/" as const;

    constructor(private http: HttpClient) { }

    buy(order: Order): Observable<any>
    {
        let body = new URLSearchParams();
        body.set("order", JSON.stringify(order))
        let httpOption = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        return this.http.post<any>(environment.apiURL + this.URL_API_ORDER + "Buy", body.toString(), httpOption);
    }

    getOrders(): Observable<Commande[]>
    {
        return this.http.get<Commande[]>(environment.apiURL + this.URL_API_ORDER + "Orders");
    }
}
