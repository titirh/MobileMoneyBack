import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NavigationOffreComponent } from './navigation-offre/navigation-offre.component';
import { OffreAdminComponent } from './offre-admin/offre-admin.component';
import { UpdateOffreAdminComponent } from './update-offre-admin/update-offre-admin.component'
import { NewOffreAdminComponent } from './new-offre-admin/new-offre-admin.component';
import { LoginComponent } from './login/login.component';
import { JwtInterceptor } from './helpers/Jwt.interceptor';
import { ErrorInterceptor } from './helpers/error-interceptor';
import { StatsOffresComponent } from './stats-offres/stats-offres.component';
import { TransactionsOffresComponent } from './transactions-offres/transactions-offres.component';
import { ProfilComponent } from './profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    OffreAdminComponent,
    NewOffreAdminComponent,
    UpdateOffreAdminComponent,
    NavigationComponent,
    NavigationOffreComponent,
    LoginComponent,
    StatsOffresComponent,
    TransactionsOffresComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    //{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
    //{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [NavigationComponent]
})
export class AppModule { }
