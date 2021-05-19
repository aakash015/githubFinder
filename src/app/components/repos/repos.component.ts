import { GithubService } from './../../services/github.service';
import { Component, OnInit ,Input,OnChanges,ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit,OnChanges {

  @Input() repoUrl:string='';
  repos = []
  constructor(
    private githubService:GithubService,
    private ref:ChangeDetectorRef
  ){}

  ngOnInit(): void 
  {
    
  }

  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    
    if(this.repoUrl){
      this.githubService.getRepos(this.repoUrl).subscribe(
        (repos:any)=>{
           this.repos = repos;

           this.ref.detectChanges();//detect changes on parent 
        },
        (err)=>{
          console.log(err)
        }
      )
    }
  }
}
