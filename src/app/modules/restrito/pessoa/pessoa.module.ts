import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '@modules/shared/primeng/primeng.module';
import { PessoaResolve } from 'src/app/resolver/pessoa.resolve';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PessoaRoutingModule } from './pessoa-routing.module';
import { PessoaComponent } from './pessoa.component';



@NgModule({
  declarations: [PessoaComponent, CadastroComponent],
  imports: [
    CommonModule,
    PessoaRoutingModule,
    PrimengModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PessoaResolve
  ]
})
export class PessoaModule { }
