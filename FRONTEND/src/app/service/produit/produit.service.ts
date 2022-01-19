import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Produit } from 'src/app/models/produit.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  URL_API_PRODUIT: string = "/Product/" as const;
  
  constructor(private http: HttpClient) { }

    getProduct(): Observable<Produit[]> {
        return this.http.get<Produit[]>(environment.apiURL + this.URL_API_PRODUIT + "Products");
    }

    getSingleProduct(ref: string): Observable<Produit> {
        return this.http.get<Produit>(environment.apiURL + this.URL_API_PRODUIT + ref);
    }
}
