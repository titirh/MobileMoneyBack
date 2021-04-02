import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { Utilisateur } from '../classes/Utilisateur';
import { first } from 'rxjs/operators';
import { User } from '../classes/User';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ns-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public modelLogin: Utilisateur = new Utilisateur(0,'','','');
  public modelUser: User = new User(0,'','','','');
  public session: number;

  //-------------------------

  constructor(
    private loginService: LoginService,
    private router: Router,
    private _Activatedroute: ActivatedRoute, 
  ) { }

  ngOnInit(): void {
    
    const currentUser = this.loginService.currentUserValue;
    
    if(currentUser){
      console.log("Utilisateur s'est DEconnecte");
      this.loginService.logout();
    }
  }

  //-------------------------

  SubmitLogin(){

    this.loginService.login(this.modelLogin)
    .pipe(first())
    .subscribe(
      data => {
        console.log("Utilisateur s'est connecte");
        this.router.navigate(['/offres']);
      }
    )
  }

}
