import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './index/home/home.component';
import { NavBarComponent } from './index/nav-bar/nav-bar.component';
import { FooterComponent } from './index/footer/footer.component';
import { ListjobsComponent } from './jobs/listjobs/listjobs.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AddCandidatureComponent } from './jobs/candidature/add-candidature/add-candidature.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostJobComponent } from './Jobs/post-job/post-job.component';
import { AjouterexperianceComponent } from './Profil/experiance/ajouterexperiance/ajouterexperiance.component';
import { AjouterdisponibilteComponent } from './Profil/Disponiblite/ajouterdisponibilte/ajouterdisponibilte.component';
import { IndexprofilComponent } from './Profil/profil/indexprofil/indexprofil.component';
import { AfficherexperianceComponent } from './Profil/experiance/afficherexperiance/afficherexperiance.component';
import { AjoutpreferanceComponent } from './Profil/Preferance/ajoutpreferance/ajoutpreferance.component';
import { RatingComponent } from './Profil/Rating/rating/rating.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationchercheurJComponent } from './Registration/registrationchercheur-j/registrationchercheur-j.component';
import { ListchercheurJComponent } from './chercheurJ/listchercheur-j/listchercheur-j.component';
import { AfficherinfopComponent } from './Profil/profil/afficherinfop/afficherinfop.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { authInterceptorProviders } from './Auth/_helpers/auth.interceptor';
import { LoadingComponent } from './Auth/_helpers/Loading/loading/loading.component';
import { ChercheurDetailsComponent } from './chercheurJ/chercheur-details/chercheur-details.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    ListjobsComponent,
    AddCandidatureComponent,
    PostJobComponent,
    AjouterexperianceComponent,
    AjouterdisponibilteComponent,
    IndexprofilComponent,
    AfficherexperianceComponent,
    AjoutpreferanceComponent,
    RatingComponent,
    RegistrationchercheurJComponent,
    ListchercheurJComponent,
    AfficherinfopComponent,
    LoginComponent,
    RegisterComponent,
    LoadingComponent,
    ChercheurDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    AppRoutingModule,
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
