import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  url = 'http://127.0.0.1:3000/maison/';
  urlact = 'http://localhost:3000/actualite/';
  urlcontact = 'http://localhost:3000/contact/';

  create(maison:any){
    return this.http.post(this.url+'ajout', maison );
  } 
  getAll(){
    return this.http.get(this.url + 'all');
  }
  getMaisonById(id:any){
    return this.http.get(this.url + 'getbyid/' + id)
  }
  getAllmaisons(){
    return this.http.get('http://127.0.0.1:3000/maison/maisons');
  }
  deletemaisons(id:any){
    return this.http.delete(this.url+'supprimer/'+id);
  }
  updatemaisons(id:string,newmaison:any){
    return this.http.put(this.url + 'update/' + id,newmaison)
  }
  

  ////////////////* Actualité *///////////////
  createactualite(actualite:any){
    return this.http.post(this.urlact+'ajout', actualite );
  }

  getAllactualites(){
    return this.http.get('http://localhost:3000/actualite/all');
  }
  deleteactualite(id:any){
    return this.http.delete(this.urlact+'supprimer/'+id);
  }
  updateactualite(id:string,newact:any){
    return this.http.put(this.urlact + 'update/' + id,newact)
  }

  getActualiteById(id:any){
    return this.http.get(this.urlact+'getbyid/' + id)
  }
  countActualite(){
    return this.http.get(this.urlact+'count/')

  }

  ///////////////// contact ///////

  getContactById(id:any){
    return this.http.get(this.urlcontact+'getbyid/' + id)
  } 
  getContact(){
    return this.http.get('http://localhost:3000/contact/all');
  }
  deleteContact(id:any){
    return this.http.delete(this.urlcontact+'supprimer/'+id);
  }
  updateContact(id:string,newcontact:any){
    return this.http.put(this.urlcontact + 'update/' + id,newcontact)
  }
  
}
