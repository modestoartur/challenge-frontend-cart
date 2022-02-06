import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  ordenacao: string;
  produtos: Array<Produto>;
  constructor(
    public loader: LoaderService,
    private produtosService: ProdutosService,
    private notificacoes: NotificacoesService,
    private route: ActivatedRoute
  ) {
    if (this.route.snapshot.queryParamMap.get('produto')) {
      this.codigo = this.route.snapshot.queryParamMap.get('produto');
    }
  }
  ngOnInit(): void {
    if (this.codigo !== '') {
      this.consultar(this.codigo);
    }
  }
  async obterProdutos(secao?, tipo?, codigo?) {
    try {
      const data: any = await this.produtosService.obterVarios(
        '1',
        '1',
        this.ordenacao,
        secao !== '0' ? secao : undefined,
        tipo !== 0 ? tipo : undefined,
        codigo !== '' ? codigo : undefined
      );
      this.produtos = data.items;
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
  async consultar(codigo) {
    try {
      this.loader.start();
      this.obterProdutos(codigo ? codigo : undefined);
      this.loader.stop();
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
  ordenar() {
    this.ordenacao === 'desc'
      ? (this.ordenacao = 'asc')
      : (this.ordenacao = 'desc');
  }
}
