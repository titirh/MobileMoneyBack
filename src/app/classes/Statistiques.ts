export class Statistiques {
    
    numero: string;
    sommeMoney: number;
    sommeCredit: number;

    public static fromJson(json: Object): Statistiques {
        return new Statistiques(
            json['numero'],
            json['sommeMoney'],
            json['sommeCredit'],
        );
    }

    constructor(numero: string,sommeMoney: number,sommeCredit: number){
        
        this.numero = numero;
        this.sommeMoney = sommeMoney;
        this.sommeCredit = sommeCredit;
    }
}