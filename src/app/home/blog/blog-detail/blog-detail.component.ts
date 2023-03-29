import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent {
  id:any;
  actualite:any
constructor(private act:ActivatedRoute,private data:DataService){ }
  ngOnInit(): void{
    this.id= this.act.snapshot.paramMap.get('id')

    this.data.getActualiteById(this.id)
    .subscribe(
      res=>{
        this.actualite = res;
      }
    )
}
}
