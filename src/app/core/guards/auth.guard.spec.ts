import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../services/autenticacao.service';
import { LoaderService } from '@app/core/services/loader.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MsalService } from '@azure/msal-angular';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let service: AuthGuard;

  beforeEach(() => {
    const routerStub = () => ({ navigate: array => ({}) });
    const autenticacaoServiceStub = () => ({
      permissoes: {},
      obterPermissoes: () => ({ subscribe: f => f({}) }),
      verificarPermissao: permissao => ({})
    });
    const loaderServiceStub = () => ({ start: () => ({}), stop: () => ({}) });
    const matSnackBarStub = () => ({});
    const msalServiceStub = () => ({ getAccount: () => ({}) });
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: Router, useFactory: routerStub },
        { provide: AutenticacaoService, useFactory: autenticacaoServiceStub },
        { provide: LoaderService, useFactory: loaderServiceStub },
        { provide: MatSnackBar, useFactory: matSnackBarStub },
        { provide: MsalService, useFactory: msalServiceStub }
      ]
    });
    service = TestBed.inject(AuthGuard);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('canActivate', () => {
    it('makes expected calls', () => {
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = {} as any;
      const routerStub: Router = TestBed.inject(Router);
      const autenticacaoServiceStub: AutenticacaoService = TestBed.inject(
        AutenticacaoService
      );
      const loaderServiceStub: LoaderService = TestBed.inject(LoaderService);
      const msalServiceStub: MsalService = TestBed.inject(MsalService);
      spyOn(component, 'emitirPermissao').and.callThrough();
      spyOn(routerStub, 'navigate').and.callThrough();
      spyOn(autenticacaoServiceStub, 'obterPermissoes').and.callThrough();
      spyOn(loaderServiceStub, 'start').and.callThrough();
      spyOn(loaderServiceStub, 'stop').and.callThrough();
      spyOn(msalServiceStub, 'getAccount').and.callThrough();
      service.canActivate(activatedRouteSnapshotStub);
      expect(service.emitirPermissao).toHaveBeenCalled();
      expect(routerStub.navigate).toHaveBeenCalled();
      expect(autenticacaoServiceStub.obterPermissoes).toHaveBeenCalled();
      expect(loaderServiceStub.start).toHaveBeenCalled();
      expect(loaderServiceStub.stop).toHaveBeenCalled();
      expect(msalServiceStub.getAccount).toHaveBeenCalled();
    });
  });
});
