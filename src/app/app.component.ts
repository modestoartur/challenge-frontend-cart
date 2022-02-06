import { LoaderService } from './core/services/loader.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from './core/services/carrinho.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0.3 }),
        animate('0.5s ease-out', style({ opacity: 0.3 })),
      ]),
      transition(':leave', [
        style({ opacity: 0.3 }),
        animate('1s ease-in', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  constructor(public loader: LoaderService) {}
  ngOnInit() {}
}
