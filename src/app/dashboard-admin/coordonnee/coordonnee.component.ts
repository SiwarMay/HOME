import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-coordonnee',
  templateUrl: './coordonnee.component.html',
  styleUrls: ['./coordonnee.component.css']
})
export class CoordonneeComponent {
  dataArray:any;

  constructor(private ds:DataService){
    this.ds.getContact().subscribe(data=>this.dataArray=data)
  }
}
