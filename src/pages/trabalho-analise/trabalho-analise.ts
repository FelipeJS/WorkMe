import { TrabalhoAnaliseDetalhe } from './../trabalho-analise-detalhe/trabalho-analise-detalhe';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'trabalho-analise',
  templateUrl: 'trabalho-analise.html'
})
export class TrabalhoAnalise {
  itens;

  constructor(public navCtrl: NavController) {
    this.initializeItens();
  }

  initializeItens() {
    this.itens = [{
      'nmPessoa': 'Roberto Arantes',
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
  }

  viewItem(item){
    this.navCtrl.push(TrabalhoAnaliseDetalhe, {
      item:item
    });
  }

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
