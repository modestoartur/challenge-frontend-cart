import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificacoesService } from './notificacoes.service';

describe('NotificacoesService', () => {
  let service: NotificacoesService;

  beforeEach(() => {
    const matSnackBarStub = () => ({
      openFromComponent: (avisoComponent, object) => ({})
    });
    TestBed.configureTestingModule({
      providers: [
        NotificacoesService,
        { provide: MatSnackBar, useFactory: matSnackBarStub }
      ]
    });
    service = TestBed.inject(NotificacoesService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
