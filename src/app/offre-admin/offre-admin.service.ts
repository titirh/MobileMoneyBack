import { Injectable,ErrorHandler } from "@angular/core";
import { Offre } from "../classes/offre";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { User } from "../classes/User";

@Injectable({
    providedIn: 'root'
})

export class OffreAdminService{

    
    u: User = new User(0,"0","0","0","0");
    private readonly urlWS = this.u.getUrl();
  
    public optionRequete = {
        headers: new HttpHeaders({
            'Acces-Control-Allow-Origin' : '*',
        })
    };

    constructor(private http: HttpClient){}

    public getOffresWS(): Observable<Offre[]> {

        return this.http.get<Offre[]>(this.urlWS+'/offre').pipe(
            map(
                (jsonArray: Object[]) => jsonArray.map(jsonItem => Offre.fromJson(jsonItem))
            )
        );
    }

    public getOffresByIdWS(id: number): Observable<Offre[]> {
        
        return this.http.get<Offre[]>(this.urlWS+'/offre/'+id).pipe(
            map(
                (jsonArray: Object[]) => jsonArray.map(jsonItem => Offre.fromJson(jsonItem)) 
            )
        );
    }

    public deleteOffresByIdWS(id: number): Observable<any> {
        
        return this.http.delete<Offre[]>(this.urlWS+'/offre/'+id);       
    }
}

/*
    
    /*
    public insertOffreWS(newOffre: any): void {
        
        const headers = { 'Acces-Control-Allow-Origin' : '*' };
        this.http.post(this.urlWS+'/offre',newOffre, {headers} ).subscribe(data => {
            this.id_offre = data.id_offre;
        });
    }

    public getOffres(): Offre[]
    {
        var x: Offre[] = [ 
            new Offre(3001, 'Yelow 500', 'Internet', 500, 25, '#322*65#'),
            new Offre(3002, 'Mora 500','Appel',500,5,'#322*59#')
        ];

        return x;
    }
*/
