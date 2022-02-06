import { AvisoComponent } from '@app/components/aviso/aviso.component';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificacoesService {
  constructor(public notificacao: MatSnackBar) {}

  notificar(
    tipo,
    msg,
    error?,
    scrollTop: boolean = false,
    tempo?,
  ): MatSnackBarRef<AvisoComponent> {
    if (scrollTop) window.scroll(0, 0);
    if (tipo === 'erro' && error)
      console.error('[ERRO] : ' + msg, error ? error : undefined);
    return this.notificacao.openFromComponent(AvisoComponent, {
      data: {
        tipo,
        msg,
      },
      verticalPosition: 'top',
      duration: tempo ? tempo : 3000,
    });
  }
}
