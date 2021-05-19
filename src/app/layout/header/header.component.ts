
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import {ToastrService} from "ngx-toastr";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email = '';

  constructor( 

  private auth:AuthService,
  private router :Router,
  private toastr : ToastrService   
   
  ) {

    // even before the mount of the component ngoninit se bhi pehle
    
    auth.getUser().subscribe(
      (user) =>{
        this.email = user?.email!;
      },
      
    )  

   }

  ngOnInit(): void {
  }

  async handleSignOut(){  //we can do it by subscriber method also

     try {
       const res = await this.auth.signOut();
       this.router.navigateByUrl('/signin');
       this.toastr.info("Login Again to continue")
       this.email = '';
     }
     catch(error)
     {
       this.toastr.error('something went wrong!')
     }
  }

}
