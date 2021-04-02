export class Client{
    
    id_utilisateur: number;
    nom: String;
    prenom: String;
    date_naissance: String;
    numero: String;

    public static fromJson(json: Object): Client {

        return new Client(
            json['id_utilisateur'],
            json['nom'],
            json['prenom'],
            json['date_naissance'],
            json['numero'],
        );
    }

    constructor(id_utilisateur:number,nom:String,prenom:String,date_naissance:String,numero:String){

        this.id_utilisateur = id_utilisateur;
        this.nom = nom;
        this.prenom = prenom;
        this.date_naissance = date_naissance;
        this.numero = numero;
    }
}