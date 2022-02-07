import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from '@app/core/services/autenticacao.service';
import { CarrinhoService } from '@app/core/services/carrinho.service';
import { StorageService } from '../../../core/services/storage.service';
@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent implements OnInit {
  totalCarrinho = 0;
  constructor(
    private storageService: StorageService,
    private carrinhoService: CarrinhoService
  ) {}
  /**
   * Ao iniciar o componente, obtem o total do carrinho
   * e assina para o evento de mudança de total
   */
  ngOnInit() {
    this.carrinhoService.calcularTotal();
    if ('total' in localStorage) {
      this.totalCarrinho = Number(localStorage.getItem('total'));
    }
    this.storageService.watchStorage().subscribe((key) => {
      if (key === 'total') {
        this.totalCarrinho = Number(JSON.parse(localStorage.getItem('total')));
      }
    });
  }
}
