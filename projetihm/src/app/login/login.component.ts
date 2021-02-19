import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    private loginservice: AuthenticationService,private httpClientService:HttpClientService,private http: HttpClient) { }

  ngOnInit() {
  }
  res:any;
  checkLogin() {
    var json_final = { 
      "email":this.email, 
      "password":this.password 
   }; 
    this.http.post("https://reqres.in/api/login", json_final, {observe: 'response'})
    .subscribe( res => { this.res=res.body;
      if(res.status==200) {
      sessionStorage.setItem('token', this.res["token"])
      this.router.navigate(['/users']).then(() => {
        window.location.reload();
      });
      this.invalidLogin = false
    }},
    error =>this.invalidLogin = true)
      
  }

}