import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [],
  },
];
const isIframe = window !== window.parent && !window.opener;
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      initialNavigation: !isIframe ? 'enabled' : 'disabled', // Não permite que a nvegação inicial seja feita por iFrame
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
