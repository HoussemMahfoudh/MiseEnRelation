import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/Models/categorie/categorie';
import{ServiceCategorieService}from 'src/app/Services/ServiceCategorie/service-categorie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  categ:Categorie;
  term:string="";
  catg:string="";
  loc:string="";
  constructor(public router: Router , public Restcateg:ServiceCategorieService) {}

  ngOnInit() {
    this.Listercategorie();

  }
  Listercategorie() {
    this.Restcateg.Getallcategorie().subscribe(data => {
      this.categ = data;
      console.log(data);
    }, err => {
      console.log(err);
    })



  }

  recherchejobwitcateg(){
    localStorage.setItem('motcle',this.term);
    localStorage.setItem('categ',this.catg);
    localStorage.setItem('loc',this.loc);
    console.log(this.term);
    console.log(this.categ);
    console.log(this.loc);
  }
}
