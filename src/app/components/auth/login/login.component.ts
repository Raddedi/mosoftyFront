import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  FormLogin!: FormGroup;
  showMsg: boolean = false;
  user: any;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.FormLogin = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  login() {
    //this.router.navigateByUrl('/home')

    if (this.FormLogin.invalid) {
      this.submitted = true;

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You have to write your email and your password!',
      });
      return;
    } else {
      this.user.login(this.FormLogin.value).subscribe((admin: any) => {
console.log("uuuuu",this.FormLogin.value)
          if (this.user != null) {

              localStorage.setItem('currentuser', JSON.stringify(admin));
              localStorage.setItem('status', '1');

              console.log('here login :', localStorage.getItem('status'));

              this.router.navigateByUrl('/admin/gestionProduits');
              Swal.fire('Succes!', 'Log in Successfully !', 'success');
            
          } else {
            this.showMsg = true;
          }

      });
    }
  }
}
