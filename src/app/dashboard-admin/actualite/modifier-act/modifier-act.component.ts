import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modifier-act',
  templateUrl: './modifier-act.component.html',
  styleUrls: ['./modifier-act.component.css']
})
export class ModifierActComponent {
  id:any;
  actualite:any
  dataActualite={
    id:'',
    titre:'',
    des:'',
    image:''
}
select(e:any){
  this.dataActualite.image = e.target.files[0];
}
constructor(private act:ActivatedRoute,private data:DataService, private route : Router){ }
  ngOnInit(): void{
    this.id= this.act.snapshot.paramMap.get('id')

    this.data.getActualiteById(this.id)
    .subscribe(
      res=>{
        this.actualite = res;
      }
    )
}

getdata(id:any,titre:string,des:string){
  this.dataActualite.id=id
  this.dataActualite.titre=titre
  this.dataActualite.des=des
  console.log(this.dataActualite)

}
updatenewactualite(f:any){
  let data=f.value
  this.data.updateactualite(this.id,data).subscribe(response=>console.log(response),(err:HttpErrorResponse)=>console.log(err.message))
  this.route.navigate(['/dashboard_admin/actualite'])

}
 
}