import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrimengModule } from '@modules/shared/primeng/primeng.module';
import { PrincipalRoutingModule } from './principal-routing.module';
import { PrincipalComponent } from './principal.component';



@NgModule({
  declarations: [PrincipalComponent],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    PrimengModule
  ]
})
export class PrincipalModule { }
