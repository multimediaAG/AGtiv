import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { getApiUrl } from "../helpers/apiUrl";
import { AlertService } from "./alert.service";

@Injectable({
    providedIn: "root",
})
export class RemoteService {
    public constructor(
        private http: HttpClient,
        private alertService: AlertService,
    ) { }

    public get(path: string, args?: any): Observable<any> {
        return this.do("get", path, args);
    }
    public post(path: string, args?: any): Observable<any> {
        return this.do("post", path, args);
    }
    public delete(path: string, args?: any): Observable<any> {
        return this.do("delete", path, args);
    }

    private do(type, path, args) {
        this.log(`fetching ${path} with data ${JSON.stringify(args)}`);
        return this.getRequest(type, path, args)
            .pipe(
                tap((): void => this.log(
                    `fetched ${
                        path
                    } with data ${
                        JSON.stringify(args)}`,
                )),
                catchError(this.handleError<any>(path, false)),
            );
    }

    private handleError<T>(operation = "operation", result?: T): any {
        return (error: any): Observable<T> => {
            // eslint-disable-next-line no-console
            console.error("Error occured in remote.service.ts:", error);

            this.log(`${operation} failed: ${error.message}`);
            // eslint-disable-next-line no-console
            console.log(result);

            this.alertService.error(error);

            return of(result as T);
        };
    }

    private getRequest(type: string, path: string, args: any): Observable<any> {
        let req;
        if (type == "get") {
            req = this.http.get<any>(`${getApiUrl()}${path}`, {
                ...args,
            });
        } else if (type == "post") {
            req = this.http.post<any>(`${getApiUrl()}${path}`, {
                ...args,
            });
        } else if (type == "put") {
            req = this.http.put<any>(`${getApiUrl()}${path}`, {
                ...args,
            });
        } else if (type == "delete") {
            req = this.http.delete<any>(`${getApiUrl()}${path}`, {
                ...args,
            });
        }
        return req;
    }

    private log(message: string): void {
        // eslint-disable-next-line no-console
        console.log(`RemoteService Log: ${message}`);
    }
}
