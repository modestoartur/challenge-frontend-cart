import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AutenticacaoService } from '@app/core/services/autenticacao.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { Permissoes } from '@app/core/structs/permissoes.enum';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    const autenticacaoServiceStub = () => ({});
    const breakpointObserverStub = () => ({});
    const routerStub = () => ({ url: { startsWith: () => ({}) } });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [MenuComponent],
      providers: [
        { provide: AutenticacaoService, useFactory: autenticacaoServiceStub },
        { provide: BreakpointObserver, useFactory: breakpointObserverStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`permissoes has default value`, () => {
    expect(component.permissoes).toEqual(Permissoes);
  });
});
