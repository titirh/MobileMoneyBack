export class Offre {
    
    id_offre: number;
    nom: string;
    type: string;
    montant: number;
    valeur: number;
    code: string;

    public static fromJson(json: Object): Offre {
        return new Offre(
            json['id_offre'],
            json['nom'],
            json['type'],
            json['montant'],
            json['valeur'],
            json['code'],
        );
    }

    constructor(id: number,nom: string,type: string,montant: number,valeur: number,code: string){
        
        this.id_offre = id;
        this.nom = nom;
        this.type = type;
        this.montant = montant;
        this.valeur = valeur;
        this.code = code;
    }
}