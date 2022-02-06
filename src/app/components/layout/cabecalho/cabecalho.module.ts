import { CabecalhoComponent } from './cabecalho.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../../../material.module';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CabecalhoComponent, MenuComponent],
  imports: [CommonModule, RouterModule, MaterialModule],
  exports: [CabecalhoComponent],
})
export class CabecalhoModule {}
