import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from '@app/app-routing.module';
import { AvisoComponent } from './aviso.component';

@NgModule({
  declarations: [AvisoComponent],
  imports: [AppRoutingModule, CommonModule, FormsModule, MatSnackBarModule],
  exports: [AvisoComponent],
})
export class AvisoModule {}
