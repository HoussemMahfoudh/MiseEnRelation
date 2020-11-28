import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { TokenStorageService } from 'src/app/Auth/_services/token-storage.service';
import { Candidature } from 'src/app/Models/candidature/candidature';
import{ServiceCandidatureService}from'src/app/Services/ServiceCandidatire/service-candidature.service'

@Component({
  selector: 'app-add-candidature',
  templateUrl: './add-candidature.component.html',
  styleUrls: ['./add-candidature.component.css']
})
export class AddCandidatureComponent implements OnInit {
  getedid:number=this.activeRoute.snapshot.params.id
  Candidature: any;
  @Input() Candidat ={ 
    budgetDemande: null,
    descCompetances: null,
    mission:null,
  
    }

  constructor( private Rest:ServiceCandidatureService, private router: Router, private route: Router, private activeRoute:ActivatedRoute, private tokenStorage:TokenStorageService) { }

  ngOnInit(){
    if(this.tokenStorage.getUser != null){
      this.router.navigate(['login']);
    }
  }

  SaveCandiature() {
    this.Rest.Addcandidature(this.Candidat,this.getedid).subscribe(
      response => {
        this.route.navigate(['/Home']);
      }
    );
    }
  }
