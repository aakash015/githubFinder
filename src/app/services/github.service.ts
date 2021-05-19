import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})

//https://api.github.com/users/aakash015
export class GithubService {

  constructor(private http:HttpClient) { }

  

   getUserDetails(userName:string)
   {
     return this.http.get(`https://api.github.com/users/${userName}`); //returns observable
   }

   getRepos(repoUrl:string)
   {
     return this.http.get(repoUrl)
   }

   
}
