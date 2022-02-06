import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
  exports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
})
export class CoreModule {}
