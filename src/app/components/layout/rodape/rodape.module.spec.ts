import { TestBed } from '@angular/core/testing';
import { RodapeModule } from './rodape.module';

describe('RodapeModule', () => {
  let pipe: RodapeModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [RodapeModule] });
    pipe = TestBed.inject(RodapeModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
