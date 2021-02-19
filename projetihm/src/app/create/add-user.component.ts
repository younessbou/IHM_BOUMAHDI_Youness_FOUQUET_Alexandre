import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClientService } from '../service/http-client.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  invalid: any;


  constructor(private httpClientService: HttpClientService,private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
      //console.log(form.value)
      this.invalid=true;
      if(form.value.name!="" && form.value.job!=""  ){
      this.http.post("https://reqres.in/api/users", form.value,{observe: 'response'})
      .subscribe( response => {console.log("Response body:",response.body);
        console.log("Response:",response.status); this.invalid=false;}
        ,error=> this.invalid=true)
      }
    
  }
}
