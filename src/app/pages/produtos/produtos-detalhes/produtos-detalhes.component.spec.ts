import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { ProdutosDetalhesComponent } from './produtos-detalhes.component';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from '@app/core/services/carrinho.service';
import { NotificacoesService } from '@app/core/services/notificacoes.service';
import { ProdutosService } from '@app/core/services/produtos.service';
import { LoaderService } from '../../../core/services/loader.service';

describe('ProdutosDetalhesComponent', () => {
  let component: ProdutosDetalhesComponent;
  let fixture: ComponentFixture<ProdutosDetalhesComponent>;
  let fakeNotificacoes: jest.Mocked<NotificacoesService>;
  let fakeLoader: jest.Mocked<LoaderService>;
  let fakeProdutosService: jest.Mocked<ProdutosService>;
  let fakeRoute: jest.Mocked<ActivatedRoute>;
  let fakeRouter: jest.Mocked<Router>;
  let fakeCarrinhoService: jest.Mocked<CarrinhoService>;

  beforeEach(async () => {
    fakeNotificacoes = createSpyObj<NotificacoesService>(NotificacoesService, ['notificar']);
    fakeLoader = createSpyObj<LoaderService>(LoaderService, ['stop']);
    fakeProdutosService = createSpyObj<ProdutosService>(ProdutosService, ['obterProduto', 'obterVarios']);
    fakeRoute = createSpyObj<ActivatedRoute>(ActivatedRoute, []);
    fakeRouter = createSpyObj<Router>(Router, ['navigateByUrl']);
    fakeCarrinhoService = createSpyObj<CarrinhoService>(CarrinhoService, ['adicionarAoCarrinho']);

    await TestBed.configureTestingModule({
      declarations: [ProdutosDetalhesComponent],
      providers: [
        { provide: NotificacoesService, useFactory: () => fakeNotificacoes },
        { provide: LoaderService, useFactory: () => fakeLoader },
        { provide: ProdutosService, useFactory: () => fakeProdutosService },
        { provide: ActivatedRoute, useFactory: () => fakeRoute },
        { provide: Router, useFactory: () => fakeRouter },
        { provide: CarrinhoService, useFactory: () => fakeCarrinhoService },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutosDetalhesComponent);
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

  describe('METHOD: obterProduto', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.obterProduto();
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

  describe('METHOD: obterProdutosRelacionados', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.obterProdutosRelacionados();
    });
  });

});
