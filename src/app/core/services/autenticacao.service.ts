import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  permissoes = [];
  constructor() {}
  estaLogado(): boolean {
    return true;
  }
  obterPermissoes() {
    return new Observable((observer) => {
      this.permissoes = [{ produto: true }];
      observer.next(true);
      observer.complete();
    });
  }
}
