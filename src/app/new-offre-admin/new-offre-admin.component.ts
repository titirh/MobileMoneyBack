import { Component, OnInit } from '@angular/core';
import { Offre } from '../classes/offre';
import { NewOffreAdminService } from './new-offre-admin.service';

@Component({
  selector: 'ns-new-offre-admin',
  templateUrl: './new-offre-admin.component.html',
  styleUrls: ['./new-offre-admin.component.css']
})
export class NewOffreAdminComponent implements OnInit {

  //---------------------------

  title = "AJOUTER UN NOUVEL OFFRE";

  modelAdd: Offre = {   
    id_offre : 3000,
    nom : '',
    type: '',
    montant: 0,
    valeur: 0,
    code: ''
  };
  
  public errorMessage: string;

  //---------------------------
  
  constructor(private newOffreAdminService : NewOffreAdminService){}

  ngOnInit(): void {
  }

  //---------------------------
  
  onSubmitAdd(){
    console.log(this.modelAdd);
    this.newOffreAdminService.createOffreWS(this.modelAdd).subscribe((reponse: Offre) => console.log(reponse));
    
    setTimeout(() => {
      window.location.reload();
    },200); 
  }
}
