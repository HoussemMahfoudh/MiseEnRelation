import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/Auth/_services/token-storage.service';
import { User } from 'src/app/Models/User/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isLoggedIn = false;
  roles:string [] = [];
  user:User;
  isAdmin:boolean = false;
  isUser:boolean = false;
  constructor(private tokenStorage: TokenStorageService, private router:Router) { }

  ngOnInit() {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.user = this.tokenStorage.getUser();
      this.roles = this.tokenStorage.getUser().roles;
      if (this.roles.indexOf("ROLE_USER")!=-1){
        this.isUser = true;
      }else if(this.roles.indexOf("ROLE_ADMIN")!=-1){
        this.isAdmin = true;
      }
      console.log(this.roles)
    }
  }

  disconnect(){
    this.tokenStorage.signOut();
    this.router.navigate(['Home']).then(() => {
      window.location.reload();
    });
  }

  ajouterMission(){
    if(this.tokenStorage.getUser() != null){
      this.router.navigate(['PostJob']);
    }else{
      this.router.navigate(['login']);
    }
  }

}
