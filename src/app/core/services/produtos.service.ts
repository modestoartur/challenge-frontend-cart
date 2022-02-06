import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  constructor(public http: HttpClient) {}
  async obter(
    secao?: string,
    codigo?: string,
    tipo?: string,
  ): Promise<any[] | undefined> {
    let parametros = new HttpParams();
    if (secao) parametros = parametros.append('secao_id', secao);
    if (codigo) parametros = parametros.append('codigo_produto', codigo);
    if (tipo) parametros = parametros.append('tipo', tipo);
    const url = `${environment.apiAddress}/produtos`;
    const response = this.http
      .get<any[]>(url, {
        params: parametros,
      })
      .toPromise();
    return response;
  }
  async obterVarios(
    pagina: string,
    limite: string,
    ordenacao: string,
    secao?: string,
    tipo?: string,
    codigo?: string,
    marca?: string,
    status?: string,
    pesquisa?: string,
    produtoOrigem?: string,
  ): Promise<any[]> {
    let parametros = new HttpParams();
    parametros = parametros.append('pagina', pagina);
    parametros = parametros.append('limite', limite);
    parametros = parametros.append('sort_order', ordenacao);
    if (secao) {
      parametros = parametros.append('secao_id', secao);
    }
    if (tipo) {
      parametros = parametros.append('tipo', tipo);
    }
    if (codigo) {
      parametros = parametros.append('codigo_produto', codigo);
    }
    if (marca) {
      parametros = parametros.append('marca', marca);
    }
    if (status) {
      parametros = parametros.append('status', status);
    }
    if (pesquisa) {
      parametros = parametros.append('pesquisa', pesquisa);
    }
    if (produtoOrigem) {
      parametros = parametros.append('produto_origem', produtoOrigem);
    }
    const url = `${environment.apiAddress}/produtos`;
    const response = this.http
      .get<any[]>(url, {
        params: parametros,
      })
      .toPromise();
    return response;
  }
  async obterConsultaMassivo(
    pagina: string,
    limite: string,
    secao: string,
    descricao?: string,
    codigos?: string,
    novos?: string,
  ): Promise<any[]> {
    let parametros = new HttpParams();
    parametros = parametros.append('pagina', pagina);
    parametros = parametros.append('limite', limite);
    parametros = parametros.append('secao_id', secao);
    if (descricao) {
      parametros = parametros.append('descricao', descricao);
    }
    if (codigos) {
      const lista = codigos.split(';');
      lista.forEach((codigo) => {
        if (codigo) {
          parametros = parametros.append('codigo_produto', codigo);
        }
      });
    }
    if (novos) {
      parametros = parametros.append('incluir_novos', novos);
    }
    const url = `${environment.apiAddress}/produtos/massivo`;
    const response = this.http
      .get<any[]>(url, {
        params: parametros,
      })
      .toPromise();
    return response;
  }
  async criar(payload: any): Promise<any> {
    const url = `${environment.apiAddress}/produtos`;
    const response = await this.http.post<any>(url, payload).toPromise();
    return response;
  }
  atualizar(codigo: any, secao: any, tipo: any, payload: any): Observable<any> {
    const url = `${environment.apiAddress}/produtos/${codigo}?secao_id=${secao}&tipo=${tipo}`;
    return this.http.patch<any>(url, payload);
  }
  async consumidorKafka(codigo: string, tipo: string) {
    let parametros = new HttpParams();
    parametros = parametros.append('codigo_produto', codigo);
    parametros = parametros.append('tipo', tipo);
    const url = `${environment.apiAddress}/produtos/replica`;
    const response = this.http
      .get<any[]>(url, {
        params: parametros,
      })
      .toPromise();
    return response;
  }
  async buscar(pesquisa: string) {
    let parametros = new HttpParams();
    parametros = parametros.append('pesquisa', pesquisa);
    const url = `${environment.apiAddress}/produtos`;
    const response = this.http
      .get<any[]>(url, {
        params: parametros,
      })
      .toPromise();
    return response;
  }
  async obterPorID(id: string) {
    let parametros = new HttpParams();
    parametros = parametros.append('codigo_produto', id);
    const url = `${environment.apiAddress}/produtos`;
    const response = this.http
      .get<any[]>(url, {
        params: parametros,
      })
      .toPromise();
    return response;
  }
  async obterSecoes(pagina: string, limite: string) {
    let parametros = new HttpParams();
    parametros = parametros.append('pagina', pagina);
    parametros = parametros.append('limite', limite);
    const url = `${environment.apiAddress}/secoes`;
    const response = this.http
      .get<any[]>(url, {
        params: parametros,
      })
      .toPromise();
    return response;
  }
  async obterTotal(secaoId: string): Promise<any[] | undefined> {
    let parametros = new HttpParams();
    parametros = parametros.append('id', secaoId);
    const url = `${environment.apiAddress}/secoes/${secaoId}`;
    const response = this.http.get<any[]>(url).toPromise();
    return response;
  }
  async obterTotalEmAlteracao(): Promise<any[]> {
    let parametros = new HttpParams();
    parametros = parametros.append('produto_sortimento_status', 'EM_ALTERACAO');
    parametros = parametros.append('pagina', '1');
    parametros = parametros.append('limite', '1');
    const url = `${environment.apiAddress}/produtos`;
    const response: any = this.http
      .get<any[]>(url, {
        params: parametros,
      })
      .toPromise();
    return response;
  }
  async obterProdutosEmAnalise(
    pagina: string,
    limite: string,
    secao: string,
    sortimento: any,
  ): Promise<any[]> {
    let parametros = new HttpParams();
    parametros = parametros.append('pagina', pagina);
    parametros = parametros.append('limite', limite);
    parametros = parametros.append('id', secao);
    if (sortimento.bandeira?.id) {
      parametros = parametros.append('bandeira_id', sortimento.bandeira.id);
    }
    if (sortimento.publico?.id) {
      parametros = parametros.append('publico_id', sortimento.publico.id);
    }
    if (sortimento.local?.id) {
      parametros = parametros.append('local_id', sortimento.local.id);
    }
    if (sortimento.regiao_sortimento?.id) {
      parametros = parametros.append(
        'regiao_sortimento_id',
        sortimento.regiao_sortimento.id,
      );
    }
    if (sortimento.tamanho?.id) {
      parametros = parametros.append('tamanho_id', sortimento.tamanho.id);
    }
    const url = `${environment.apiAddress}/secoes/${secao}/sortimentos/produtos`;
    const response: any = this.http
      .get<any[]>(url, {
        params: parametros,
      })
      .toPromise();
    return response;
  }
  obterCanal(canal) {
    canal = canal + '';
    switch (canal) {
      case '1':
        return '1 - on-line';
      case '2':
        return '2 - off-line';
      case '3':
        return '3 - ambos';
      default:
        return canal + ' - não definido';
    }
  }
  obterTipoEntrega(tipo) {
    switch (tipo) {
      case 'SL':
        return 'SL - Sai Loja';
      case 'SD':
        return 'SD - Sai Depósito';
      default:
        return tipo + ' - não definido';
    }
  }
  obterStatus(codigo) {
    switch (codigo) {
      case 'A':
        return 'A - Em Linha';
      case 'S':
        return 'S - Fora de Linha';
      case 'F':
        return 'F - Futuro Fora de Linha';
      case '' || null:
        return '-';
      default:
        return codigo + ' - não definido';
    }
  }
  obterTipo(codigo, concatenado = true) {
    switch (codigo) {
      case 1:
        return concatenado ? '1 - Mercadoria' : 'MERCADORIA';
      case 2:
        return concatenado ? '2 - Conjunto' : 'CONJUNTO';
      default:
        return concatenado ? codigo + ' - não definido' : 'NÃO DEFINIDO';
    }
  }
  obterVoltagem(codigo) {
    switch (codigo) {
      case '1':
        return '110V';
      case '2':
        return '220V';
      case '3':
        return 'BIV';
      default:
        return 'Sem Voltagem';
    }
  }
  importar(payload) {
    const parametros = new HttpParams();
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json',
    );
    const url = `${environment.apiAddress}/produtos/importacao`;
    const options = {
      headers,
      params: parametros,
    };
    return this.http.post<any>(url, payload, options).toPromise();
  }
}
