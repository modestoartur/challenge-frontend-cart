import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  permissoes = [];
  constructor() {}
  /**
   * Verifica se o usuario esta logado
   * @returns Sempre true pois esta mockado
   */
  estaLogado(): boolean {
    return true;
  }
  /**
   * Obtem as permissoes do usuario
   */
  obterPermissoes() {
    return new Observable((observer) => {
      this.permissoes = [{ produto: true }];
      observer.next(true);
      observer.complete();
    });
  }
}
