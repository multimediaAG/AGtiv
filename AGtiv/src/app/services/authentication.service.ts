import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { RemoteService } from "./remote.service";

@Injectable({
    providedIn: "root",
})
export class AuthenticationService {
    public isLoggedIn = false;
    public currentUser: any;

    constructor(private remoteService: RemoteService) {
        const token = sessionStorage.getItem("jwt_token");
        const user = sessionStorage.getItem("currentUser");
        if (token && user) {
            this.isLoggedIn = true;
            this.currentUser = JSON.parse(user);
        }
    }

    public login(username: string, password: string): Observable<any> {
        return this.remoteService.post("auth/login",
            {
                password,
                username,
            });
    }
    public get loggedIn() {
        return this.isLoggedIn;
    }

    public logout() {
        sessionStorage.clear();
        this.isLoggedIn = false;
    }
}
