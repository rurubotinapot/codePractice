import { Injectable } from '@angular/core';
import{ HttpClient } from"@angular/common/http";

//run ng generate service [service name here] to create a service injectable
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  //create a variable to store your static api url
  private url = "https://api.jsonbin.io/v3/qs/66c29096acd3cb34a8766b3c";
  //inject the http client into the constructor
  constructor(private http: HttpClient) {
  }

  //create a function to request information from the url
  requestGet(){
      //you can use get(), post(), put(), or delete for the functionality you need
      //return the response object
      return this.http.get(this.url);
  }

}
