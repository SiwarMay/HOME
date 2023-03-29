import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent {
  
  dataArray:any;
  dataActualite={
      id:'',
      titre:'',
      des:'',
      image:''
  }
constructor(private ds:DataService){
  this.ds.getAllactualites().subscribe(data=>this.dataArray=data)
}

delete(id:any,i:number){
  this.ds.deleteactualite(id).subscribe(
    response=>{ 
  this.dataArray.splice(i,1) // pour supprimer la maison du dataArray dufrontend aussi
  }
  )
}

getdata(titre:string,des:string,id:any){
  this.dataActualite.id=id
  this.dataActualite.titre=titre
  this.dataActualite.des=des
  console.log(this.dataActualite)

}

}
