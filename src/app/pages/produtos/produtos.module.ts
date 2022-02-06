import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CoreModule } from '@app/core/core.module';
import { MaterialModule } from './../../material.module';
import { ProdutosListagemComponent } from './produtos-listagem/produtos-listagem.component';

@NgModule({
  imports: [CoreModule, MaterialModule],
  declarations: [ProdutosListagemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProdutosModule {}
