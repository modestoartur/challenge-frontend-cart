import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AutenticacaoService } from '@app/core/services/autenticacao.service';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(() => {
    const autenticacaoServiceStub = () => ({});
    const routerStub = () => ({
      events: { subscribe: f => f({}) },
      url: { startsWith: () => ({}) }
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [LayoutComponent],
      providers: [
        { provide: AutenticacaoService, useFactory: autenticacaoServiceStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
