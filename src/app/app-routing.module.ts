import { ProdutosListagemComponent } from './pages/produtos/produtos-listagem/produtos-listagem.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './core/guards';
import { Permissoes } from '@app/core/models/permissoes.enum';
import { ProdutosDetalhesComponent } from './pages/produtos/produtos-detalhes/produtos-detalhes.component';
const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'produtos',
        component: ProdutosListagemComponent,
        canActivate: [AuthGuard],
        data: {
          permissao: Permissoes.consultarProduto,
        },
      },
      {
        path: 'produto/:id',
        component: ProdutosDetalhesComponent,
        canActivate: [AuthGuard],
        data: {
          permissao: Permissoes.consultarProduto,
        },
      },
      { path: '', redirectTo: 'produtos', pathMatch: 'full' },
    ],
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
