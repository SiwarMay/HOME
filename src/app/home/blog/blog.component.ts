import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  dataArray:any;


  constructor(private ds:DataService){
    this.ds.getAllactualites().subscribe(data=>this.dataArray=data)
  }
}
