import { DOCUMENT } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit, OnDestroy {
  // Textos padrões para o cenario de confirmação
  cabecalho = 'Mensagem de confirmação';
  titulo = 'Deseja efetivar essa ação?';
  subtitulo = '';
  txtBotaoConfirmar = 'Sim';
  txtBotaoCancelar = 'Cancelar';
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public dados: any,
    @Inject(DOCUMENT) public document: Document,
  ) {
    // Garantia de que nao vamos scrollar enquanto a modal estiver aberta
    if (document.getElementById('body')) {
      document.getElementById('body').style.overflowY = 'hidden';
    }
  }
  ngOnInit() {
    // this.document.documentElement.scrollTop = 0;
    // Se tiver texto, troca os textos para usar a modal em outros fluxos
    if (this.dados.titulo) this.titulo = this.dados.titulo;
    if (this.dados.subtitulo) this.subtitulo = this.dados.subtitulo;
    if (this.dados.txtBotaoConfirmar)
      this.txtBotaoConfirmar = this.dados.txtBotaoConfirmar;
    if (this.dados.txtBotaoCancelar)
      this.txtBotaoCancelar = this.dados.txtBotaoCancelar;
  }
  confirmar() {
    return this.dialogRef.close(true);
  }
  fechar() {
    return this.dialogRef.close(false);
  }
  ngOnDestroy() {
    // Garantia de que voltaremos a scrollar quando fechar
    if (document.getElementById('body')) {
      document.getElementById('body').style.overflowY = 'scroll';
    }
  }
}
