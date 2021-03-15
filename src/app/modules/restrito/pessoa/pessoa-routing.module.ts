import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PessoaResolve } from 'src/app/resolver/pessoa.resolve';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PessoaComponent } from './pessoa.component';

const routes: Routes = [
  {
    path: '', component: PessoaComponent
  },
  {
    path: 'novo', component: CadastroComponent, canActivate: [AuthGuardService]
  },
  {
    path: 'editar/:id', component: CadastroComponent,
    resolve: {
      pessoa: PessoaResolve
    }, canActivate: [AuthGuardService]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
