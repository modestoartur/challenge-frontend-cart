import { TestBed } from '@angular/core/testing';
import { HttpHandler } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { MsalInterceptor } from '@azure/msal-angular';
import { AuthInterceptor } from './desafio-front.interceptor';

describe('AuthInterceptor', () => {
  let service: AuthInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AuthInterceptor] });
    service = TestBed.inject(AuthInterceptor);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('intercept', () => {
    it('makes expected calls', () => {
      const httpHandlerStub: HttpHandler = {} as any;
      const httpRequestStub: HttpRequest = {} as any;
      spyOn(MsalInterceptor.prototype, 'intercept');
      spyOn(httpHandlerStub, 'handle').and.callThrough();
      spyOn(httpRequestStub, 'clone').and.callThrough();
      service.intercept(httpRequestStub, httpHandlerStub);
      expect(MsalInterceptor.prototype.intercept).toHaveBeenCalled();
      expect(httpHandlerStub.handle).toHaveBeenCalled();
      expect(httpRequestStub.clone).toHaveBeenCalled();
    });
  });
});
