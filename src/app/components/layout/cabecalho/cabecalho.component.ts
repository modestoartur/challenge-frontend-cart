import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Permissoes } from '@app/core/models/permissoes.enum';
import { AutenticacaoService } from '@app/core/services/autenticacao.service';
import { version } from 'process';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  public version: string = version;
  contador;
  permissoes: typeof Permissoes = Permissoes;
  idVerificacao: any;
  pronto = false;
  @Output() public sidenavToggle = new EventEmitter();
  isMobile: Observable<BreakpointState> =
    this.breakpointObserver.observe('(max-width: 768px)');
  constructor(
    private router: Router,
    public autenticacaoService: AutenticacaoService,
    public breakpointObserver: BreakpointObserver
  ) {}
  ngOnInit() {}
  onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
  verificarUrlAtual(link) {
    link = link.slice(0, -1);
    return this.router.url.startsWith(link);
  }
  ativo(link) {
    link = link.slice(0, -1);
    return this.router.url.startsWith(link);
  }
  naoAtivo(link) {
    link = link.slice(0, -1);
    return !this.router.url.startsWith(link);
  }
}
