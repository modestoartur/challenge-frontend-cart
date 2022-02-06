import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import Produto from '../models/produto.model';
@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  mockProdutos: Array<Produto> = [
    {
      codigo: 1,
      nome: 'Popular Shoe Trend',
      valor: 499.99,
      avaliacao: 5,
    },
    {
      codigo: 2,
      nome: 'Popular Shoe Funny',
      valor: 399.99,
      avaliacao: 4.8,
    },
    {
      codigo: 3,
      nome: 'Popular Shoe Cool',
      valor: 199.99,
      avaliacao: 4.6,
    },
    {
      codigo: 4,
      nome: 'Popular Shoe Dope',
      valor: 599.99,
      avaliacao: 4.5,
    },
    {
      codigo: 5,
      nome: 'Popular Shoe Nice',
      valor: 299.99,
      avaliacao: 4.1,
    },
    {
      codigo: 6,
      nome: 'Popular Shoe Hot',
      valor: 199.99,
      avaliacao: 3,
    },
  ];
  constructor() {}
  async obterVarios(ordenacao = 'avaliacoes'): Promise<any[]> {
    let parametros = new HttpParams();
    parametros = parametros.append('sort_order', ordenacao);
    const url = `${environment.apiAddress}/produtos`;
    // Integrando com backend:
    // const response = this.http
    //   .get<any[]>(url, {
    //     params: parametros,
    //   })
    //   .toPromise();
    const mockOrdenadoPorAvaliacao = [
      {
        codigo: 1,
        nome: 'Popular Shoe Trend',
        valor: 499.99,
        avaliacao: 5,
      },
      {
        codigo: 2,
        nome: 'Popular Shoe Funny',
        valor: 399.99,
        avaliacao: 4.8,
      },
      {
        codigo: 3,
        nome: 'Popular Shoe Cool',
        valor: 199.99,
        avaliacao: 4.6,
      },
      {
        codigo: 4,
        nome: 'Popular Shoe Dope',
        valor: 599.99,
        avaliacao: 4.5,
      },
      {
        codigo: 5,
        nome: 'Popular Shoe Nice',
        valor: 299.99,
        avaliacao: 4.1,
      },
      {
        codigo: 6,
        nome: 'Popular Shoe Hot',
        valor: 199.99,
        avaliacao: 3,
      },
    ];
    const mockOrdenadoPorValorCrescente = [
      {
        codigo: 1,
        nome: 'Popular Shoe Trend',
        valor: 199.99,
        avaliacao: 3,
      },
      {
        codigo: 2,
        nome: 'Popular Shoe Funny',
        valor: 299.99,
        avaliacao: 4.2,
      },
      {
        nome: 'Popular Shoe Cool',
        valor: 399.99,
        avaliacao: 4.6,
      },
      {
        codigo: 4,
        nome: 'Popular Shoe Dope',
        valor: 499.99,
        avaliacao: 4.5,
      },
      {
        codigo: 5,
        nome: 'Popular Shoe Nice',
        valor: 599.99,
        avaliacao: 4.9,
      },
      {
        nome: 'Popular Shoe Hot',
        valor: 699.99,
        avaliacao: 4.1,
      },
    ];
    const mockOrdenadoPorValorDecrescente = [
      {
        nome: 'Popular Shoe Hot',
        valor: 699.99,
        avaliacao: 3,
      },
      {
        codigo: 1,
        nome: 'Popular Shoe Trend',
        valor: 599.99,
        avaliacao: 5,
      },
      {
        codigo: 2,
        nome: 'Popular Shoe Funny',
        valor: 499.99,
        avaliacao: 4.8,
      },
      {
        codigo: 3,
        nome: 'Popular Shoe Cool',
        valor: 399.99,
        avaliacao: 4.6,
      },
      {
        codigo: 4,
        nome: 'Popular Shoe Dope',
        valor: 299.99,
        avaliacao: 4.5,
      },
      {
        codigo: 5,
        nome: 'Popular Shoe Nice',
        valor: 199.99,
        avaliacao: 4.1,
      },
    ];
    switch (ordenacao) {
      case 'valor_crescente':
        return mockOrdenadoPorValorCrescente;
      case 'valor_descrescente':
        return mockOrdenadoPorValorDecrescente;
      default:
        return mockOrdenadoPorAvaliacao;
    }
  }
  obterProduto(codigo: number) {
    const produto = this.mockProdutos.find((p) => p.codigo === codigo);
    return produto;
  }
}
