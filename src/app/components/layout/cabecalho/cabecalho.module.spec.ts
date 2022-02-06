import { TestBed } from '@angular/core/testing';
import { CabecalhoModule } from './cabecalho.module';

describe('CabecalhoModule', () => {
  let pipe: CabecalhoModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CabecalhoModule] });
    pipe = TestBed.inject(CabecalhoModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
