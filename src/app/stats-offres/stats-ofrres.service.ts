import { Injectable,ErrorHandler } from "@angular/core";
import { Offre } from "../classes/offre";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { Statistiques } from "../classes/Statistiques";

@Injectable({
    providedIn: 'root'
})

export class StatsOffresService{

    private readonly urlWS = 'http://localhost:8080/WSMobileMoney/webresources';
    
    public optionRequete = {
        headers: new HttpHeaders({
            'Acces-Control-Allow-Origin' : '*',
        })
    };

    constructor(private http: HttpClient){}

    public getClientsFavoris(): Observable<Statistiques[]> {

        return this.http.get<Statistiques[]>(this.urlWS+'/statistiques/clientsfavoris').pipe(
            map(
                (jsonArray: Object[]) => jsonArray.map(jsonItem => Statistiques.fromJson(jsonItem))
            )
        );
    }
}