import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import { Pessoa } from "@models/pessoa.model";
import { SERVER_API_URL } from "@utils/constants";


@Injectable({ providedIn: "root" })
export class PessoaService {

  constructor(private http: HttpClient) { }

  adicionar(pessoa: Pessoa): Observable<HttpResponse<Pessoa>> {
    return this.http.post<Pessoa>(
      SERVER_API_URL + 'pessoas',
      JSON.stringify(pessoa),
      { observe: "response" })
      .pipe(map((res: HttpResponse<Pessoa>) => res));
  }

  atualizar(id: number, pessoa: Pessoa): Observable<HttpResponse<Pessoa>> {
    return this.http.put<Pessoa>(
      SERVER_API_URL + `pessoas/${id}`,
      pessoa,
      { observe: "response" })
      .pipe(map((res: HttpResponse<Pessoa>) => res));
  }

  listar(): Observable<HttpResponse<Pessoa[]>> {
    return this.http.get<Pessoa[]>(SERVER_API_URL + '/pessoas',
      { observe: "response" })
      .pipe(map((res: HttpResponse<Pessoa[]>) => res));
  }

  buscar(id: number): Observable<HttpResponse<Pessoa>> {
    return this.http.get<Pessoa>(SERVER_API_URL + `/pessoas/${id}`,
      { observe: "response" })
      .pipe(map((res: HttpResponse<Pessoa>) => res));
  }

  excluir(id: number): Observable<HttpResponse<{ }>> {
    return this.http.delete(SERVER_API_URL + `/pessoas/${id}`,
      { observe: "response" });
  }

}
