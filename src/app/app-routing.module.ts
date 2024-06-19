import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './components/admin/add-produit/add-produit.component';
import { AdminbaseComponent } from './components/admin/adminbase/adminbase.component';
import { GestionProduitsComponent } from './components/admin/gestion-produits/gestion-produits.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';

const routes: Routes = [
  {path:'admin',component:AdminbaseComponent ,children:[
    {path:'gestionProduits',component:GestionProduitsComponent } ,
    {path:'addProduit',component:AddProduitComponent } ,
  

  ]},

  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
