import { ServicoProvider } from './../../providers/servico-provider';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'servico',
  templateUrl: 'servico.html'
})
export class Servico {

  itens = [];
  servico = {};

  constructor(public navCtrl: NavController, public servicoProvider: ServicoProvider, 
        public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.getMyServicos();
  }

  getMyServicos(){
    let load = this.presentLoading();
    this.servicoProvider.getMyServicos().subscribe(
      data => this.buildItens(data, load), 
      err => this.errorAlert(err, load)
    );
  }

  buildItens(data, load){
    this.itens = data;
    load.dismiss();
  }

  getServico(cdServico){
    let load = this.presentLoading();
    this.servicoProvider.getServico(cdServico).subscribe(
      data => this.buildItem(data, load), 
      err => this.errorAlert(err, load)
    );
  }

  buildItem(data, load){
    this.servico = data;
    load.dismiss();
  }
  
  presentLoading() {
    let load = this.loadingCtrl.create({
      content: 'Buscando...'
    });
    load.present();
    return load;
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

  salvarServico(servico){
    let load = this.presentLoading();

    this.servicoProvider.postServico(servico).subscribe(
      data => this.atualizarItens(load), 
      err => this.errorAlert(err, load)
    );
  }

  atualizarItens(load){
    this.servicoProvider.getMyServicos().subscribe(
      data => this.itens = data, 
      err => console.log(err)
    );

    this.servico = {};
    load.dismiss();
  }

  excluirServico(cdServico){
    let load = this.presentLoading();
    this.servicoProvider.deleteServico(cdServico).subscribe(
      data => this.removerItem(data, load), 
      err => this.errorAlert(err, load)
    );
  }

  removerItem(data, load){ 
    for(let i = 0; i < this.itens.length; i++){
      if(this.itens[i].cdServico === data){
        this.itens.splice(i, 1);
      }
    }
    load.dismiss();
  }
}