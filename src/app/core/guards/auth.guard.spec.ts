import { createSpyObj } from 'jest-createspyobj';
import { AuthGuard } from './auth.guard';
import { Router } from '@angular/router';
import { LoaderService } from '@app/core/services/loader.service';
import { NotificacoesService } from '@app/core/services/notificacoes.service';
import { AutenticacaoService } from '../services/autenticacao.service';

describe('AuthGuard', () => {
  let instance: AuthGuard;
  let fakeRouter: jest.Mocked<Router>;
  let fakeAutenticacaoService: jest.Mocked<AutenticacaoService>;
  let fakeLoader: jest.Mocked<LoaderService>;
  let fakeNotificacao: jest.Mocked<NotificacoesService>;

  function createInstance() {
    instance = new AuthGuard(
      fakeRouter,
      fakeAutenticacaoService,
      fakeLoader,
      fakeNotificacao,
    );
  }

  beforeEach(() => {
    fakeRouter = createSpyObj<Router>(Router, []);
    fakeAutenticacaoService = createSpyObj<AutenticacaoService>(AutenticacaoService, ['estaLogado', 'obterPermissoes']);
    fakeLoader = createSpyObj<LoaderService>(LoaderService, []);
    fakeNotificacao = createSpyObj<NotificacoesService>(NotificacoesService, []);

    createInstance();
  });

  it('should create', () => {
    expect(instance).toBeTruthy();
  });

});
