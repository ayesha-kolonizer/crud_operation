import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 // add service Variable 
 authForm!: FormGroup;
 isSubmitted =false;
 hide!: true;
 



 constructor(private authService:AuthService, private router:Router , private formBuider:FormBuilder) { }

 ngOnInit(): void {
   // create Form
   this.authForm = this.formBuider.group({
     email:['',[Validators.required,Validators.email]],
     password:['',Validators.required]
     
   })
  
 }
 //get property to make easy to access the form control
get formControls(){ return this.authForm.controls;}
// add signin method

signIn(){
 this.isSubmitted = true;
 // stop here if the value is invalid 
 if(this.authForm.invalid){
 return;
 }
 this.authService.signin(this.authForm.value);
 this.router.navigateByUrl('user')
}

}


