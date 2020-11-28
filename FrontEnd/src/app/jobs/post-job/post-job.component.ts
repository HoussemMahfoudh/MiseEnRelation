import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Mission } from 'src/app/Models/Jobs/mission';
import{ServiceJobsService}from 'src/app/Services/ServiceJobs/service-jobs.service';
import{ServiceCategorieService}from 'src/app/Services/ServiceCategorie/service-categorie.service';
import{ServicetypetravailService}from 'src/app/Services/ServiceCategorie/servicetypetravail.service';
import { Categorie } from 'src/app/Models/categorie/categorie';
import Stepper from 'bs-stepper';
import { Typetravail } from 'src/app/Models/typetravail/typetravail';
import { TokenStorageService } from 'src/app/Auth/_services/token-storage.service';

@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
  missions: any;
  categ:Categorie;
  typetravail:Typetravail[];
  selectedtypetravail:Typetravail[];
  cat
  name = 'Angular';
  private stepper: Stepper;

  next() {
    this.stepper.next();
  }
  //unemission:Mission;
 @Input() unemission ={ 
    titreMission: null,
    competances: null,
    description: null,
    vehicule: null,
    accessoires: null,
    budget:null,
    localisation:null,
    poste:null,
    entreprise:null
   } 

  constructor( private Rest: ServiceJobsService,private Resttype: ServicetypetravailService, private router: ActivatedRoute, private route: Router ,private Restcateg:ServiceCategorieService, private tokenStorage:TokenStorageService) { }

  ngOnInit() {
    if(this.tokenStorage.getUser()!=null){
      this.Listercategorie();
      this.Listertypetrvail();
      this.stepper = new Stepper(document.querySelector('#stepper1'), { linear: false,animation: true  })
    }else{
      this.route.navigate(['login']);
    }
    
  }
  SaveMission() {
    
    this.Rest.AddMission(this.unemission,this.cat).subscribe(
      response => {
        this.route.navigate(['/Home']);
      }
    );
    }
    Listercategorie() {
      this.Restcateg.Getallcategorie().subscribe(data => {
        this.categ = data;
        console.log(data);
      }, err => {
        console.log(err);
      })
    }

    onclickcateg(test){
      this.cat=test;
    }

/*     Listertypetrvail() {
      this.Resttype.GetalltypeTravail().subscribe(data => {
        this.typetravail = data;
        console.log(data);
      }, err => {
        console.log(err);
      })
    }
 */


    
Listertypetrvail() {
    this.Resttype.GetalltypeTravail().subscribe((data: any) => {
      this.typetravail = data;
      }
    , err => { console.log(err); }
    )
 
}
/* selecttypetravail(){
  this.selectedtypetravail=this.typetravail.filter(x=>x.)

} */


    

}