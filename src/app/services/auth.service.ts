import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth : AngularFireAuth) { }

  signUp(email:string , password:string){

     return this.auth.createUserWithEmailAndPassword(email,password); //returns observable

  }

  signIn(email:string,password:string)
  {
    return this.auth.signInWithEmailAndPassword(email,password)
  }


  getUser(){
    return this.auth.authState;   // returns the state i.e.mailId passwords etc 
  }

  signOut(){
    return this.auth.signOut;
  }

}
