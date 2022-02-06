import { NgModule } from '@angular/core';
import { ProdutosModule } from './produtos/produtos.module';

@NgModule({
  imports: [
    ProdutosModule
  ],
  exports: [
    ProdutosModule
  ],
})
export class PagesModule {}
