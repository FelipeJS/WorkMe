import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SolicitacaoDetalhe } from '../solicitacao-detalhe/solicitacao-detalhe';

@Component({
  selector: 'solicitacao',
  templateUrl: 'solicitacao.html'
})
export class Solicitacao {
  itens;

  constructor(public navCtrl: NavController) {
    this.initializeItens();
  }

  initializeItens() {
    this.itens = [{
      'nmPessoa': 'Felipe Ferreira Campos',
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
  }

  viewItem(item){
    this.navCtrl.push(SolicitacaoDetalhe, {
      item:item
    });
  }

  //Metodo para filtrar os itens
  getItens(ev) {
    // Reset items back to all of the items
    this.initializeItens();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.itens = this.itens.filter((item) => {
        return (item.nmPessoa.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
