import { PessoaProvider } from './../../providers/pessoa-provider';
import { ClienteDetalhe } from './../cliente-detalhe/cliente-detalhe';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'cliente',
  templateUrl: 'cliente.html'
})
export class Cliente {
  itens : any[];

  constructor(public navCtrl: NavController, public pessoaProvider: PessoaProvider, 
              public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.getPessoas();
  }

  getPessoas(){
    let load = this.presentLoading();
    this.pessoaProvider.getClientes().subscribe(
      data => this.buildItens(data, load), 
      err => this.errorAlert(err, load)
    );
  }

  buildItens(data, load){
    this.itens = data;
    this.itens = this.itens.filter(item => item.active === 1);
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

  viewItem(item){
    this.navCtrl.push(ClienteDetalhe, {
      item:item
    });
  }
}