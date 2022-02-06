import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoListagemComponent } from './carrinho-listagem/carrinho-listagem.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [CarrinhoListagemComponent],
  imports: [BrowserModule, CommonModule],
})
export class CarrinhoModule {}
