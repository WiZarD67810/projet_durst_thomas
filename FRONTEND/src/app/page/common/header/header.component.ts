import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';
import { CartState } from 'src/app/shared/states/cart-state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Select(CartState.getQte) nbProduit: Observable<number>;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
      
  }

  get authStatus() {
    return this.authService.isAuth;
  }

  signOut() {
    this.authService.signOut();
  }
}
