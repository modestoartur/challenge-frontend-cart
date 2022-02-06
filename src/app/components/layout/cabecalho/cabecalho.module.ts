import { NgModule } from '@angular/core';
import { CoreModule } from '../../../core/core.module';
import { CabecalhoComponent } from './cabecalho.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [CabecalhoComponent, MenuComponent],
  imports: [CoreModule],
  exports: [CabecalhoComponent],
})
export class CabecalhoModule {}
