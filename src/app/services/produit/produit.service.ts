import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private path="http://localhost:8080/produit/"
  constructor(private http:HttpClient) { }
  
  GetAll(){
    return this.http.get(`${this.path}findAllProduit`)
  }
  GetById(id:any){
    return this.http.get(`${this.path}findById/`+id)
  }
  update(parent:any,id:any){
    return this.http.put(`http://localhost:8080/util/update/${id}`,parent)
  }
  delete(id: number) {
    return this.http.delete(`${this.path}delete/${id}`);
  }
  AddProduit(produit:any){
    return this.http.post(`${this.path}addProduit`,produit)
  }
}