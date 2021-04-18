import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Offre } from "../classes/offre";
import { User } from "../classes/User";

@Injectable({
    providedIn: 'root'
})

export class NewOffreAdminService{
   
    u: User = new User(0,"0","0","0","0");
    private readonly urlWS = this.u.getUrl(); 

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
