import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Mission } from 'src/app/Models/Jobs/mission';
import{ServiceJobsService}from 'src/app/Services/ServiceJobs/service-jobs.service';
import{ServiceCategorieService}from 'src/app/Services/ServiceCategorie/service-categorie.service';
import { filter } from 'rxjs/operators';

import { from } from 'rxjs';
import { Categorie } from 'src/app/Models/categorie/categorie';
import { TokenStorageService } from 'src/app/Auth/_services/token-storage.service';
@Component({
  selector: 'app-listjobs',
  templateUrl: './listjobs.component.html',
  styleUrls: ['./listjobs.component.css']
})
export class ListjobsComponent implements OnInit {
  term:string;
  catg:string="";
  loc:string="";
  ListMission: Mission[];
  standardlistmission:Mission[];
  categ:Categorie;
  constructor(public Rest:ServiceJobsService, public router: Router , public Restcateg:ServiceCategorieService, private tokenService:TokenStorageService) {}
  

  ngOnInit() {
    this.term=localStorage.getItem('motcle');
    this.catg=localStorage.getItem('categ');
    this.loc=localStorage.getItem('loc');
    console.log(this.loc);
    console.log(this.catg);
    console.log(this.term);
    this.ListerMission();
    this.ListerMissionfiltred();
    this.Listercategorie();

    setTimeout(() => {
      console.log('sleep');
      this.filtrerterm();
      this.Listercategorie();
      this.filtrerwithloc();
      // And any other code that should run only after 5s
    }, 2000);


  }
  ListerMissionfiltred() {
    this.Rest.GetallMsiion().subscribe((data: any) => {
      this.standardlistmission = data;
      console.log(this.ListMission);
    }
    , err => { console.log(err); }
    )

  } 

  Listercategorie() {
    this.Restcateg.Getallcategorie().subscribe(data => {
      this.categ = data;
      console.log(data);
      
    }, err => {
      console.log(err);
    })



  }

  ListerMission() {
    this.Rest.GetallMsiion().subscribe((data: any) => {
      this.ListMission = data;
      console.log(this.ListMission);
    }
    , err => { console.log(err); }
    )
   
  }
/*   filtrerterm() {
    this.ListMission = this.ListMission.filter(missi =>{
      return missi.titreMission.toLocaleLowerCase().match("test");
  } );
} */
  

   filtrerterm() {
    console.log("Hello !");
    if(this.term!=""){
            this.ListMission = this.ListMission.filter(missi =>{
        return missi.titreMission.toLocaleLowerCase().match(this.term.toLocaleLowerCase());
    } );
    console.log("tested");
    }
    else if(this.term==""){
      this.ListMission=this.standardlistmission;
       if(this.catg!=""){
     this.filtrerwithcateg();
      console.log(this.catg);
    } 
    }
  }
 
  filtrerwithcateg() {
    console.log("Hello !");
    console.log(this.catg);
    if(this.catg!=""){
      this.ListMission=this.standardlistmission;
      this.ListMission=this.ListMission.filter(missi =>{
        return missi.categorie.nomCateg.toLocaleLowerCase().match(this.catg.toLocaleLowerCase());
    } );
    console.log(this.ListMission);
  }
    else if(this.catg==""){
      this.ListMission=this.standardlistmission;
    }
  }  

  filtrerwithloc() {
    //console.log("Hello !");
    if(this.loc!=""){
      console.log(this.loc);
     this.ListMission=this.standardlistmission;
    
      this.ListMission = this.ListMission.filter(missi =>{
        return missi.localisation.toLocaleLowerCase().match(this.loc.toLocaleLowerCase());
    } );
    console.log(this.ListMission);
    }
    else if(this.loc==""){
      this.ListMission=this.standardlistmission;
    }
  } 
  

PostulerMission(id: number) {
  if(this.tokenService.getUser() != null){
    this.router.navigate(['/Candidature/' + id]);
  }else{
    this.router.navigate(['login']);
  }
  
}

}
