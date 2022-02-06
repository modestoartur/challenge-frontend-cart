import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { Permissoes } from '@app/core/models/permissoes.enum';
import { AutenticacaoService } from '@app/core/services/autenticacao.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MenuComponent implements OnInit {
  dropdown: boolean;
  @ViewChild('menu') menu: ElementRef;
  permissoes: typeof Permissoes = Permissoes;
  isMobile: Observable<BreakpointState> =
    this.breakpointObserver.observe('(max-width: 768px)');
  constructor(
    public autenticacaoService: AutenticacaoService,
    public router: Router,
    public breakpointObserver: BreakpointObserver
  ) {}
  ngOnInit(): void {}
  ativo(link) {
    link = link.slice(0, -1);
    return this.router.url.startsWith(link);
  }
}
