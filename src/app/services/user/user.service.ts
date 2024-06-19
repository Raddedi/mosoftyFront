import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private path="http://localhost:8080/utilisateur/"
  constructor(private http:HttpClient) { }
  
  GetAll(){
    return this.http.get(`${this.path}AllUtilisateur`)
  }
  GetById(id:any){
    return this.http.get(`${this.path}findById/`+id)
  }
  update(utilisateur:any,id:any){
    return this.http.put(`http://localhost:8080/util/update/${id}`,utilisateur)
  }
  delete(id: number) {
    return this.http.delete(`${this.path}delete/${id}`);
  }
  Add(utilisateur:any){
    return this.http.post(`${this.path}addUtilisateur`,utilisateur)
  }
  Login(produit:any){
    return this.http.post(`${this.path}login`,produit)
  }
}