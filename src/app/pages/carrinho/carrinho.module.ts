import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CoreModule } from '@app/core/core.module';
import { CarrinhoListagemComponent } from './carrinho-listagem/carrinho-listagem.component';

@NgModule({
  imports: [CoreModule],
  declarations: [CarrinhoListagemComponent],
  exports: [CarrinhoListagemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarrinhoModule {}
