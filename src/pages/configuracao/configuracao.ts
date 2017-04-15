import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'configuracao',
  templateUrl: 'configuracao.html'
})
export class Configuracao {

  itens = [{
    'nmUsuario': 'Felipe Ferreira Campos',
    'nrCpf': '033.894.221-10',
    'dsEmail': 'tecnologiagrave@gmail.com',
    'nrTelefone': '62 993038153',
    'dsEmpresa': 'Hugol',
    'dsEndereco': 'Rua RB04 QD27 LT12',
    'dsBairro': 'Recanto do Bosque',
    'dsCidade': 'Goiânia',
    'dsEstado': 'GO',
    'dsServico': 'Conserto de Computador',
    'dhServico': '03/04/2017 10:10',
    'dsDetalhe': 'Meu computador não está ligando, esbarrei na tomada hoje cedo, não entendo',
    'dsStatus': 'ABERTO'
  }];

  constructor(public navCtrl: NavController) {

  }

 
}
