export class Utilisateur{

    id_utilisateur: number;
    token: String;
    username: String;
    password: String;

    public static fromJson(json: Object): Utilisateur {

        return new Utilisateur(
            json['id_utilisateur'],
            json['token'],
            json['username'],
            json['password'],
        );
    }

    constructor(id_utilisateur:number,token:String,username:String,password:String){
        
        this.id_utilisateur=id_utilisateur;
        this.token=token;
        this.username=username;
        this.password=password;
    }
}