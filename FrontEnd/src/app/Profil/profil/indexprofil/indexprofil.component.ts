import { Component, OnInit,Input } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import{ServiceprofilService}from 'src/app/Services/serviceProfil/serviceprofil.service';
import { Chercheurj } from 'src/app/Models/chercheur/chercheurj';
import { HttpClient, HttpEventType } from '@angular/common/http';
import Stepper from 'bs-stepper';
import { TokenStorageService } from 'src/app/Auth/_services/token-storage.service';
import { User } from 'src/app/Models/User/user';

@Component({
  selector: 'app-indexprofil',
  templateUrl: './indexprofil.component.html',
  
  styleUrls: ['./indexprofil.component.css'],
  styles: [`
  .star {
    font-size: 3rem;
    color: #b0c4de;
  }
  .filled {
    color: #1e90ff;
  }
  .bad {
    color: #deb0b0;
  }
  .filled.bad {
    color: #ff1e1e;
  }
`]
})
export class IndexprofilComponent implements OnInit {
  id:number;
  VE: User;
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
    constructor(private restapi:ServiceprofilService,public router: Router, private httpClient: HttpClient,
      private tokenStorage:TokenStorageService) {}


    ngOnInit() {
      this.user = this.tokenStorage.getUser();
      this.getprofilinfos(this.user.id);
      this.stepper = new Stepper(document.querySelector('#stepper1'), {
        linear: false,
        animation: true  })
    }


  getprofilinfos(id:number){
    this.restapi.getprofil(id).subscribe((data: any) => {
        this.VE = data;
        console.log("VE",this.VE);
        this.currentRate=this.VE.ratingnote;
        this.imageName=this.VE.name.concat(this.exten.toString());
        this.retrievedImage = 'data:image/jpeg;base64,' +this.VE.imageModel.picByte;
      },err => { console.log(err);
    }) 
  }
  
  modiprofilinfos(value:any){
    let user:User;
    user = value;
    user.id=this.VE.id;
    if(this.profileImage!=null){
      user.imageModel = this.profileImage;
    }
    this.restapi.Updateprofil(user.id,user).subscribe(data=>{
      this.VE = data;
      console.log(this.VE)
      this.router.navigateByUrl('profil');
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

  public onFileChanged(event) {
    this.selectedFile = event.target.files[0];

    console.log(this.selectedFile);
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
    this.httpClient.post('http://localhost:8090/image/upload', uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        console.log(response)
        this.profileImage = response;
        this.profileImage = this.profileImage.body;
        console.log(this.profileImage)
      }
      );
  }

}
  
  