import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoaderService } from './loader.service';
@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  permissoes = [];
  constructor(private loader: LoaderService) {}
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
  obterUsuario() {
    return {
      nome: 'Artur Modesto',
      email: 'modestoartur@gmail.com',
    };
  }
  obterNomeUsuario(): string | null {
    return 'Artur Modesto';
  }
  obterEmailUsuario(): string | null {
    return 'modestoartur@gmail.com';
  }
  logout() {
    this.loader.start();
    localStorage.clear();
    this.loader.stop();
  }
  codificar(str: string) {
    return btoa(str);
  }
  decodificar(str: string) {
    return atob(str);
  }
}
