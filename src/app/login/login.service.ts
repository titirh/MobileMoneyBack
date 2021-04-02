import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, tap } from "rxjs/operators";
import { User } from "../classes/User";
import { Utilisateur } from "../classes/Utilisateur";

@Injectable({
    providedIn: 'root'
})

export class LoginService{

    private currentUserSubject:BehaviorSubject<User>;
    private currentUser: Observable<User>;
    private readonly urlWS = 'http://localhost:8080/WSMobileMoney/webresources';
    
    public optionRequete = {
        headers: new HttpHeaders({
            'Acces-Control-Allow-Origin' : '*',
        })
    };

    //-----------------------------------------------

    public get currentUserValue(): User{

        return this.currentUserSubject.value;
    }

    constructor(private httpClient: HttpClient){

        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    //-----------------------------------------------

    public login(modelUser: Utilisateur) {

        return this.httpClient.post<any>(this.urlWS + '/accueil/login',modelUser).pipe(
            map(responseUser => {
                localStorage.setItem('currentUser', JSON.stringify(responseUser));
                this.currentUserSubject.next(responseUser);
                console.log(this.currentUser);

                return responseUser;
            })
        );
    }

    public logout() {

        console.log("Utilisateur suivant va se deconnecter");
        console.log(localStorage.getItem('currentUser'));

        localStorage.removeItem('currentUser');
        this.currentUser = null;
        //this.currentUserSubject = null;
        
        window.location.reload();
    }

    /*   
    public getLogin2(data:any): Observable<Utilisateur[]> {

            var retour:  Observable<any> = this.httpClient.post<{access_token:  string}>(this.urlWS + '/accueil/login',data).pipe(
            tap(res => {
                if(res != null) { 
                    localStorage.setItem('access_token', res);
                }
            })
        );

        return retour;
    }

        /========
        return this.httpClient.post<Utilisateur[]>(this.urlWS + '/accueil/login',data).pipe(
            map(
                (jsonArray: Object[]) => jsonArray.map(jsonItem => Utilisateur.fromJson(jsonItem))
            )
        );
    }

    login(email:string, password:string) {

        return this.httpClient.post<{access_token:  string}>('/accueil/login', {email, password}).pipe(
            tap(res => {
                localStorage.setItem('access_token', res.access_token);
            })
        )
    }
    */
}
