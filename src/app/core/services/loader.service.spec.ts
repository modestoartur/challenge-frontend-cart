import { TestBed } from '@angular/core/testing';
import { LoaderService } from './loader.service';

describe('LoaderService', () => {
  let service: LoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [LoaderService] });
    service = TestBed.inject(LoaderService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it(`quantidadeEmAndamento has default value`, () => {
    expect(service.quantidadeEmAndamento).toEqual(0);
  });
});
