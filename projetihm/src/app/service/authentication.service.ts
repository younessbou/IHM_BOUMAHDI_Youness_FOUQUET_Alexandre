import { HttpClient,HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnyARecord } from 'dns';
import { HttpClientService } from './http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClientService: HttpClientService,private http: HttpClient) { }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('token')
    //console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('token')
  }
}