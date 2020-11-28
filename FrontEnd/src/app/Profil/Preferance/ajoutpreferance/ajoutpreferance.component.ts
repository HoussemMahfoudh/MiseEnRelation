import { Component, OnInit,Input } from '@angular/core';
import{ServicePreferanceService}from'src/app/Services/servicesPreferance/service-preferance.service'
import { Preferance } from 'src/app/Models/preferance/preferance';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-ajoutpreferance',
  templateUrl: './ajoutpreferance.component.html',
  styleUrls: ['./ajoutpreferance.component.css']
})
export class AjoutpreferanceComponent implements OnInit {
  togglehotel = true;
  statushotel = 'Enable'; 
  togglevente = true;
  statusvente = 'Enable'; 
  togglelogis = true;
  statuslogis = 'Enable'; 
  toggleeven = true;
  statusenven = 'Enable'; 
  toggleadmin = true;
  statusadmin = 'Enable'; 
  prefer:Preferance;

  @Input() preferance ={ 
    
    distancehomeloctravail: null,
    tempsHS: null,
    disponibliteDerM: null,
    typeContartPrefere: null,
    
      } 

  constructor( private Rest:ServicePreferanceService, private router: Router, private route: Router) { }

  ngOnInit() {
  }

  Saveprefrance( ) { 
   this.Rest.Addpreferance(this.preferance).subscribe(
     response => {
      console.log('added')
     }
   );
   }

enableDisableRulehotel(job) {
  this.togglehotel = !this.togglehotel;
  this.statushotel = this.togglehotel ? 'Enable' : 'Disable';
}
enableDisableRulevente(job) {
this.togglevente = !this.togglevente;
this.statusvente = this.togglevente ? 'Enable' : 'Disable';
}
enableDisableRulelogis(job) {
this.togglelogis = !this.togglelogis;
this.statuslogis = this.togglelogis ? 'Enable' : 'Disable';
}
enableDisableRuleeven(job) {
this.toggleeven = !this.toggleeven;
this.statusenven = this.toggleeven ? 'Enable' : 'Disable';
}
enableDisableRuleadmin(job) {
this.toggleadmin = !this.toggleadmin;
this.statusadmin = this.toggleadmin ? 'Enable' : 'Disable';
}

}
