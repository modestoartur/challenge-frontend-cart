import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Produto from '@app/core/models/produto.model';
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
    private router: Router
  ) {}
  async ngOnInit() {
    await this.obterProdutos();
    console.log(this.produtos);
  }
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
  ordenar(tipo) {
    this.loader.start();
    this.ordenacao = tipo;
    setTimeout(() => {
      this.obterProdutos(tipo);
      this.loader.stop();
    }, 1000);
  }
  adicionarAoCarrinho(produto) {
    this.produtosService.adicionarAoCarrinho(produto);
  }
  verProduto(produto) {
    this.router.navigateByUrl(`/produto/${produto.codigo}`);
  }
}
