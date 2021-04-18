import { Injectable,ErrorHandler } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { MouvementMoney } from "../classes/MouvementMoney";
import { User } from "../classes/User";

@Injectable({
    providedIn: 'root'
})

export class TransactionsOffresService{

    
u: User = new User(0,"0","0","0","0");
private readonly urlWS = this.u.getUrl();
    
    public optionRequete = {
        headers: new HttpHeaders({
            'Acces-Control-Allow-Origin' : '*',
        })
    };

    constructor(private http: HttpClient){}

    public getMouvementMoneysWS(): Observable<MouvementMoney[]> {

        return this.http.get<MouvementMoney[]>(this.urlWS+'/transactions').pipe(
            map(
                (jsonArray: Object[]) => jsonArray.map(jsonItem => MouvementMoney.fromJson(jsonItem))
            )
        );
    }

    public valider(mvt: MouvementMoney): Observable<any> {
        
        return this.http.post<MouvementMoney>(this.urlWS+'/transactions/validate', mvt);       
    }

    public rejeter(mvt: MouvementMoney): Observable<any> {
        
        return this.http.post<MouvementMoney[]>(this.urlWS+'/transactions/reject', mvt);       
    }
}
