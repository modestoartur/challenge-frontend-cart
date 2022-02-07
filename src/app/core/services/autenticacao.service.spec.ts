import { TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { AutenticacaoService } from './autenticacao.service';

describe('AutenticacaoService', () => {
  let service: AutenticacaoService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      providers: [
        AutenticacaoService
      ]
    });
    service = TestBed.inject(AutenticacaoService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

});
