import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CoreModule } from '@app/core/core.module';
import { MaterialModule } from './../../material.module';

@NgModule({
  imports: [CoreModule, MaterialModule],
  declarations: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProdutosModule {}
