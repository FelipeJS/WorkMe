import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PessoaProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PessoaProvider {

  api:string = 'http://localhost:9090/';

  constructor(public http: Http) {}

  getClientes(){
    return this.http.get(this.api + 'listarClientes').map(res => res.json())
  }

  getEmpresas(){
    return this.http.get(this.api + 'listarEmpresas').map(res => res.json())
  }

  getUsuarioLogado(){
    return this.http.get(this.api + 'consultarUsuarioLogado').map(res => res.json())
  }

  getPessoa(userId){
    return this.http.get(this.api + 'consultar?userId=' + userId).map(res => res.json())
  }

  postPessoa(user){
    return this.http.post(this.api + "atualizar", user, {
      method: "POST"
    }).map(
          (res: Response) => {return res.json();}
    );
  }

}
