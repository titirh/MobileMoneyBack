import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Offre } from "../classes/offre";

@Injectable({
    providedIn: 'root'
})

export class NewOffreAdminService{
   
    private readonly urlWS = 'http://localhost:8080/WSMobileMoney/webresources';

    //--------------------------------

    constructor(private http: HttpClient){}

    public optionRequete = {
        headers: new HttpHeaders({
            'Acces-Control-Allow-Origin' : '*',
        })
    };
    
    //--------------------------------

    public createOffreWS(newOffre: Offre): Observable<Offre> {
       
        return this.http.post<Offre>(this.urlWS + '/offre', newOffre);
    }
}