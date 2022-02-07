import { TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { CarrinhoService } from './carrinho.service';
import { NotificacoesService } from './notificacoes.service';
import { StorageService } from './storage.service';

describe('CarrinhoService', () => {
  let service: CarrinhoService;
  let fakeNotificacoes: jest.Mocked<NotificacoesService>;
  let fakeStorageService: jest.Mocked<StorageService>;

  beforeEach(async () => {
    fakeNotificacoes = createSpyObj<NotificacoesService>(NotificacoesService, ['notificar']);
    fakeStorageService = createSpyObj<StorageService>(StorageService, ['setItem']);

    await TestBed.configureTestingModule({
      providers: [
        { provide: NotificacoesService, useFactory: () => fakeNotificacoes },
        { provide: StorageService, useFactory: () => fakeStorageService },
        CarrinhoService
      ]
    });
    service = TestBed.inject(CarrinhoService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('METHOD: adicionarAoCarrinho', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // service.adicionarAoCarrinho();
    });
  });

  describe('METHOD: calcularTotal', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // service.calcularTotal();
    });
  });

});
