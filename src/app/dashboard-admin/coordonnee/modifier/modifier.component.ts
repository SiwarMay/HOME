import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent {
  id="64223754105bf812e877c61d";
  contact:any

  constructor(private data:DataService, private router: Router){}
  ngOnInit(): void{

    this.data.getContactById(this.id)
    .subscribe(
      res=>{
        this.contact = res;
      }
    )
}

  updatenewcontact(f:any){
    let data=f.value
    this.data.updateContact(this.id,data).subscribe(response=>console.log(response),(err:HttpErrorResponse)=>console.log(err.message))
    this.router.navigate(['/dashboard_admin/coordonnee'])

  }
}
