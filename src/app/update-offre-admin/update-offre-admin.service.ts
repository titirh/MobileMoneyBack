import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Offre } from "../classes/offre";

@Injectable({
    providedIn: 'root'
})

export class UpdateOffreAdminService{
   
    private readonly urlWS = 'http://localhost:8080/WSMobileMoney/webresources';

    //--------------------------------

    constructor(private http: HttpClient){}

    public optionRequete = {
        headers: new HttpHeaders({
            'Acces-Control-Allow-Origin' : '*',
        })
    };
    
    //--------------------------------

    public updateOffreWS(newOffre: Offre): Observable<Offre> {

        return this.http.put<Offre>(this.urlWS + '/offre', newOffre,this.optionRequete);
    }
}