import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable()
export class loggingInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler){
        console.log('loggingInterceptor is called');
        return next.handle(req);
    }
}