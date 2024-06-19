import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit/produit.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent {
  updateform!:FormGroup ;
  id: any = this.activatedRoute.snapshot.params["id"];

  
  fileToUpload:Array<File> = [];
    constructor(private activatedRoute: ActivatedRoute,private produitService:ProduitService,  private fb:FormBuilder,private router:Router) { }

    handleFileInput(files: any) {
      this.fileToUpload = <Array<File>>files.target.files;
      console.log(this.fileToUpload)
    }
 
    produit:any;
   
    ngOnInit(): void {

      this.updateform = this.fb.group({
        nomProduit:[''] ,
        prixProduit:[''],
        prixDeBase :[''] ,
        altSEO:[''],})
        this.getbyid();
        this.patchform();
      }
    
      patchform() {
        this.updateform.patchValue({
          nomProduit: this.produit.nomProduit,
          prixProduit: this.produit.prixProduit,
          prixDeBase: this.produit.prixDeBase,
          altSEO: this.produit.altSEO,    
    
        })
      }
    
      clickupdateprofil() {
    

        this.produitService.update(this.updateform.value , this.produit.id).subscribe((res: any) => {
    
          console.log("succes", res);
          Swal.fire(
            'You informations!',
            'updated with success',
            'success'
          )
          this.getbyid();
    
        })
      }
      getbyid() {
        return this.produitService.GetById(this.id).subscribe((data) => {
          this.produit = data;
          console.log("produit = ", this.produit)
        })
      }
    
  }

  

  


