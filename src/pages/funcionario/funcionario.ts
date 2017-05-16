import { TrabalhaParaProvider } from './../../providers/trabalha-para-provider';
import { FuncionarioDetalhe } from './../funcionario-detalhe/funcionario-detalhe';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';

@Component({
  selector: 'funcionario',
  templateUrl: 'funcionario.html'
})
export class Funcionario {
  itens : any[];

  constructor(public navCtrl: NavController, public trabalhaParaProvider: TrabalhaParaProvider, 
              public loadingCtrl: LoadingController, private alertCtrl: AlertController) {
    this.getFuncionarios();
  }

  getFuncionarios(){
    let load = this.presentLoading();
    this.trabalhaParaProvider.listarFuncionarios().subscribe(
      data => this.buildItens(data, load), 
      err => this.errorAlert(err, load)
    );
  }

  buildItens(data, load){
    this.itens = data;
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
    this.navCtrl.push(FuncionarioDetalhe, {
      item:item
    });
  }
}