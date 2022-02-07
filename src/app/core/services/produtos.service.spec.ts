import { TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { ProdutosService } from './produtos.service';

describe('ProdutosService', () => {
  let service: ProdutosService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      providers: [
        ProdutosService
      ]
    });
    service = TestBed.inject(ProdutosService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

});
