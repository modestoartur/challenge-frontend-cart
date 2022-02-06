import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoaderService } from '@app/core/services/loader.service';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { of as observableOf } from 'rxjs';
import { ProdutosListagemComponent } from './produtos-listagem.component';
import { ProdutosService } from '@app/core/services/produtos.service';
import { TestBed } from '@angular/core/testing';
// tslint:disable
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Injectable,
  NO_ERRORS_SCHEMA,
} from '@angular/core';

@Injectable()
class MockRouter {
  navigate() {}
}

@Injectable()
class MockLoaderService {
  stop() {}
  start() {}
}

@Injectable()
class MockProdutosService {}

describe('ProdutosListagemComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [ProdutosListagemComponent, ,],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        Location,
        { provide: Router, useClass: MockRouter },
        { provide: LoaderService, useClass: MockLoaderService },
        { provide: ProdutosService, useClass: MockProdutosService },
        MatSnackBar,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { url: 'url', params: {}, queryParams: {}, data: {} },
            url: observableOf('url'),
            params: observableOf({}),
            queryParams: observableOf({}),
            fragment: observableOf('fragment'),
            data: observableOf({}),
          },
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(ProdutosListagemComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function () {};
    fixture.destroy();
  });

  it('Deveria rodar #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('Deveria rodar #ngOnInit()', async () => {
    spyOn(component, 'obterSecoes');
    component.secoes = component.secoes || {};
    component.secoes.selecionada = 'selecionada';
    spyOn(component, 'consultar').and.returnValue({
      then: function () {},
    });
    component.ngOnInit();
    expect(component.obterSecoes).toHaveBeenCalled();
    expect(component.consultar).toHaveBeenCalled();
  });

  it('Deveria rodar #obterSecoes()', async () => {
    component.loaderService = component.loaderService || {};
    spyOn(component.loaderService, 'start');
    component.produtosService = component.produtosService || {};
    spyOn(component.produtosService, 'obterSecoes');
    component.secoes = component.secoes || {};
    component.secoes.opcoes = {
      sort: function () {
        return [
          {
            id: {},
            name: {},
          },
          {
            id: {},
            name: {},
          },
        ];
      },
    };
    await component.obterSecoes();
    expect(component.loaderService.start).toHaveBeenCalled();
    expect(component.produtosService.obterSecoes).toHaveBeenCalled();
  });

  it('Deveria rodar #obterProdutos()', async () => {
    component.produtosService = component.produtosService || {};
    spyOn(component.produtosService, 'obterVarios');
    await component.obterProdutos({}, {}, {});
    expect(component.produtosService.obterVarios).toHaveBeenCalled();
  });

  it('Deveria rodar #aoRolarTabela()', async () => {
    spyOn(component, 'obterMaisProdutos').and.returnValue({
      then: function () {},
    });
    component.produtos = component.produtos || {};
    spyOn(component.produtos, 'concat');
    component.aoRolarTabela({
      target: {
        offsetHeight: {},
        scrollHeight: {},
        scrollTop: {},
      },
    });
    expect(component.obterMaisProdutos).toHaveBeenCalled();
    expect(component.produtos.concat).toHaveBeenCalled();
  });

  it('Deveria rodar #obterMaisProdutos()', async () => {
    component.produtosService = component.produtosService || {};
    spyOn(component.produtosService, 'obterVarios');
    component.secoes = component.secoes || {};
    component.secoes.selecionada = 'selecionada';
    await component.obterMaisProdutos();
    expect(component.produtosService.obterVarios).toHaveBeenCalled();
  });

  it('Deveria rodar #consultar()', async () => {
    component.loaderService = component.loaderService || {};
    spyOn(component.loaderService, 'start');
    spyOn(component.loaderService, 'stop');
    spyOn(component, 'limparProdutos');
    spyOn(component, 'obterProdutos').and.returnValue({
      then: function () {},
    });
    component.secoes = component.secoes || {};
    component.secoes.selecionada = 'selecionada';
    component.notificacao = component.notificacao || {};
    spyOn(component.notificacao, 'openFromComponent');
    spyOn(component, 'atribuirPasso');
    spyOn(window, 'scroll');
    await component.consultar({}, {}, {});
    expect(component.loaderService.start).toHaveBeenCalled();
    expect(component.loaderService.stop).toHaveBeenCalled();
    expect(component.limparProdutos).toHaveBeenCalled();
    expect(component.obterProdutos).toHaveBeenCalled();
    expect(component.notificacao.openFromComponent).toHaveBeenCalled();
    expect(component.atribuirPasso).toHaveBeenCalled();
    expect(window.scroll).toHaveBeenCalled();
  });

  it('Deveria rodar #ordenar()', async () => {
    spyOn(component, 'obterProdutos').and.returnValue({
      then: function () {},
    });
    component.secoes = component.secoes || {};
    component.secoes.selecionada = 'selecionada';
    component.ordenar();
    expect(component.obterProdutos).toHaveBeenCalled();
  });

  it('Deveria rodar #voltar()', async () => {
    spyOn(component, 'atribuirPasso');
    spyOn(component, 'limparProdutos');
    component.secoes = component.secoes || {};
    component.secoes.selecionada = 'selecionada';
    component.conjunto = component.conjunto || {};
    component.conjunto.checked = 'checked';
    component.mercadoria = component.mercadoria || {};
    component.mercadoria.checked = 'checked';
    component.router = component.router || {};
    spyOn(component.router, 'navigate');
    component.voltar();
    expect(component.atribuirPasso).toHaveBeenCalled();
    expect(component.limparProdutos).toHaveBeenCalled();
    expect(component.router.navigate).toHaveBeenCalled();
  });

  it('Deveria rodar #selecionarProduto()', async () => {
    component.router = component.router || {};
    spyOn(component.router, 'navigate');
    component.selecionarProduto({
      secao: {
        id: {},
      },
      codigo_produto: {},
    });
    expect(component.router.navigate).toHaveBeenCalled();
  });

  it('Deveria rodar #limparProdutos()', async () => {
    component.limparProdutos();
  });

  it('Deveria rodar #obterTipo()', async () => {
    component.obterTipo({});
  });

  it('Deveria rodar #atribuirPasso()', async () => {
    component.router = component.router || {};
    spyOn(component.router, 'navigate');
    component.atribuirPasso({});
    expect(component.router.navigate).toHaveBeenCalled();
  });

  it('Deveria rodar #atribuirTipo()', async () => {
    component.router = component.router || {};
    spyOn(component.router, 'navigate');
    component.atribuirTipo({}, {}, {});
    expect(component.router.navigate).toHaveBeenCalled();
  });

  it('Deveria rodar #atribuirCodigo()', async () => {
    component.router = component.router || {};
    spyOn(component.router, 'navigate');
    component.atribuirCodigo({});
    expect(component.router.navigate).toHaveBeenCalled();
  });

  it('Deveria rodar #atribuirSecao()', async () => {
    component.secoes = component.secoes || {};
    component.secoes.selecionada = 'selecionada';
    component.router = component.router || {};
    spyOn(component.router, 'navigate');
    component.atribuirSecao({});
    expect(component.router.navigate).toHaveBeenCalled();
  });

  it('Deveria rodar #obterStatus()', async () => {
    component.obterStatus({});
  });
});
