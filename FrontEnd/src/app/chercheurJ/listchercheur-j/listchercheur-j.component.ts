import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{ServiceChercheurJService}from 'src/app/Services/service-chercheur-j.service';
import { Chercheurj } from 'src/app/Models/chercheur/chercheurj';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { User } from 'src/app/Models/User/user';
import { TokenStorageService } from 'src/app/Auth/_services/token-storage.service';

@Component({
  selector: 'app-listchercheur-j',
  templateUrl: './listchercheur-j.component.html',
  styleUrls: ['./listchercheur-j.component.css']
})
export class ListchercheurJComponent implements OnInit {

  constructor(public Rest:ServiceChercheurJService, public router: Router,private httpClient: HttpClient, private tokenStorage:TokenStorageService ) {}
  chercheur:User[];
  retrievedImage: any;
  exten:any=".jpeg"
  base64Data: any;
  listimage:any[];
  retrieveResonse: any;
  imageName: any;

  ngOnInit() {
    if(this.tokenStorage.getUser != null){
      this.Listerchercheurj();
    }else{
      this.router.navigate(['login']);
    }
    
  }

  Listerchercheurj() {
    this.Rest.getallchercheurj().subscribe((data: any) => {
      this.chercheur = data;
      console.log(this.chercheur);
      for (let i = 0; i < this.chercheur.length; i++) {
        this.chercheur[i].imageModel.picByte = 'data:image/jpeg;base64,'+this.chercheur[i].imageModel.picByte;
      }
    },err => { console.log(err); });
  }

  detailsChercheur(id:number){
    this.router.navigateByUrl("chercheur/details/"+id);
  }
}
