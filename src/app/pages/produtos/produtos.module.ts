import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CoreModule } from '@app/core/core.module';
import { MaterialModule } from './../../material.module';
import { ProdutosListagemComponent } from './produtos-listagem/produtos-listagem.component';
import { ProdutosDetalhesComponent } from './produtos-detalhes/produtos-detalhes.component';

@NgModule({
  imports: [CoreModule, MaterialModule],
  declarations: [ProdutosListagemComponent, ProdutosDetalhesComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProdutosModule {}
