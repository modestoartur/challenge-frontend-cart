import { NgModule } from '@angular/core';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { ProdutosModule } from './produtos/produtos.module';

@NgModule({
  imports: [ProdutosModule, CarrinhoModule],
  exports: [ProdutosModule, CarrinhoModule],
})
export class PagesModule {}
