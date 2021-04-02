export class User{

    id_utilisateur: number;
    nom: String;
    prenom: String;
    numero: String;
    token: String;

    public static fromJson(json: Object): User {

        return new User(
            json['id_utilisateur'],
            json['nom'],
            json['prenom'],
            json['numero'],
            json['token'],
        );
    }

    constructor(id_utilisateur:number,nom:string, prenom: string,numero: string,token:String){
        
        this.id_utilisateur=id_utilisateur;
        this.nom = nom;
        this.prenom = prenom;
        this.numero= numero;
        this.token=token;
    }
}