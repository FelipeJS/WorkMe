import { TrabalhoAnalise } from './../trabalho-analise/trabalho-analise';
import { SolicitacaoProvider } from './../../providers/solicitacao-provider';
import { ComentarioSolicitacaoProvider } from './../../providers/comentario-solicitacao-provider';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'trabalho-analise-detalhe.html'
})
export class TrabalhoAnaliseDetalhe {

  comentario : String;

  item: any;
  itens = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
        public loadingCtrl: LoadingController, private alertCtrl: AlertController,
        public comentarioSolicitacaoProvider : ComentarioSolicitacaoProvider, 
        public solicitacaoProvider: SolicitacaoProvider) {
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

  finalizarSolicitacao(solicitacao){
    let load = this.presentLoading();
    this.solicitacaoProvider.finalizarSolicitacao(solicitacao).subscribe(
      data=>this.presentAlert(load),
      err=>this.errorAlert(err, load)
    );
  }

  doConfirm(solicitacao) {
    let confirm = this.alertCtrl.create({
      title: 'Finalizar Solicitação',
      message: 'Deseja finalizar a solicitação?',
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Confirmar',
          handler: () => {
            this.finalizarSolicitacao(solicitacao);
          }
        }
      ]
    });
    confirm.present()
  }

  presentAlert(load) {
    load.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Solicitação finalizada',
      buttons: ['Ok']
    });
    alert.present();
    this.viewItem();
  }

  viewItem(){
    this.navCtrl.push(TrabalhoAnalise, {});
  }
}