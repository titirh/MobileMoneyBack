export class Appel {
    
    id_appel: number;
    numero_entrant: string;
    numero_sortant: string;
    dureeAppel: number;
    date_appel: string;

    public static fromJson(json: Object): Appel {
        return new Appel(
            json['id_appel'],
            json['numero_entrant'],
            json['numero_sortant'],
            json['duree'],
            json['date_appel'],
        );
    }

    constructor(id: number,numero_entrant: string,numero_sortant: string,duree: number,date_appel: string){
        
        this.id_appel = id;
        this.numero_entrant = numero_entrant;
        this.numero_sortant = numero_sortant;
        this.dureeAppel = duree;
        this.date_appel = date_appel;
    }
}