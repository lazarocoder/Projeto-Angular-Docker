import { Component, OnInit } from '@angular/core';
import { Pessoa } from '@models/pessoa.model';
import { PessoaService } from 'src/app/services/pessoa.service';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.scss']
})
export class PessoaComponent implements OnInit {

  pessoas: Pessoa[] = []; 

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.pessoaService.listar(
    ).subscribe(res => {
      this.pessoas = res.body;
    }, () => { });
  }

  excluir(id: number) {
    this.pessoaService.excluir(id).subscribe(res => {
      this.listar();
    }, () => { });
  }

}
