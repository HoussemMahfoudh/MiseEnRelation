import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import{ServiceDisponibliteService}from'src/app/Services/ServiceDisponiblite/service-disponiblite.service'
import { Disponibilte } from 'src/app/Models/Dispo/disponibilte';

@Component({
  selector: 'app-ajouterdisponibilte',
  templateUrl: './ajouterdisponibilte.component.html',
  styleUrls: ['./ajouterdisponibilte.component.css']
})
export class AjouterdisponibilteComponent implements OnInit {
  disponiblite:Disponibilte;
  @Input() dispo ={ 
    
  heuredeb:null,
    heurefin:null,
    jour:null
    } 
 
    constructor( private Rest:ServiceDisponibliteService, private router: Router, private route: Router) { }

  ngOnInit() {
    this.Listerdispo();
  }

  SaveDispo( d,f,j,x ) {
     this.dispo.heuredeb=d;
    this.dispo.heurefin=f;
    this.dispo.jour=j; 
    this.Rest.Adddispo(this.dispo).subscribe(
      response => {
       console.log('added')
      }
    );
    }

    Listerdispo() {
      this.Rest.Getalldispo().subscribe(data => {
        this.disponiblite = data;
        console.log(data);
      }, err => {
        console.log(err);
      })
    }

    ontestdispo(){
      let day;
      let heure;
      day=this.dispo.jour;
      heure=this.dispo.heuredeb;
    }

///Lundi/////////////////////////////////////////////
    L1 = false;
    L1s = 'Enable';
    L2 = true;
    L2s = 'Enable'; 
    L3 = true;
    L3s = 'Enable'; 
    L4 = false;
    L4s = 'Enable'; 
    L5 = true;
    L5s = 'Enable';  
enableDisableRuleL1() {
    this.L1 = !this.L1;
    this.L1s = this.L1 ? 'Enable' : 'Disable';
}
enableDisableRuleL2() {
  this.L2 = !this.L2;
  this.L2s = this.L2 ? 'Enable' : 'Disable';
}
enableDisableRuleL3() {
  this.L3 = !this.L3;
  this.L3s = this.L3 ? 'Enable' : 'Disable';
}

enableDisableRuleL4() {
  this.L4 = !this.L4;
  this.L4s = this.L4 ? 'Enable' : 'Disable';
}
enableDisableRuleL5() {
  this.L5 = !this.L5;
  this.L5s = this.L5 ? 'Enable' : 'Disable';
}
////////////////////////////////////////////////




///Mardi/////////////////////////////////////////////
M1 = true;
M1s = 'Enable';
M2 = true;
M2s = 'Enable'; 
M3 = true;
M3s = 'Enable'; 
M4 = true;
M4s = 'Enable'; 
M5 = false;
M5s = 'Enable';  
enableDisableRuleM1() {
this.M1 = !this.M1;
this.M1s = this.M1 ? 'Enable' : 'Disable';
}
enableDisableRuleM2() {
this.M2 = !this.M2;
this.M2s = this.M2 ? 'Enable' : 'Disable';
}
enableDisableRuleM3() {
this.M3 = !this.M3;
this.M3s = this.M3 ? 'Enable' : 'Disable';
}

enableDisableRuleM4() {
this.M4 = !this.M4;
this.M4s = this.M4 ? 'Enable' : 'Disable';
}
enableDisableRuleM5() {
this.M5 = !this.M5;
this.M5s = this.M5 ? 'Enable' : 'Disable';
}
////////////////////////////////////////////////





///Mercredi/////////////////////////////////////////////
MM1 = true;
MM1s = 'Enable';
MM2 = true;
MM2s = 'Enable'; 
MM3 = true;
MM3s = 'Enable'; 
MM4 = true;
MM4s = 'Enable'; 
MM5 = true;
MM5s = 'Enable';  
enableDisableRuleMM1() {
this.MM1 = !this.MM1;
this.MM1s = this.MM1 ? 'Enable' : 'Disable';
}
enableDisableRuleMM2() {
this.MM2 = !this.MM2;
this.MM2s = this.MM2 ? 'Enable' : 'Disable';
}
enableDisableRuleMM3() {
this.MM3 = !this.MM3;
this.MM3s = this.MM3 ? 'Enable' : 'Disable';
}

enableDisableRuleMM4() {
this.MM4 = !this.MM4;
this.MM4s = this.MM4 ? 'Enable' : 'Disable';
}
enableDisableRuleMM5() {
this.MM5 = !this.MM5;
this.MM5s = this.MM5 ? 'Enable' : 'Disable';
}
////////////////////////////////////////////////




///Jeudi/////////////////////////////////////////////
J1 = true;
J1s = 'Enable';
J2 = false;
J2s = 'Enable'; 
J3 = true;
J3s = 'Enable'; 
J4 = true;
J4s = 'Enable'; 
J5 = true;
J5s = 'Enable';  
enableDisableRuleJ1() {
this.J1 = !this.J1;
this.J1s = this.J1 ? 'Enable' : 'Disable';
}
enableDisableRuleJ2() {
this.J2 = !this.J2;
this.J2s = this.J2 ? 'Enable' : 'Disable';
}
enableDisableRuleJ3() {
this.J3 = !this.J3;
this.J3s = this.J3 ? 'Enable' : 'Disable';
}

enableDisableRuleJ4() {
this.J4 = !this.J4;
this.J4s = this.J4 ? 'Enable' : 'Disable';
}
enableDisableRuleJ5() {
this.J5 = !this.J5;
this.J5s = this.J5 ? 'Enable' : 'Disable';
}
////////////////////////////////////////////////





///vendredi/////////////////////////////////////////////
V1 = true;
V1s = 'Enable';
V2 = true;
V2s = 'Enable'; 
V3 = true;
V3s = 'Enable'; 
V4 = true;
V4s = 'Enable'; 
V5 = true;
V5s = 'Enable';  
enableDisableRuleV1() {
this.V1 = !this.V1;
this.V1s = this.V1 ? 'Enable' : 'Disable';
}
enableDisableRuleV2() {
this.V2 = !this.V2;
this.V2s = this.V2 ? 'Enable' : 'Disable';
}
enableDisableRuleV3() {
this.V3 = !this.V3;
this.V3s = this.V3 ? 'Enable' : 'Disable';
}

enableDisableRuleV4() {
this.V4 = !this.V4;
this.V4s = this.V4 ? 'Enable' : 'Disable';
}
enableDisableRuleV5() {
this.V5 = !this.V5;
this.V5s = this.V5 ? 'Enable' : 'Disable';
}
////////////////////////////////////////////////





///Samdi/////////////////////////////////////////////
S1 = true;
S1s = 'Enable';
S2 = true;
S2s = 'Enable'; 
S3 = true;
S3s = 'Enable'; 
S4 = true;
S4s = 'Enable'; 
S5 = true;
S5s = 'Enable';  
enableDisableRuleS1() {
this.S1 = !this.S1;
this.S1s = this.S1 ? 'Enable' : 'Disable';
}
enableDisableRuleS2() {
this.S2 = !this.S2;
this.S2s = this.S2 ? 'Enable' : 'Disable';
}
enableDisableRuleS3() {
this.S3 = !this.S3;
this.S3s = this.S3 ? 'Enable' : 'Disable';
}

enableDisableRuleS4() {
this.S4 = !this.S4;
this.S4s = this.S4 ? 'Enable' : 'Disable';
}
enableDisableRuleS5() {
this.S5 = !this.S5;
this.S5s = this.S5 ? 'Enable' : 'Disable';
}
////////////////////////////////////////////////





///Dimanche/////////////////////////////////////////////
D1 = true;
D1s = 'Enable';
D2 = true;
D2s = 'Enable'; 
D3 = true;
D3s = 'Enable'; 
D4 = true;
D4s = 'Enable'; 
D5 = true;
D5s = 'Enable';  
enableDisableRuleD1() {
this.D1 = !this.D1;
this.D1s = this.D1 ? 'Enable' : 'Disable';
}
enableDisableRuleD2() {
this.D2 = !this.D2;
this.D2s = this.D2 ? 'Enable' : 'Disable';
}
enableDisableRuleD3() {
this.D3 = !this.D3;
this.D3s = this.D3 ? 'Enable' : 'Disable';
}

enableDisableRuleD4() {
this.D4 = !this.D4;
this.D4s = this.D4 ? 'Enable' : 'Disable';
}
enableDisableRuleD5() {
this.D5 = !this.D5;
this.D5s = this.D5 ? 'Enable' : 'Disable';
}
////////////////////////////////////////////////



}
