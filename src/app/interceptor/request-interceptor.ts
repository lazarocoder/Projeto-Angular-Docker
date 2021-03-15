import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const basic = sessionStorage.getItem("basic");
        if (basic) {
            let headers = request.headers
                .set('Content-Type', 'application/json')
                .set('Authorization', `Basic ${basic}`);
            request = request.clone({ headers });
        }

        return next.handle(request);
    }
}