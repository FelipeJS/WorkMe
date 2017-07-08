import { SolicitacaoProvider } from '../../providers/solicitacao-provider';
import { TrabalhoAnaliseDetalhe } from './../trabalho-analise-detalhe/trabalho-analise-detalhe';
import { Component } from '@angular/core';
import { LoadingController, AlertController, NavController } from 'ionic-angular';

@Component({
  selector: 'trabalho-analise',
  templateUrl: 'trabalho-analise.html'
})
export class TrabalhoAnalise {
  itens = [];
  itensCopy = [];

  constructor(public navCtrl: NavController, public solicitacaoProvider: SolicitacaoProvider, 
      public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.getSolicitacoes();
  }
  
  getSolicitacoes(){
    let load = this.presentLoading();
    this.solicitacaoProvider.getSolicitacoesAnalisadas().subscribe(
      data => this.buildItens(data, load), 
      err => this.errorAlert(err, load)
    );
  }

  buildItens(data, load){
    this.itens = data;
    this.itensCopy = data;
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

  retoreItens(){
    this.itens = this.itensCopy;
  }

  getItemsById(ev) {
    this.retoreItens();

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.itens = this.itens.filter((item) => {
        return item.cdSolicitacao == val;
      });
    }
  }

  getItemsByName(ev) {
    this.retoreItens();

    var val = ev.target.value;

    if (val && val.trim() != '') {
      this.itens = this.itens.filter((item) => {
        return (item.user.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  viewItem(item){
    this.navCtrl.push(TrabalhoAnaliseDetalhe, {
      item:item
    });
  }
}