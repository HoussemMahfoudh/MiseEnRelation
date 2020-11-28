import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './index/home/home.component';
import { NavBarComponent } from './index/nav-bar/nav-bar.component';
import { FooterComponent } from './index/footer/footer.component';
import { ListjobsComponent } from './jobs/listjobs/listjobs.component';
import { AddCandidatureComponent } from './jobs/candidature/add-candidature/add-candidature.component';
import { PostJobComponent } from './Jobs/post-job/post-job.component';
import { AjouterexperianceComponent } from './Profil/experiance/ajouterexperiance/ajouterexperiance.component';
import { AjouterdisponibilteComponent } from './Profil/Disponiblite/ajouterdisponibilte/ajouterdisponibilte.component';
import { IndexprofilComponent } from './Profil/profil/indexprofil/indexprofil.component';
import { AfficherexperianceComponent } from './Profil/experiance/afficherexperiance/afficherexperiance.component';
import { AjoutpreferanceComponent } from './Profil/Preferance/ajoutpreferance/ajoutpreferance.component';
import { RatingComponent } from './Profil/Rating/rating/rating.component';
import { RegistrationchercheurJComponent } from './Registration/registrationchercheur-j/registrationchercheur-j.component';
import { ListchercheurJComponent } from './chercheurJ/listchercheur-j/listchercheur-j.component';
import { AfficherinfopComponent } from './Profil/profil/afficherinfop/afficherinfop.component';
import { RegisterComponent } from './Auth/register/register.component';
import { LoginComponent } from './Auth/login/login.component';
import { LoadingComponent } from './Auth/_helpers/Loading/loading/loading.component';
import { ChercheurDetailsComponent } from './chercheurJ/chercheur-details/chercheur-details.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'ListJobs', component: ListjobsComponent },
  { path: 'postdispo', component: AjouterdisponibilteComponent },
  { path: 'PostJob', component: PostJobComponent},
  { path: 'profil', component: IndexprofilComponent},
  { path: 'postexperiance', component: AjouterexperianceComponent},
  { path: 'Listexper', component: AfficherexperianceComponent},
  { path: 'preferance', component: AjoutpreferanceComponent},
  { path: 'Registration', component: RegistrationchercheurJComponent},
  { path: 'afficherinfo', component: AfficherinfopComponent},
  { path: 'Listchercheurj', component: ListchercheurJComponent},
  { path: 'chercheur/details/:id', component: ChercheurDetailsComponent},
  { path: 'Rating', component: RatingComponent},
  { path: 'Candidature/:id', component: AddCandidatureComponent },

  {path: '', redirectTo: 'Home', pathMatch: 'full'},

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loading', component: LoadingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
