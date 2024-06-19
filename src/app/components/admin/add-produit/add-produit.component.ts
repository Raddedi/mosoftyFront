import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit/produit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent {

  form!:FormGroup ;
  
  fileToUpload:Array<File> = [];
    constructor(private produitService:ProduitService,  private fb:FormBuilder,private router:Router) { }

    handleFileInput(files: any) {
      this.fileToUpload = <Array<File>>files.target.files;
      console.log(this.fileToUpload)
    }
 
    produit:any;
   
    ngOnInit(): void {

      this.form = this.fb.group({
        nomProduit:['',Validators.required] ,
        prixProduit:['',Validators.required],
        prixDeBase :['',Validators.required] ,
        altSEO:['',Validators.required],})
  }

  add(){

    let formData = new FormData();
    formData.append("nomProduit", this.form.value.nomProduit);
    formData.append("prixProduit", this.form.value.prixProduit);
    formData.append("prixDeBase", this.form.value.prixDeBase);
    formData.append("altSEO", this.form.value.altSEO);
    formData.append("file",this.fileToUpload[0]);


    this.produitService.AddProduit(formData).subscribe((data)=>{
      console.log(data);

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
       this.router.navigate(['/admin/gestionProduits']) ; }
      )
  }

  }

