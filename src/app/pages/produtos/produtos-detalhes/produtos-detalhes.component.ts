import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Produto from '@app/core/models/produto.model';
import { CarrinhoService } from '@app/core/services/carrinho.service';
import { NotificacoesService } from '@app/core/services/notificacoes.service';
import { ProdutosService } from '@app/core/services/produtos.service';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../../core/services/loader.service';
@Component({
  selector: 'app-produtos-detalhes',
  templateUrl: './produtos-detalhes.component.html',
  styleUrls: ['./produtos-detalhes.component.scss'],
})
export class ProdutosDetalhesComponent implements OnInit, OnDestroy {
  produtos: Array<Produto>;
  produtosRelacionados: Array<Produto>;
  produto: Produto;
  tamanhos = [
    {
      valor: 37,
      selecionado: false,
    },
    {
      valor: 38,
      selecionado: false,
    },
    {
      valor: 39,
      selecionado: false,
    },
    {
      valor: 40,
      selecionado: false,
    },
    {
      valor: 41,
      selecionado: false,
    },
    {
      valor: 42,
      selecionado: false,
    },
  ];
  cores = [
    {
      valor: 'Vermelho',
      selecionado: false,
    },
    {
      valor: 'Amarelo',
      selecionado: false,
    },
    {
      valor: 'Marrom',
      selecionado: false,
    },
    {
      valor: 'Azul',
      selecionado: false,
    },
  ];
  private routeSub: Subscription;
  constructor(
    private notificacoes: NotificacoesService,
    private loader: LoaderService,
    private produtosService: ProdutosService,
    private route: ActivatedRoute,
    private router: Router,
    private carrinhoService: CarrinhoService
  ) {}
  /**
   * Método responsável por inicializar o componente obtendo os produtos
   * relacionados e se inscrevendo para qualquer mudanca no id da url
   * assim como obter o produto da url em questao
   */
  async ngOnInit() {
    this.obterProdutosRelacionados();
    this.routeSub = this.route.params.subscribe(async (params) => {
      const codigo = Number(params.id);
      if (codigo > 0) this.obterProduto(codigo);
    });
  }
  /**
   * Obtem um produto pelo seu codigo
   * @param codigo Codigo do produto que sera detalhado
   */
  async obterProduto(codigo = this.produto.codigo) {
    try {
      const data = await this.produtosService.obterProduto(Number(codigo));
      this.produto = data;
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
   * Adiciona um produto ao carrinho
   * @param produto Produto que sera adicionado ao carrinho
   * @param produtoRelacionado Se ele é um produto relacionado ou nao
   */
  adicionarAoCarrinho(produto, produtoRelacionado: boolean = false) {
    if (produtoRelacionado === false) {
      const corSelecionada = this.cores.find((cor) => cor.selecionado);
      const tamanhoSelecionado = this.tamanhos.find(
        (tamanho) => tamanho.selecionado
      );
      produto.cor = corSelecionada.valor;
      produto.tamanho = tamanhoSelecionado.valor;
    }
    this.carrinhoService.adicionarAoCarrinho(produto);
  }
  /**
   * Detalha um produto que deseja ser visto com mais detalhes
   * @param produto Produto a ser visualizado
   */
  verProduto(produto) {
    this.router.navigateByUrl(`/produto/${produto.codigo}`);
  }
  /**
   * Obtem os produtos relacionados ao produto em questao
   */
  async obterProdutosRelacionados() {
    const produtos = await this.produtosService.obterVarios();
    this.produtosRelacionados = produtos.splice(0, 3);
  }
  /**
   * Método responsável por desinscrever o componente do evento de mudança de rota
   */
  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
