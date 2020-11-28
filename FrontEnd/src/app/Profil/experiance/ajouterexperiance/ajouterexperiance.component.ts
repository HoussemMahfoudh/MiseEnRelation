import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Experiance } from 'src/app/Models/experiance/experiance';
import{ServiceexperianceService}from 'src/app/Services/Servicesexperiance/serviceexperiance.service';
import{ServiceCategorieService}from 'src/app/Services/ServiceCategorie/service-categorie.service';
import { Categorie } from 'src/app/Models/categorie/categorie';

@Component({
  selector: 'app-ajouterexperiance',
  templateUrl: './ajouterexperiance.component.html',
  styleUrls: ['./ajouterexperiance.component.css']
})
export class AjouterexperianceComponent implements OnInit {
  experiance: any;
  categ:Categorie;
  //unemission:Mission;
 @Input() exper ={ 
  nomentreprise: null,
  domaine: null,
  posteoccupe:null,
  datedeb: null,
  dateFin: null,
  competances: null,
  description: null,
} 

  constructor( private Rest: ServiceexperianceService, private router: ActivatedRoute, private route: Router ,private Restcateg:ServiceCategorieService) { }

  ngOnInit() {
    this.Listercategorie();
  }
  Saveexper() {
    
    this.Rest.Addexperiance(this.exper).subscribe(
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

}