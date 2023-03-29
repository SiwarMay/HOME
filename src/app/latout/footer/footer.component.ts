import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  dataArray:any;

  constructor(private ds:DataService){
    this.ds.getContact().subscribe(data=>this.dataArray=data)
  }
}
