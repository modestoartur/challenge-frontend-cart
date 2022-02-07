import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { AppComponent } from './app.component';
import { LoaderService } from './core/services/loader.service';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let fakeLoader: jest.Mocked<LoaderService>;

  beforeEach(async () => {
    fakeLoader = createSpyObj<LoaderService>(LoaderService, []);

    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [
        { provide: LoaderService, useFactory: () => fakeLoader },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
