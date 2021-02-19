import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  invalid: any;
  constructor(private router: Router,
    private loginservice: AuthenticationService,private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    console.log(form.value)
    this.http.post("https://reqres.in/api/register", form.value , {observe: 'response'})
    .subscribe( res =>{ 
    if(res.status==200) console.log("Response",res.status);this.invalid=false;},
    error =>this.invalid=true)
    
}
}
