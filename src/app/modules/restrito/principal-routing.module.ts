import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { PrincipalComponent } from './principal.component';

const routes: Routes = [
  {
    path: '', component: PrincipalComponent, children: [
      { path: 'pessoas',loadChildren: () => import('./pessoa/pessoa.module').then(m => m.PessoaModule) , canActivate: [AuthGuardService]}
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
