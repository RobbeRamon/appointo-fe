import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthenticationService } from "../user/authentication.service";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.authService.tokenStorage.length) {
      const clonedRequest = request.clone({
        headers: request.headers.set(
          "Authorization",
          `Bearer ${this.authService.tokenStorage}`
        ),
      });
      return next.handle(clonedRequest);
    }
    return next.handle(request);
  }
}
