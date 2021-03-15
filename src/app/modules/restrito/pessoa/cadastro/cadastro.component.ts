import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from '@models/pessoa.model';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  formCadastro: FormGroup;
  sexos:{value:string,label:string}[] = [
    {value:"F",label:"Feminino"},
    {value:"M",label:"Masculino"}
  ];
  constructor(private fb: FormBuilder,private pessoaService:PessoaService, private router:Router,
    private activatedRoute: ActivatedRoute) {

     }

  ngOnInit(): void {
    this.formCadastro = this.fb.group({
      id: undefined,
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      sexo: ['', Validators.required],
      email: ['', Validators.required],
      naturalidade: ['', Validators.required],
      nacionalidade: ['', Validators.required],
      dataNascimento: ['']
    });
    this.activatedRoute.data.subscribe(result=>{ 
      if(result.pessoa){
        result.pessoa.dataNascimento = new Date(result.pessoa.dataNascimento);
        this.formCadastro.patchValue(result.pessoa);
      }
    });
  }

  salvar() { 
    if(this.formCadastro.valid){ 
      const pessoa:Pessoa = this.formCadastro.getRawValue();
      if (pessoa.id == null || pessoa.id === undefined) {
        this.pessoaService.adicionar(pessoa).subscribe(res => {
          this.router.navigate(['../'], { relativeTo: this.activatedRoute });
        });
      } else {
        this.pessoaService.atualizar(pessoa.id, pessoa).subscribe(res => {
          this.router.navigate(['../../'], { relativeTo: this.activatedRoute });
        });
      }
    }else{
      console.log("INVALIDO");
    }
  }
}
