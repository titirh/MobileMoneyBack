import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MouvementMoney } from '../classes/MouvementMoney';
import { TransactionsOffresService } from './transaction-offre.service';

@Component({
  selector: 'ns-transactions-offres',
  templateUrl: './transactions-offres.component.html',
  styleUrls: ['./transactions-offres.component.css']
})
export class TransactionsOffresComponent implements OnInit {

  public title = 'TRANSACTIONS EN ATTENTE';

  mouvementsMoney: MouvementMoney[];
  public errorMessage: string;
  private router: Router;

  //------------------------------------

  constructor(private transactionOffreService: TransactionsOffresService) { }

  ngOnInit(): void {

    this.transactionOffreService.getMouvementMoneysWS().subscribe({
      next: mouvement => {
        this.mouvementsMoney = mouvement;
        console.log(this.mouvementsMoney);
      },
      error: err => this.errorMessage = err
    });
  }

  //------------------------------------

  validerMouvement(id: number,id1: number,t: string,m: number,d: string,s: string){
    
    var model: MouvementMoney = new MouvementMoney(id,id1,t,m,d,s);
    this.transactionOffreService.valider(model).subscribe((reponse: any) => console.log(reponse));

    //this.router.navigate(['transactions']);

    
    setTimeout(() => {
      window.location.reload();
    },50); 
  }

  rejeterMouvement(id: number,id1: number,t: string,m: number,d: string,s: string){
    
    var model: MouvementMoney = new MouvementMoney(id,id1,t,m,d,s);
    this.transactionOffreService.rejeter(model).subscribe((reponse: any) => console.log(reponse));
    
    
    setTimeout(() => {
      window.location.reload();
    },50); 
  }
}
