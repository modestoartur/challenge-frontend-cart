import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { RodapeComponent } from './rodape.component';
import { Router } from '@angular/router';

describe('RodapeComponent', () => {
  let component: RodapeComponent;
  let fixture: ComponentFixture<RodapeComponent>;
  let fakeRouter: jest.Mocked<Router>;

  beforeEach(async () => {
    fakeRouter = createSpyObj<Router>(Router, []);

    await TestBed.configureTestingModule({
      declarations: [RodapeComponent],
      providers: [
        { provide: Router, useFactory: () => fakeRouter },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RodapeComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('METHOD: naoAtivo', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.naoAtivo();
    });
  });

});
