import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AutenticacaoService } from '@app/core/services/autenticacao.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { version } from 'process';
import { Permissoes } from '@app/core/structs/permissoes.enum';
import { CabecalhoComponent } from './cabecalho.component';

describe('CabecalhoComponent', () => {
  let component: CabecalhoComponent;
  let fixture: ComponentFixture<CabecalhoComponent>;

  beforeEach(() => {
    const autenticacaoServiceStub = () => ({});
    const breakpointObserverStub = () => ({});
    const routerStub = () => ({ url: { startsWith: () => ({}) } });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [CabecalhoComponent],
      providers: [
        { provide: AutenticacaoService, useFactory: autenticacaoServiceStub },
        { provide: BreakpointObserver, useFactory: breakpointObserverStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(CabecalhoComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`version has default value`, () => {
    expect(component.version).toEqual(version);
  });

  it(`permissoes has default value`, () => {
    expect(component.permissoes).toEqual(Permissoes);
  });

  it(`pronto has default value`, () => {
    expect(component.pronto).toEqual(false);
  });
});
