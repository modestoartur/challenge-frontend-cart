import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { ProdutosListagemComponent } from './produtos-listagem.component';
import { Router } from '@angular/router';
import { CarrinhoService } from '@app/core/services/carrinho.service';
import { LoaderService } from '@app/core/services/loader.service';
import { ProdutosService } from '@app/core/services/produtos.service';
import { NotificacoesService } from '../../../core/services/notificacoes.service';

describe('ProdutosListagemComponent', () => {
  let component: ProdutosListagemComponent;
  let fixture: ComponentFixture<ProdutosListagemComponent>;
  let fakeLoader: jest.Mocked<LoaderService>;
  let fakeProdutosService: jest.Mocked<ProdutosService>;
  let fakeNotificacoes: jest.Mocked<NotificacoesService>;
  let fakeRouter: jest.Mocked<Router>;
  let fakeCarrinhoService: jest.Mocked<CarrinhoService>;

  beforeEach(async () => {
    fakeLoader = createSpyObj<LoaderService>(LoaderService, ['stop', 'start']);
    fakeProdutosService = createSpyObj<ProdutosService>(ProdutosService, ['obterVarios']);
    fakeNotificacoes = createSpyObj<NotificacoesService>(NotificacoesService, ['notificar']);
    fakeRouter = createSpyObj<Router>(Router, ['navigateByUrl']);
    fakeCarrinhoService = createSpyObj<CarrinhoService>(CarrinhoService, ['adicionarAoCarrinho']);

    await TestBed.configureTestingModule({
      declarations: [ProdutosListagemComponent],
      providers: [
        { provide: LoaderService, useFactory: () => fakeLoader },
        { provide: ProdutosService, useFactory: () => fakeProdutosService },
        { provide: NotificacoesService, useFactory: () => fakeNotificacoes },
        { provide: Router, useFactory: () => fakeRouter },
        { provide: CarrinhoService, useFactory: () => fakeCarrinhoService },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosListagemComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('METHOD: ngOnInit', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.ngOnInit();
    });
  });

  describe('METHOD: obterProdutos', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.obterProdutos();
    });
  });

  describe('METHOD: ordenar', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.ordenar();
    });
  });

  describe('METHOD: adicionarAoCarrinho', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.adicionarAoCarrinho();
    });
  });

  describe('METHOD: verProduto', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.verProduto();
    });
  });

});
