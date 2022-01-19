import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.model';
import * as shajs from 'sha.js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    URL_API_LOGIN: string = "/User/" as const;

    isAuth = false;
    user: User = new User("", "", "", "", "", "", "", "", "", "", "");

    constructor(private http: HttpClient) { }

    register(lastName: string, forName: string, civility: string, adresse: string, cityCode: string, city: string, country: string, mail: string, phone: string, username: string, password: string): Observable<User> {
        let data: String = "lastName=" + lastName + "&forName=" + forName + "&civility=" + civility + "&adresse=" + adresse+ "&cityCode=" + cityCode + "&city=" + city + "&country=" + country + "&mail=" + mail + "&phone=" + phone + "&username=" + username + "&password=" + shajs('sha256').update(password).digest('hex');
        let httpOption = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        
        return this.http.post<User>(environment.apiURL + this.URL_API_LOGIN + "Register", data, httpOption);
    }

    login(username: string, password: string): Observable<User> {
        let data: String = "username=" + username + "&password=" + shajs('sha256').update(password).digest('hex');
        let httpOption = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        return this.http.post<User>(environment.apiURL + this.URL_API_LOGIN + "Login", data, httpOption);
    }

    signOut() {
        this.user = new User("", "", "", "", "", "", "", "", "", "", "");
        this.isAuth = false;
    }
}
