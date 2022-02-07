import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { AvisoComponent } from './aviso.component';
import { DOCUMENT } from '@angular/common';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

describe('AvisoComponent', () => {
  let component: AvisoComponent;
  let fixture: ComponentFixture<AvisoComponent>;
  let fakeData: any;
  let fakeDocument: jest.Mocked<Document>;

  beforeEach(async () => {
    fakeData = {} as any;
    fakeDocument = createSpyObj<Document>(Document, []);

    await TestBed.configureTestingModule({
      declarations: [AvisoComponent],
      providers: [
        { provide: MAT_SNACK_BAR_DATA, useValue: fakeData },
        { provide: DOCUMENT, useFactory: () => fakeDocument },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('METHOD: obterIcone', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.obterIcone();
    });
  });

});
