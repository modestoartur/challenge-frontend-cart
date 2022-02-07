import { TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { NotificacoesService } from './notificacoes.service';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('NotificacoesService', () => {
  let service: NotificacoesService;
  let fakeNotificacao: jest.Mocked<MatSnackBar>;

  beforeEach(async () => {
    fakeNotificacao = createSpyObj<MatSnackBar>(MatSnackBar, ['openFromComponent']);

    await TestBed.configureTestingModule({
      providers: [
        { provide: MatSnackBar, useFactory: () => fakeNotificacao },
        NotificacoesService
      ]
    });
    service = TestBed.inject(NotificacoesService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('METHOD: notificar', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // service.notificar();
    });
  });

});
