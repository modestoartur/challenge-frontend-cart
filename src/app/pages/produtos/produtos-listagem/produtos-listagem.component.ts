import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Produto from '@app/core/models/produto.model';
import { CarrinhoService } from '@app/core/services/carrinho.service';
import { LoaderService } from '@app/core/services/loader.service';
import { ProdutosService } from '@app/core/services/produtos.service';
import { NotificacoesService } from '../../../core/services/notificacoes.service';

@Component({
  selector: 'app-produtos-listagem',
  templateUrl: './produtos-listagem.component.html',
  styleUrls: ['./produtos-listagem.component.scss'],
})
export class ProdutosListagemComponent implements OnInit {
  codigo: string;
  produtos: Array<Produto>;
  ordenacao: string;
  ordenacoes: Array<any> = [
    {
      legenda: 'Melhor Avaliado',
      valor: 'avaliacoes',
    },
    {
      legenda: 'Menor Valor',
      valor: 'valor_crescente',
    },
    {
      legenda: 'Maior Valor',
      valor: 'valor_descrescente',
    },
  ];
  constructor(
    private loader: LoaderService,
    private produtosService: ProdutosService,
    private notificacoes: NotificacoesService,
    private router: Router,
    private carrinhoService: CarrinhoService
  ) {}
  /**
   * Ao iniciar o componente, obtem os produtos
   */
  async ngOnInit() {
    await this.obterProdutos();
  }
  /**
   * Obtem os produtos pela ordenação
   * @param ordenacao O tipo de ordenacao desejada
   */
  async obterProdutos(ordenacao = this.ordenacao) {
    try {
      const data = await this.produtosService.obterVarios(ordenacao);
      this.produtos = data;
    } catch (response) {
      this.notificacoes.notificar(
        'erro',
        !response.error?.mensagem
          ? 'Consulte o log para mais informações'
          : response.error?.mensagem,
        response
      );
    } finally {
      this.loader.stop();
    }
  }
  /**
   * Ordena os produtos
   * @param tipo Tipo de ordenação
   */
  ordenar(tipo) {
    this.loader.start();
    this.ordenacao = tipo;
    setTimeout(() => {
      this.obterProdutos(tipo);
      this.loader.stop();
    }, 1000);
  }
  /**
   * Adiciona um produto ao carrinho
   * @param produto Produto que sera adicionado ao carrinho
   */
  adicionarAoCarrinho(produto) {
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
  /**
   * Detalha um produto que deseja ser visto com mais detalhes
   * @param produto Produto a ser visualizado
   */
  verProduto(produto) {
    this.router.navigateByUrl(`/produto/${produto.codigo}`);
  }
}
