import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  dataArray:any;

  constructor(private ds:DataService){
    this.ds.getContact().subscribe(data=>this.dataArray=data)
  }
}
