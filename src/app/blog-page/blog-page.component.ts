import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css']
})
export class BlogPageComponent {
  dataArray:any;
  constructor(private ds:DataService){
    this.ds.getAllactualites().subscribe(data=>this.dataArray=data)
  }
}
