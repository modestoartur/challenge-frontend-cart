import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacaoService } from '@app/core/services/autenticacao.service';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(
    private router: Router,
    public autenticacaoService: AutenticacaoService
  ) {}
  ngOnInit(): void {}
  verificarLinkAtivo(link) {
    link = link.slice(0, -1);
    return this.router.url.startsWith(link);
  }
}
