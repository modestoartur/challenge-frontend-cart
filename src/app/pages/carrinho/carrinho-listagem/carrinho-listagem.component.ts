import { Component, OnInit } from '@angular/core';
import Produto from '@app/core/models/produto.model';
import { CarrinhoService } from '@app/core/services/carrinho.service';
import { StorageService } from '@app/core/services/storage.service';
import { NotificacoesService } from '../../../core/services/notificacoes.service';
@Component({
  selector: 'app-carrinho-listagem',
  templateUrl: './carrinho-listagem.component.html',
  styleUrls: ['./carrinho-listagem.component.scss'],
})
export class CarrinhoListagemComponent implements OnInit {
  cesta: Array<Produto>;
  constructor(
    public notificacoes: NotificacoesService,
    private storageService: StorageService,
    public carrinhoService: CarrinhoService
  ) {}
  ngOnInit(): void {
    if ('carrinho' in localStorage) {
      this.cesta = JSON.parse(localStorage.getItem('carrinho'));
      this.carrinhoService.calcularTotal();
    }
  }
  aumentarQuantidade(produto: Produto) {
    const indice = this.cesta.indexOf(produto);
    this.cesta[indice].quantidade++;
    this.atualizarCache();
  }
  diminuirQuantidade(produto: Produto) {
    const indice = this.cesta.indexOf(produto);
    if (produto.quantidade > 1) {
      this.cesta[indice].quantidade--;
    } else if (produto.quantidade === 1) {
      this.cesta.splice(indice, 1);
    }
    this.atualizarCache();
  }
  atualizarCache() {
    this.storageService.setItem('carrinho', JSON.stringify(this.cesta));
    this.carrinhoService.calcularTotal();
  }
}
