import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientService } from '../service/http-client.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  id: number | undefined;
  private sub: any;
  users: any;
  email:any;
  first_name:any;
  last_name:any;
  avatar:any;

  constructor(private route: ActivatedRoute,private httpClientService:HttpClientService,private httpClient: HttpClient,private _location: Location) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
   });

   this.httpClientService.getUsers().subscribe(
    response =>{
      response.data.forEach((element: any) => {
        if(element.id==this.id){
          this.email=element.email;
          this.first_name=element.first_name;
          this.last_name=element.last_name;
          this.avatar=element.avatar;
        
      }});
    }
   );
  }

  deleteEmployee(id: any){
    this.httpClientService.deleteUser(this.id)
      .subscribe( response => console.log("Response:",response.status))
      }
  
  backClicked() {
    this._location.back();
  }

}
