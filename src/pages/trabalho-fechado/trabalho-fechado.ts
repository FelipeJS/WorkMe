import { TrabalhoFechadoDetalhe } from './../trabalho-fechado-detalhe/trabalho-fechado-detalhe';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'trabalho-fechado',
  templateUrl: 'trabalho-fechado.html'
})
export class TrabalhoFechado {

  itens = [{
    'nmUsuario': 'Allan Braga',
    'nrCpf': '533.994.111-11',
    'dsEmail': 'allansbraga@gmail.com',
    'nrTelefone': '62 993714512',
    'dsEmpresa': 'Hugol',
    'dsEndereco': 'Rua A20 N15',
    'dsBairro': 'Recanto do Bosque',
    'dsCidade': 'Goiânia',
    'dsEstado': 'GO',
    'dsServico': 'Internet',
    'dhServico': '03/04/2017 11:10',
    'dsDetalhe': 'Minha internet parou de funcionar',
    'dsStatus': 'FECHADO',
    'dsFuncionario': 'Eliakin Delbo'
  }];

  constructor(public navCtrl: NavController) {

  }

  viewItem(item){
    this.navCtrl.push(TrabalhoFechadoDetalhe, {
      item:item
    });
  }
}
