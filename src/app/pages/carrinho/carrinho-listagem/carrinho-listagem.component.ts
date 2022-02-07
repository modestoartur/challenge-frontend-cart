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
  /**
   * @description Inicia o component do carrinho com o itens cacheados e calcula seu total
   */
  ngOnInit(): void {
    if ('carrinho' in localStorage) {
      this.cesta = JSON.parse(localStorage.getItem('carrinho'));
      this.carrinhoService.calcularTotal();
    }
  }
  /**
   * Aumenta a quantidade de um item do carrinho
   * @param produto Produto a ser aumentado a quantidade
   */
  aumentarQuantidade(produto: Produto) {
    const indice = this.cesta.indexOf(produto);
    this.cesta[indice].quantidade++;
    this.atualizarCache();
  }
  /**
   * Diminui a quantidade de um item do carrinho
   * @param produto Produto a ser diminuido a quantidade
   */
  diminuirQuantidade(produto: Produto) {
    const indice = this.cesta.indexOf(produto);
    if (produto.quantidade > 1) {
      this.cesta[indice].quantidade--;
    } else if (produto.quantidade === 1) {
      this.cesta.splice(indice, 1);
    }
    this.atualizarCache();
  }
  /**
   * Atualiza o cache do do carrinho localStorage e recalcula o total
   */
  atualizarCache() {
    this.storageService.setItem('carrinho', JSON.stringify(this.cesta));
    this.carrinhoService.calcularTotal();
  }
}
