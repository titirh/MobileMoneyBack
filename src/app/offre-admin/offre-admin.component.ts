import { Component, Input, OnInit } from '@angular/core';
import { Offre } from '../classes/offre';
import { OffreAdminService } from './offre-admin.service';

@Component({
  selector: 'ns-offre-admin',
  templateUrl: './offre-admin.component.html',
  styleUrls: ['./offre-admin.component.css'],
})
export class OffreAdminComponent implements OnInit {

  title = "LISTE DES OFFRES";

  public listOffres: Offre[];
  public rechercheOffre: Offre[];
  public errorMessage: string;

  modelDelete: any = {
    id: ''
  };

  //------------------------------------
  
  constructor(private offreAdminService : OffreAdminService){}

  ngOnInit(): void {
    
    this.offreAdminService.getOffresWS().subscribe({
      next: offre => {
        this.listOffres = offre;
        console.log(this.listOffres);
      },
      error: err => this.errorMessage = err
    });

  }
  
  //------------------------------------

  deleteOffreById(id: any){
    
    console.log("Delete id="+id);
    this.offreAdminService.deleteOffresByIdWS(id).subscribe((reponse: Offre) => console.log(reponse));
    
    setTimeout(() => {
      window.location.reload();
    },100); 
  }
}

