import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HTTP_STATUS_401 } from '@utils/constants';
import { MessageService } from 'primeng/api';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService, 
    public router: Router, private messageService: MessageService) {

  }

  ngOnInit(): void {
    this.formLogin = this.fb.group({
      login: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  logar() {
    this.loginService.login(this.formLogin.getRawValue()).subscribe(result => {
      if (result) {
        sessionStorage.setItem("basic", btoa('admin:admin'));
        this.router.navigate(['']);
      }
    },err=>{
      if(err && err.status && err.status == HTTP_STATUS_401)
        this.messageService.add({severity:'error', summary: 'Falha no login', detail: 'Usuário ou senha inválidos!'});
      else
      this.messageService.add({severity:'error', summary: 'Falha no login', detail: 'Falha ao realizar o login, entre em contato com o administrador!'});
    });
  }

}
