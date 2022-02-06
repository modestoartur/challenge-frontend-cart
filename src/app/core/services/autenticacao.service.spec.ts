import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { GraphService } from './graph.service';
import { LoaderService } from './loader.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MsalService } from '@azure/msal-angular';
import { Router } from '@angular/router';
import { AutenticacaoService } from './autenticacao.service';

describe('AutenticacaoService', () => {
  let service: AutenticacaoService;

  beforeEach(() => {
    const graphServiceStub = () => ({
      getGroups: () => ({ subscribe: f => f({}) }),
      GRAPH_ENDPOINT: {}
    });
    const loaderServiceStub = () => ({});
    const matSnackBarStub = () => ({
      openFromComponent: (avisoComponent, object) => ({})
    });
    const msalServiceStub = () => ({
      getAccount: () => ({}),
      acquireTokenSilent: object => ({ then: () => ({}) }),
      getScopesForEndpoint: gRAPH_ENDPOINT => ({}),
      getAllAccounts: () => ({ length: {} }),
      logout: () => ({})
    });
    const routerStub = () => ({ navigate: array => ({}) });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AutenticacaoService,
        { provide: GraphService, useFactory: graphServiceStub },
        { provide: LoaderService, useFactory: loaderServiceStub },
        { provide: MatSnackBar, useFactory: matSnackBarStub },
        { provide: MsalService, useFactory: msalServiceStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    service = TestBed.inject(AutenticacaoService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`permissoes has default value`, () => {
    expect(service.permissoes).toEqual([]);
  });

  describe('estaLogado', () => {
    it('makes expected calls', () => {
      const msalServiceStub: MsalService = TestBed.inject(MsalService);
      spyOn(msalServiceStub, 'getAccount').and.callThrough();
      service.estaLogado();
      expect(msalServiceStub.getAccount).toHaveBeenCalled();
    });
  });

  describe('obterUsuario', () => {
    it('makes expected calls', () => {
      const msalServiceStub: MsalService = TestBed.inject(MsalService);
      spyOn(msalServiceStub, 'getAccount').and.callThrough();
      service.obterUsuario();
      expect(msalServiceStub.getAccount).toHaveBeenCalled();
    });
  });

  describe('obterNomeUsuario', () => {
    it('makes expected calls', () => {
      spyOn(component, 'obterUsuario').and.callThrough();
      service.obterNomeUsuario();
      expect(service.obterUsuario).toHaveBeenCalled();
    });
  });

  describe('obterEmailUsuario', () => {
    it('makes expected calls', () => {
      spyOn(component, 'obterUsuario').and.callThrough();
      service.obterEmailUsuario();
      expect(service.obterUsuario).toHaveBeenCalled();
    });
  });

  describe('obterPermissoes', () => {
    it('makes expected calls', () => {
      const graphServiceStub: GraphService = TestBed.inject(GraphService);
      const msalServiceStub: MsalService = TestBed.inject(MsalService);
      spyOn(component, 'atribuirPermissoes').and.callThrough();
      spyOn(component, 'obterPermissoesAPI').and.callThrough();
      spyOn(component, 'obterPermissoes').and.callThrough();
      spyOn(graphServiceStub, 'getGroups').and.callThrough();
      spyOn(msalServiceStub, 'acquireTokenSilent').and.callThrough();
      spyOn(msalServiceStub, 'getScopesForEndpoint').and.callThrough();
      service.obterPermissoes();
      expect(service.atribuirPermissoes).toHaveBeenCalled();
      expect(service.obterPermissoesAPI).toHaveBeenCalled();
      expect(service.obterPermissoes).toHaveBeenCalled();
      expect(graphServiceStub.getGroups).toHaveBeenCalled();
      expect(msalServiceStub.acquireTokenSilent).toHaveBeenCalled();
      expect(msalServiceStub.getScopesForEndpoint).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('makes expected calls', () => {
      const msalServiceStub: MsalService = TestBed.inject(MsalService);
      spyOn(msalServiceStub, 'logout').and.callThrough();
      service.logout();
      expect(msalServiceStub.logout).toHaveBeenCalled();
    });
  });
});
