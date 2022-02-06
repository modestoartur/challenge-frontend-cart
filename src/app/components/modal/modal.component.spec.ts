import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ModalComponent } from './modal.component';

describe('ModalComponent', () => {
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(() => {
    const matDialogRefStub = () => ({ close: arg => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ModalComponent],
      providers: [{ provide: MatDialogRef, useFactory: matDialogRefStub }]
    });
    fixture = TestBed.createComponent(ModalComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`cabecalho has default value`, () => {
    expect(component.cabecalho).toEqual(`Mensagem de confirmação`);
  });

  it(`titulo has default value`, () => {
    expect(component.titulo).toEqual(`Deseja efetivar essa ação?`);
  });

  it(`txtBotaoConfirmar has default value`, () => {
    expect(component.txtBotaoConfirmar).toEqual(`Sim`);
  });

  it(`txtBotaoCancelar has default value`, () => {
    expect(component.txtBotaoCancelar).toEqual(`Cancelar`);
  });

  describe('confirmar', () => {
    it('makes expected calls', () => {
      const matDialogRefStub: MatDialogRef = fixture.debugElement.injector.get(
        MatDialogRef
      );
      spyOn(matDialogRefStub, 'close').and.callThrough();
      component.confirmar();
      expect(matDialogRefStub.close).toHaveBeenCalled();
    });
  });

  describe('fechar', () => {
    it('makes expected calls', () => {
      const matDialogRefStub: MatDialogRef = fixture.debugElement.injector.get(
        MatDialogRef
      );
      spyOn(matDialogRefStub, 'close').and.callThrough();
      component.fechar();
      expect(matDialogRefStub.close).toHaveBeenCalled();
    });
  });
});
