import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { version } from '../../../../../package.json';
@Component({
  selector: 'app-rodape',
  templateUrl: './rodape.component.html',
  styleUrls: ['./rodape.component.scss'],
})
export class RodapeComponent {
  public version: string = version;
  rotaPermitida: boolean;
  constructor(private router: Router) {}
  naoAtivo(link) {
    link = link.slice(0, -1);
    return !this.router.url.startsWith(link);
  }
}
