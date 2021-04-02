import { Component, OnInit } from '@angular/core';
import { Offre } from '../classes/offre';
import { UpdateOffreAdminService } from './update-offre-admin.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { OffreAdminService } from '../offre-admin/offre-admin.service';

@Component({
  selector: 'ns-update-offre-admin',
  templateUrl: './update-offre-admin.component.html',
  styleUrls: ['./update-offre-admin.component.css']
})
export class UpdateOffreAdminComponent implements OnInit {

  //---------------------------

  title = "METTRE A JOUR L'OFFRE";

  public modelToUpdate: Offre[]  = [
    new Offre(0, 'null', 'null', 0, 0, 'null')
  ];
  
  public modelUpdated: Offre =  new Offre(null, '', '', null, null, '');
  public errorMessage: string;

  //---------------------------

  constructor(
          private updateOffreAdminService : UpdateOffreAdminService,
          private _Activatedroute: ActivatedRoute, 
          private offreAdminService: OffreAdminService
  ){}

  ngOnInit(): void {

    this.modelToUpdate[0].id_offre =+ this._Activatedroute.snapshot.paramMap.get("idUpdate")
    this.offreAdminService.getOffresByIdWS(this.modelToUpdate[0].id_offre).subscribe({
      next: offre => {
        this.modelToUpdate = offre;
        console.log(this.modelToUpdate);
      },
      error: err => this.errorMessage = err
    });

  }

  //---------------------------

  onSubmitUpdate(){
    try{
      console.log(this.modelUpdated);
      this.modelUpdated.id_offre = this.modelToUpdate[0].id_offre;
      this.updateOffreAdminService.updateOffreWS(this.modelUpdated).subscribe((reponse: Offre) => console.log(reponse));
    }
    catch(Exception){
      
    }
    finally{
      setTimeout(() => {
        window.location.reload();
      },200); 
    }
  }
}
