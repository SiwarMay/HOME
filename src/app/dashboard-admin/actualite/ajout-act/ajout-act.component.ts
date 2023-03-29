import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ajout-act',
  templateUrl: './ajout-act.component.html',
  styleUrls: ['./ajout-act.component.css']
})
export class AjoutActComponent {

  constructor(private data:DataService, private router: Router){}

  actualite: any={
    titre:'',
    des:'',
  }
  image:any;
  select(e:any){
    this.image = e.target.files[0];
  }
  create(){

    let fd = new FormData()
    fd.append('titre',this.actualite.titre)
    fd.append('des',this.actualite.des)
    fd.append('image',this.image)

    this.data.createactualite(fd)
    .subscribe(
        res=>{
          this.router.navigate(['/dashboard_admin/actualite'])
      }
    )
  }
}
