import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { LoaderService } from '@app/core/services/loader.service';
import { NotificacoesService } from '@app/core/services/notificacoes.service';
import { Observable } from 'rxjs';
import { AutenticacaoService } from '../services/autenticacao.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    public router: Router,
    public autenticacaoService: AutenticacaoService,
    public loader: LoaderService,
    public notificacao: NotificacoesService
  ) {}
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const observavel: Observable<boolean> = new Observable((observer): any => {
      if (this.autenticacaoService.estaLogado() === true) {
        if ('permissoes' in localStorage) {
          this.autenticacaoService.permissoes = JSON.parse(
            localStorage.getItem('permissoes')
          );
          observer.next(true);
          observer.complete();
        } else {
          this.autenticacaoService.obterPermissoes().subscribe((resposta) => {
            this.autenticacaoService.permissoes = [resposta];
            observer.next(true);
            observer.complete();
          });
        }
      } else {
        observer.next(false);
        observer.complete();
      }
    });
    return observavel;
  }
}
