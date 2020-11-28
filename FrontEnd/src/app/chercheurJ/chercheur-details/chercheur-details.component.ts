import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Stepper from 'bs-stepper';
import { TokenStorageService } from 'src/app/Auth/_services/token-storage.service';
import { User } from 'src/app/Models/User/user';
import { ServiceprofilService } from 'src/app/Services/serviceProfil/serviceprofil.service';

@Component({
  selector: 'app-chercheur-details',
  templateUrl: './chercheur-details.component.html',
  styleUrls: ['./chercheur-details.component.css']
})
export class ChercheurDetailsComponent implements OnInit {

  VE:User;
  id:number;
  currentRate:number;
  addedrate:number;
  public toggleButton: boolean = true;
  retrievedImage: any;
  base64Data: any;
  exten:any=".jpeg";
  retrieveResonse: any;
  imageName: any;
  profileImage : any;

  selectedFile: File;
  message: string;
  
  
  public show:boolean = false;
   public buttonName:any = ' Parametres-avancé';
   name = 'Angular';
   private stepper: Stepper;
   user : User;
 
   next() {
     this.stepper.next();
   }

  constructor(private activatedRoute:ActivatedRoute, private serviceProfile:ServiceprofilService,
    private httpClient: HttpClient, private tokenStorage:TokenStorageService, private router:Router ) { }
  
  ngOnInit() {
    if(this.tokenStorage.getUser != null){
      this.getDetailsProfile();
      this.stepper = new Stepper(document.querySelector('#stepper1'), {
      linear: false,
      animation: true  })
      this.getImage();
    }else{
      this.router.navigate(['login']);
    }
    
  }

  getImage() {
    this.httpClient.get('http://localhost:8080/image/get/' + this.VE.imageModel.id).subscribe(
      res => {
      this.retrieveResonse = res;
      this.base64Data = this.retrieveResonse.picByte;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    });
  }

  getDetailsProfile(){
    this.id = this.activatedRoute.snapshot.params["id"];
    this.serviceProfile.getprofil(this.id).subscribe(data=>{
      this.VE = data;
    })
  }

  calcrating(){
    console.log(this.addedrate);
    if(this.VE.nbpersonnerat==0){
      this.VE.ratingnote=this.addedrate;
      this.VE.nbpersonnerat=this.VE.nbpersonnerat+1;
    }
    else {
      this.VE.ratingnote=Math.round(this.addedrate+this.VE.ratingnote)/(this.VE.nbpersonnerat+1);
      this.VE.nbpersonnerat=this.VE.nbpersonnerat+1;
    }
    console.log(this.VE.ratingnote)
    this.modiprofilinfos(this.VE);
}

modiprofilinfos(value:any){
  let user:User;
  user = value;
  user.id=this.VE.id;
  if(this.profileImage!=null){
    user.imageModel = this.profileImage;
  }
  this.serviceProfile.Updateprofil(user.id,user).subscribe(data=>{
    this.VE = data;
  })
}
  
  toggle() {
    this.show = !this.show;
  
    // CHANGE THE NAME OF THE BUTTON.
    if(this.show)  
      this.buttonName = "Parametres-avancé";
    else
      this.buttonName =  "Parametres-avancé";
  }

  enable(){
    this.toggleButton = false
 }

 disable(){
    this.toggleButton = true
 }

}
