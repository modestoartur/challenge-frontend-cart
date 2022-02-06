import { CabecalhoModule } from './cabecalho/cabecalho.module';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { MaterialModule } from '@app/material.module';
import { NgModule } from '@angular/core';
import { RodapeModule } from './rodape/rodape.module';
import { RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    RouterModule,
    CabecalhoModule,
    ScrollingModule,
    RodapeModule,
    MaterialModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
