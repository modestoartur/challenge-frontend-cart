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
  start(scrollTop = true): void {
    setTimeout(() => {
      // Testanso conflitos ao desabilitar rolagem para cima
      // if (scrollTop) window.scroll(0, 0);
      this.document
        .querySelector('#body')
        .setAttribute('style', 'overflow: hidden; pointer-events: none');
      this.quantidadeEmAndamento++;
      this.loading.next(true);
    });
  }
  stop(): void {
    setTimeout(() => {
      if (this.quantidadeEmAndamento > 0) {
        this.quantidadeEmAndamento--;
      }
      if (this.quantidadeEmAndamento === 0) {
        this.loading.next(false);
        this.document
          .querySelector('#body')
          .setAttribute('style', 'overflow: scroll; pointer-events: auto');
      }
    });
  }
}
