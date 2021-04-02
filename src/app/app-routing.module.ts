import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { NavigationOffreComponent } from './navigation-offre/navigation-offre.component';
import { NewOffreAdminComponent } from './new-offre-admin/new-offre-admin.component';
import { OffreAdminComponent } from './offre-admin/offre-admin.component';
import { StatsOffresComponent } from './stats-offres/stats-offres.component';
import { TransactionsOffresComponent } from './transactions-offres/transactions-offres.component';
import { UpdateOffreAdminComponent } from './update-offre-admin/update-offre-admin.component';

const routes: Routes = [
    
    { 
        path: 'login' ,
        component: LoginComponent, 
    },

    { 
        path: 'listeOffres' ,
        component: OffreAdminComponent, 
        canActivate: [AuthGuard]
    },

    { 
        path: 'addOffre' , 
        component: NewOffreAdminComponent,
        canActivate: [AuthGuard]
    },

    { 
        path: 'updateOffre/:idUpdate' ,
        component: UpdateOffreAdminComponent,  
        canActivate: [AuthGuard]
    },
    
    {
        path: 'statistiques',
        component: StatsOffresComponent,
        canActivate: [AuthGuard]
    },

    {
        path: 'transactions',
        component: TransactionsOffresComponent,
        canActivate: [AuthGuard]
    },

    { 
        path: '',
        redirectTo: '/offres', 
        pathMatch: 'full'
    },
    
    { 
        path: '**',
        component: OffreAdminComponent, 
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})

export class AppRoutingModule { }
