import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  quantidadeEmAndamento = 0;
  loading = new Subject<boolean>();
  constructor(@Inject(DOCUMENT) public document: Document) {}
  /**
   * Inicia o loader
   */
  start(): void {
    setTimeout(() => {
      this.quantidadeEmAndamento++;
      this.loading.next(true);
    });
  }
  /**
   * Finaliza o loader
   */
  stop(): void {
    setTimeout(() => {
      if (this.quantidadeEmAndamento > 0) {
        this.quantidadeEmAndamento--;
      }
      if (this.quantidadeEmAndamento === 0) {
        this.loading.next(false);
      }
    });
  }
}
