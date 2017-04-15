import { TrabalhoAnaliseDetalhe } from './../trabalho-analise-detalhe/trabalho-analise-detalhe';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'trabalho-analise',
  templateUrl: 'trabalho-analise.html'
})
export class TrabalhoAnalise {

  itens = [{
    'nmUsuario': 'Roberto Arantes',
    'nrCpf': '533.994.111-11',
    'dsEmail': 'robertobraga@gmail.com',
    'nrTelefone': '62 995452125',
    'dsEmpresa': 'Hugol',
    'dsEndereco': 'Rua A20 N15',
    'dsBairro': 'Bosque',
    'dsCidade': 'Goiânia',
    'dsEstado': 'GO',
    'dsServico': 'Internet',
    'dhServico': '03/04/2017 11:10',
    'dsDetalhe': 'Minha internet parou de funcionar',
    'dsStatus': 'ANALISE',
    'dsFuncionario': 'Eliakin Delbo'
  }];

  constructor(public navCtrl: NavController) {

  }

  viewItem(item){
    this.navCtrl.push(TrabalhoAnaliseDetalhe, {
      item:item
    });
  }
}
