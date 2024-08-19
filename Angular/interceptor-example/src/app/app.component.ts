import { Component } from '@angular/core';
//import the new Injectable Service you made here
import { HttpServiceService } from './http-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptor-example';
  //create a variable to hold the data being requested
  posts: any;
  result: any;

  //inject the http service into the constructor
  constructor(private httpService: HttpServiceService) {
  }

  //either set it to a button trigger or you can trigger with life cycle hooks
  //for this example:  I have the data pulled on initiation
  ngOnInit() {
    //subscribe to the observable created by the requestGet method
    this.httpService.requestGet().subscribe({
      //you don't need to use next or error but it may be deprecated in the future
      //next triggers the next line of code
      next: (response) => { 
        console.log(response);
        this.posts = response; 
      },
      //error triggers upon an error or exception being thrown
      error: (error) => { console.log(error); }
    }
    );
  }
}
