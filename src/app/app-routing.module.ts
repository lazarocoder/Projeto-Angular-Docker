import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalModule } from '@modules/restrito/principal.module';
import { LoginComponent } from './modules/login/login.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: 'principal', pathMatch: 'full'}, 
  {path: 'login', component: LoginComponent},
  {path: 'principal', loadChildren: () => import('./modules/restrito/principal.module').then(m => m.PrincipalModule),canActivate:[AuthGuardService]}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
