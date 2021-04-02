import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'ns-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public session = 'CONNEXION';
  public url = '/login';

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  
    const currentUser = this.loginService.currentUserValue;
    if(currentUser){
      console.log("UN UTILISATEUR EST CONNECTE");
      this.session = 'DECONNEXION';
      this.url = '/login';
      //window.location.reload();
    }
  }

}
