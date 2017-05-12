import { Component } from '@angular/core';
import { ComentarioSolicitacaoProvider } from './../../providers/comentario-solicitacao-provider';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'solicitacao-detalhe.html'
})
export class SolicitacaoDetalhe {

  comentario : String;
  item: any;
  itens = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, 
      private alertCtrl: AlertController, public comentarioSolicitacaoProvider : ComentarioSolicitacaoProvider) {
    this.item = navParams.get('item');
    this.getComentarios();
  }

 getComentarios(){
    let load = this.presentLoading();
    this.comentarioSolicitacaoProvider.getComentarios(this.item.cdSolicitacao).subscribe(
      data => this.buildItens(data, load), 
      err => this.errorAlert(err, load)
    );
  }

  buildItens(data, load){
    this.itens = data;
    load.dismiss();
  }

  salvarComentarioSolicitacao(){
    let load = this.presentLoading();

    this.comentarioSolicitacaoProvider.postComentarioSolicitacao(this.item.cdSolicitacao, this.comentario).subscribe(
      data => this.atualizarItens(load), 
      err => this.errorAlert(err, load)
    );
  }

  atualizarItens(load){
    this.comentarioSolicitacaoProvider.getComentarios(this.item.cdSolicitacao).subscribe(
      data => this.itens = data, 
      err => console.log(err)
    );
    this.comentario = "";
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
}