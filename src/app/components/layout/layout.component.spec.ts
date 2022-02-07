import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { LayoutComponent } from './layout.component';
import { Router } from '@angular/router';
import { AutenticacaoService } from '@app/core/services/autenticacao.service';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  let fakeRouter: jest.Mocked<Router>;
  let fakeAutenticacaoService: jest.Mocked<AutenticacaoService>;

  beforeEach(async () => {
    fakeRouter = createSpyObj<Router>(Router, []);
    fakeAutenticacaoService = createSpyObj<AutenticacaoService>(AutenticacaoService, []);

    await TestBed.configureTestingModule({
      declarations: [LayoutComponent],
      providers: [
        { provide: Router, useFactory: () => fakeRouter },
        { provide: AutenticacaoService, useFactory: () => fakeAutenticacaoService },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('METHOD: ngOnInit', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.ngOnInit();
    });
  });

  describe('METHOD: verificarLinkAtivo', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // component.verificarLinkAtivo();
    });
  });

});
