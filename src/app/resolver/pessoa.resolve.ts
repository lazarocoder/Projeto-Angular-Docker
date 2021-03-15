import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import { Pessoa } from "@models/pessoa.model";
import {EMPTY, Observable, of} from "rxjs";
import {flatMap} from "rxjs/operators";
import { PessoaService } from "../services/pessoa.service";


@Injectable()
export class PessoaResolve implements Resolve<Pessoa> {

  constructor(private pessoaService: PessoaService,
              private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Pessoa>
    | Promise<Pessoa>
    | Pessoa {
    const id = route.params['id'];
    if(id) {
      return this.pessoaService.buscar(route.params['id']).pipe(flatMap(res => {
        if (res.body) {
          return of(res.body);
        } else {
          this.router.navigate(['/pessoas']);
          return null;
        }
      }));
    } else {
      return of(new Pessoa());
    }
  }

}
