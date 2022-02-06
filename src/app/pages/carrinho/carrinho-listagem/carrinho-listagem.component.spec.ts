import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoListagemComponent } from './carrinho-listagem.component';

describe('CarrinhoListagemComponent', () => {
  let component: CarrinhoListagemComponent;
  let fixture: ComponentFixture<CarrinhoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrinhoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
