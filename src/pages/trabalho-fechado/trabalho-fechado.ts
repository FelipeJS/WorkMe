import { SolicitacaoProvider } from '../../providers/solicitacao-provider';
import { TrabalhoFechadoDetalhe } from './../trabalho-fechado-detalhe/trabalho-fechado-detalhe';
import { Component } from '@angular/core';
import { LoadingController, AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'trabalho-fechado',
  templateUrl: 'trabalho-fechado.html'
})
export class TrabalhoFechado {
  itens = [];

  constructor(public navCtrl: NavController, public solicitacaoProvider: SolicitacaoProvider, 
      public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.getSolicitacoes();
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
  
  getSolicitacoes(){
    let load = this.presentLoading();
    this.solicitacaoProvider.getSolicitacoesFechadas().subscribe(
      data => this.buildItens(data, load), 
      err => this.errorAlert(err, load)
    );
  }

  buildItens(data, load){
    this.itens = data;
    load.dismiss();
  }

  errorAlert(err, load) {
    load.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Falhou!',
      subTitle: 'Verifique sua conexão',
      buttons: ['Ok']
    });
    alert.present();
    console.log(err);
  }

  presentLoading() {
    let load = this.loadingCtrl.create({
      content: 'Buscando...'
    });
    load.present();
    return load;
  }

  viewItem(item){
    this.navCtrl.push(TrabalhoFechadoDetalhe, {
      item:item
    });
  }
}