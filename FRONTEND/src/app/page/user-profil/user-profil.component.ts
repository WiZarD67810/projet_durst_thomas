import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  authInForm: FormGroup = new FormGroup({});;

  constructor(private formBuilder: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {

  }

  get User() {
    return this.authService.user;
  }
}
