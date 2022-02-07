import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { CarrinhoListagemComponent } from './carrinho-listagem.component';
import { CarrinhoService } from '@app/core/services/carrinho.service';
import { StorageService } from '@app/core/services/storage.service';
import { NotificacoesService } from '../../../core/services/notificacoes.service';

describe('CarrinhoListagemComponent', () => {
  let component: CarrinhoListagemComponent;
  let fixture: ComponentFixture<CarrinhoListagemComponent>;
  let fakeNotificacoes: jest.Mocked<NotificacoesService>;
  let fakeStorageService: jest.Mocked<StorageService>;
  let fakeCarrinhoService: jest.Mocked<CarrinhoService>;

  beforeEach(async () => {
    fakeNotificacoes = createSpyObj<NotificacoesService>(NotificacoesService, []);
    fakeStorageService = createSpyObj<StorageService>(StorageService, ['setItem']);
    fakeCarrinhoService = createSpyObj<CarrinhoService>(CarrinhoService, ['calcularTotal']);

    await TestBed.configureTestingModule({
      declarations: [CarrinhoListagemComponent],
      providers: [
        { provide: NotificacoesService, useFactory: () => fakeNotificacoes },
        { provide: StorageService, useFactory: () => fakeStorageService },
        { provide: CarrinhoService, useFactory: () => fakeCarrinhoService },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoListagemComponent);
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

  describe('METHOD: aumentarQuantidade', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.aumentarQuantidade();
    });
  });

  describe('METHOD: diminuirQuantidade', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.diminuirQuantidade();
    });
  });

  describe('METHOD: atualizarCache', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.atualizarCache();
    });
  });

});
