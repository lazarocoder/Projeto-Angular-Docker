import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from '@modules/login/login.component';
import { CadastroComponent } from '@modules/restrito/pessoa/cadastro/cadastro.component';
import { PrincipalComponent } from '@modules/restrito/principal.component';
import { PrincipalModule } from '@modules/restrito/principal.module';
import { PrimengModule } from '@modules/shared/primeng/primeng.module';
import { InputTextModule } from 'primeng/inputtext';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RequestInterceptor } from './interceptor/request-interceptor';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [
    AppComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true }, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
