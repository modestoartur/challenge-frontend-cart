import { TestBed } from '@angular/core/testing';
import { ModalModule } from './modal.module';

describe('ModalModule', () => {
  let pipe: ModalModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ModalModule] });
    pipe = TestBed.inject(ModalModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
