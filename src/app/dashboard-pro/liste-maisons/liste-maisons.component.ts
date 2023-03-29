import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-liste-maisons',
  templateUrl: './liste-maisons.component.html',
  styleUrls: ['./liste-maisons.component.css']
})
export class ListeMaisonsComponent {
  maisons: any;

  dataArray:any;
  dataMaisons={
      id:'',
      nom:'',
      prix:'',
      description:'',
      adresse:'',
      tele:'',
      surface:'',
      chambres:'',
      salledebain:'',
      garage:'',
      gouvernerat:'',
      datedepot:''
  }
constructor(private data:DataService,private router:Router){
}
ngOnInit(): void{
  this.data.getAll()
    .subscribe(
      res=>{
        this.maisons=res;
      },
      err=>{
        console.log(err);
      }
    )
}
delete(id:any,i:number){
  this.data.deletemaisons(id).subscribe(
    response=>{ 
      this.router.navigate(['/dashboard_pro/listemaison']);

        this.dataArray.splice(i,1);
  // pour supprimer la maison du dataArray dufrontend aussi
  }
  
  )
}

getdata(nom:string,prix:string,description:string,adresse:string,tele:string,surface:string,chambres:string,salledebain:string,garage:string,gouvernerat:string,id:any)
{
  this.dataMaisons.nom=nom
  this.dataMaisons.prix=prix
  this.dataMaisons.description=description
  this.dataMaisons.adresse=adresse
  this.dataMaisons.tele=tele
  this.dataMaisons.surface=surface
  this.dataMaisons.chambres=chambres
  this.dataMaisons.salledebain=salledebain
  this.dataMaisons.garage=garage
  this.dataMaisons.gouvernerat=gouvernerat
  this.dataMaisons.id=id

  console.log(this.dataMaisons)
}
  
}
