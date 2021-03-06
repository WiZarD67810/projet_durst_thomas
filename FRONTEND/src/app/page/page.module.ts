import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductInfoComponent } from './product-info/product-info.component';
import { AuthGuard } from '../guard/auth.guard';
import { CartComponent } from './cart/cart/cart.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { FilterTypePipe } from '../pipe/filter-type.pipe';
import { FilterPipe } from '../pipe/filter.pipe';
import { PhonePipe } from '../pipe/phone.pipe';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProduitCartComponent } from './produit-cart/produit-cart.component';
import { ConnexionComponent } from './authentification/connexion/connexion/connexion.component';
import { ProfilComponent } from './authentification/profil/profil.component';
import { AuthentificationComponent } from './authentification/authentification/authentification/authentification.component';
import { CartProductViexComponent } from './cart/cart-product-viex/cart-product-viex.component';
import { CartState } from '../shared/states/cart-state';
import { HistoriqueComponent } from './historique/historique/historique.component';
import { HistoriqueLineComponent } from './historique/historique-line/historique-line.component';
import { ProductCartComponent } from './historique/product-cart/product-cart.component';

const appChild: Routes = [
  {
    path: "Information",
    canActivate: [AuthGuard],
    component: UserProfilComponent
  },
  {
    path: "Product/:ref",
    component: ProductInfoComponent
  },
  {
    path: "Panier",
    component: CartComponent
  },
  {
    path: "Connexion",
    component: ConnexionComponent
  },
  {
    path: "Profil",
    component: ProfilComponent
  },
  {
    path: "Authentification",
    component: AuthentificationComponent
  },
  {
    path: "Historique",
    component: HistoriqueComponent
  }
]

@NgModule({
  declarations: [
    UserProfilComponent,
    ProductInfoComponent,
    PhonePipe,
    CartComponent,
    ProduitCartComponent,
    ConnexionComponent,
    ProfilComponent,
    AuthentificationComponent,
    CartProductViexComponent,
    HistoriqueComponent,
    HistoriqueLineComponent,
    ProductCartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(appChild),
    ReactiveFormsModule,
    NgxsModule.forFeature([CartState])
  ]
})
export class PageModule { }
