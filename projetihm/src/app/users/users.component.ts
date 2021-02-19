import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import {CanActivate,ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private httpClientService:HttpClientService,public router: Router) { }

  ngOnInit() {
    this.httpClientService.getUsers().subscribe(
     response =>this.handleSuccessfulResponse(response),
    );
  }

  handleSuccessfulResponse(response: any)
{
    this.users=response;
}
deleteEmployee(id: any){
  this.httpClientService.deleteUser(id)
    .subscribe( response => console.log("Response:",response.status))
    }
};


