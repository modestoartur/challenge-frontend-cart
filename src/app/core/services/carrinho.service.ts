import { Injectable } from '@angular/core';
import Produto from '../models/produto.model';
import { NotificacoesService } from './notificacoes.service';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  cesta: Array<Produto>;
  constructor(
    private notificacoes: NotificacoesService,
    private storageService: StorageService
  ) {
    if ('carrinho' in localStorage) {
      this.cesta = JSON.parse(localStorage.getItem('carrinho'));
    }
  }
  adicionarAoCarrinho(produto: Produto) {
    let cesta: Array<Produto>;
    if (!produto.quantidade) produto.quantidade = 1;
    cesta =
      'carrinho' in localStorage
        ? (cesta = JSON.parse(localStorage.getItem('carrinho')))
        : (cesta = []);
    const indice: number = cesta.findIndex((p) => p.codigo === produto.codigo);
    indice === -1 ? cesta.push(produto) : cesta[indice].quantidade++;
    this.storageService.setItem('carrinho', JSON.stringify(cesta));
    this.calcularTotal();
    this.notificacoes.notificar('sucesso', 'Produto adicionado ao carrinho.');
  }
  calcularTotal() {
    let soma = 0;
    let cesta = [];
    if ('carrinho' in localStorage) {
      cesta = JSON.parse(localStorage.getItem('carrinho'));
    } else {
      this.storageService.setItem('total', JSON.stringify(0));
    }
    cesta.forEach((produto) => {
      produto.total = produto.quantidade * produto.valor;
      soma += produto.total;
    });
    this.storageService.setItem('total', JSON.stringify(soma));
    return soma;
  }
}
