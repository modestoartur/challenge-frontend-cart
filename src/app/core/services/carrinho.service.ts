import { Injectable } from '@angular/core';
import { NotificacoesService } from './notificacoes.service';
import { StorageService } from './storage.service';
@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  constructor(
    private notificacoes: NotificacoesService,
    private storageService: StorageService
  ) {}
  adicionarAoCarrinho(produto) {
    if (!produto.quantidade) produto.quantidade = 1;
    let cesta = [];
    if ('carrinho' in localStorage) {
      cesta = JSON.parse(localStorage.getItem('carrinho'));
      if (cesta.find((p) => p.codigo === produto.codigo) === undefined) {
        cesta.push(produto);
        this.storageService.setItem('carrinho', JSON.stringify(cesta));
        this.calcularTotal();
        this.notificacoes.notificar(
          'sucesso',
          'Produto adicionado ao carrinho.'
        );
      } else {
        this.notificacoes.notificar(
          'alerta',
          'Produto já foi adicionado ao carrinho.'
        );
      }
    } else {
      this.storageService.setItem('carrinho', JSON.stringify([produto]));
      this.calcularTotal();
      this.notificacoes.notificar('sucesso', 'Produto adicionado ao carrinho.');
    }
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
