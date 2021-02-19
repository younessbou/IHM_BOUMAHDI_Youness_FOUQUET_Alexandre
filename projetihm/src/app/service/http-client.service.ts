import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private httpClient:HttpClient
  ) { 
     }

     getUsers()
  {
    return this.httpClient.get('https://reqres.in/api/users?page=2');
  }

  public deleteUser(id: any) {
    return this.httpClient.delete("https://reqres.in/api/users" + "/"+id, {observe: 'response'});
  }

  public createUser(user: any) {
    return this.httpClient.post("https://reqres.in/api/users",user);
  }

}