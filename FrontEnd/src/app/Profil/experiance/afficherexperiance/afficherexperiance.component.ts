import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Experiance} from 'src/app/Models/experiance/experiance';
import{ServiceexperianceService}from 'src/app/Services/Servicesexperiance/serviceexperiance.service';
@Component({
  selector: 'app-afficherexperiance',
  templateUrl: './afficherexperiance.component.html',
  styleUrls: ['./afficherexperiance.component.css']
})
export class AfficherexperianceComponent implements OnInit {
  exp:Experiance;
  test:any
  constructor(public Rest:ServiceexperianceService, public router: Router ) {}

  ngOnInit() {
    this.Listerexperiance();
  }

  Listerexperiance() {
    this.Rest.Getallexperiance().subscribe(data => {
      this.exp = data;
      this.test=this.exp.Datedeb.getFullYear;
      console.log(data);
      console.log(this.test);
      console.log("data");
    }, err => {
      console.log(err);
    })



  }

  PostulerMission(id: number) {
    this.router.navigate(['/Candidature/' + id]);
  }

}
