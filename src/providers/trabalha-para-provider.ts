import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TrabalhaParaProvider {

  api:string = 'http://localhost:9090/trabalhaPara/';

  constructor(public http: Http) {}

  verificarPerfil(){
    return this.http.get(this.api + 'listar').map(res => res.json())
  }

  listarFuncionarios(){
    return this.http.get(this.api + 'listarFuncionarios').map(res => res.json())
  }

  adicionarFuncionario(cdUsuarioFuncionario){
    return this.http.get(this.api + 'salvar?cdUsuarioFuncionario=' + cdUsuarioFuncionario).map(res => res.json())
  }

  removerFuncionario(cdUsuarioFuncionario){
    return this.http.get(this.api + 'excluir?cdUsuarioFuncionario=' + cdUsuarioFuncionario).map(res => res.json())
  }
}