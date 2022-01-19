import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  authInForm: FormGroup = new FormGroup({});
  errorMessage: string = "";

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private route: Router) { }

  ngOnInit(): void {
    this.authInForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.pattern(/[a-zA-Z ]{1,}/)]],
      password: ['', [Validators.required, Validators.pattern(/[a-zA-Z ]{1,}/)]]
    });
  }

    onSubmit() {
        const username = this.authInForm.get('username')?.value;
        const password = this.authInForm.get('password')?.value;

        this.authService.login(username, password).subscribe(
            (data) => {
                this.authService.isAuth = true;
                this.authService.user = data;

                this.route.navigate(["/page/Information"]);
            },
            (error) => {
                this.errorMessage = "Connexion impossible";
            }
        )
    }
}
