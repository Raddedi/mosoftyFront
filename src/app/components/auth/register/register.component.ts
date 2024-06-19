import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from 'src/app/services/produit/produit.service';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  form!:FormGroup ;
  
  fileToUpload:Array<File> = [];
    constructor(private userService:UserService,  private fb:FormBuilder,private router:Router) { }

    handleFileInput(files: any) {
      this.fileToUpload = <Array<File>>files.target.files;
      console.log(this.fileToUpload)
    }
 
    produit:any;
   
    ngOnInit(): void {

      this.form = this.fb.group({
        nom:['',Validators.required] ,
        prenom:['',Validators.required],
        email :['',Validators.required] ,
        password:['',Validators.required],})
  }

  add(){

    let formData = new FormData();
    formData.append("nom", this.form.value.nom);
    formData.append("prenom", this.form.value.prenom);
    formData.append("email", this.form.value.email);
    formData.append("password", this.form.value.password);
    formData.append("role", "client");
    formData.append("file",this.fileToUpload[0]);


    this.userService.Add(formData).subscribe((data)=>{
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
