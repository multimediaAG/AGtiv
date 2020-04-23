import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RemoteService } from './remote.service';

@Injectable({
    providedIn: "root"
})
export class AuthenticationService {
    public isLoggedIn: boolean = false;
    public currentUser: any;

    constructor (private remoteService: RemoteService) {}

    public login(username: string, password: string): Observable<any> {
        return this.remoteService.post("auth/login",
            {
                password,
                username,
            }
        );
    }
    public get loggedIn() {
        return this.isLoggedIn;
    }

    public saveJwtToken(token) {
        sessionStorage.setItem("jwt_token", token);
    }

    public logout() {
        //
    }
}
