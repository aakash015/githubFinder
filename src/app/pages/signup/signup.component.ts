import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private auth:AuthService,
    private toastr:ToastrService,
    private router:Router,

  ) { }

  ngOnInit(): void {
  }


   onSubmit(f:NgForm){
     const {email,userPassword} = f.form.value
    
      this.auth.signUp(email,userPassword)
      .then(
        (res)=>{
          this.router.navigateByUrl('/');
          this.toastr.success('SignUp Success');
           
        }
      )
      .catch(
        (err)=>{
          console.log(err.message);
          this.toastr.warning('signup failed')
        }
      ) 
   }
}
