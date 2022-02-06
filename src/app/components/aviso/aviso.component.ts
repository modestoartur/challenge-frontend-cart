import {
  Component,
  Inject,
  OnDestroy,
  OnInit
  } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-aviso',
  templateUrl: './aviso.component.html',
  styleUrls: ['./aviso.component.scss'],
})
export class AvisoComponent {
  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    @Inject(DOCUMENT) public document: Document,
  ) {}

  obterIcone(): string {
    switch (this.data.tipo) {
      case 'sucesso':
        return 'check_circle';
      case 'erro':
        return 'error_outline';
      case 'alerta':
        return 'warning_amber';
    }
  }
}
