import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
// import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router,

  ) { }

  ngOnInit(): void {
  }
  onSubmit(f: NgForm) {
    const { email, password } = f.form.value

    this.auth.signIn(email, password)
      .then(
        (res) => {
          this.router.navigateByUrl('/');
          this.toastr.success('SignIn success');

        }
      )
      .catch(
        (err) => {
          console.log(err.message);
          this.toastr.warning('SignIn failed')
        }
      )
  }

}
