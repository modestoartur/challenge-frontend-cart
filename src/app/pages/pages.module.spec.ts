import { TestBed } from '@angular/core/testing';
import { PagesModule } from './pages.module';

describe('PagesModule', () => {
  let pipe: PagesModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [PagesModule] });
    pipe = TestBed.inject(PagesModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
