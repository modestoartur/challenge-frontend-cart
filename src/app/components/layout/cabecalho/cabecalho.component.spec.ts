import { ComponentFixture, TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { CabecalhoComponent } from './cabecalho.component';
import { CarrinhoService } from '@app/core/services/carrinho.service';
import { StorageService } from '../../../core/services/storage.service';

describe('CabecalhoComponent', () => {
  let component: CabecalhoComponent;
  let fixture: ComponentFixture<CabecalhoComponent>;
  let fakeStorageService: jest.Mocked<StorageService>;
  let fakeCarrinhoService: jest.Mocked<CarrinhoService>;

  beforeEach(async () => {
    fakeStorageService = createSpyObj<StorageService>(StorageService, ['watchStorage']);
    fakeCarrinhoService = createSpyObj<CarrinhoService>(CarrinhoService, ['calcularTotal']);

    await TestBed.configureTestingModule({
      declarations: [CabecalhoComponent],
      providers: [
        { provide: StorageService, useFactory: () => fakeStorageService },
        { provide: CarrinhoService, useFactory: () => fakeCarrinhoService },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabecalhoComponent);
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

});
