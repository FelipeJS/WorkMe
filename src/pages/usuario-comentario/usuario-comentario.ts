import { ComentarioPessoaProvider } from './../../providers/comentario-pessoa-provider';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'usuario-comentario.html'
})
export class UsuarioComentario {

  comentario : String;
  item: any;
  itens = [];
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
        public loadingCtrl: LoadingController, private alertCtrl: AlertController,
        public comentarioPessoaProvider: ComentarioPessoaProvider) {
    this.item = navParams.get('item');
    this.getComentarios();
  }

  getComentarios(){
    let load = this.presentLoading();
    this.comentarioPessoaProvider.getComentarios(this.item.id).subscribe(
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

    this.comentarioPessoaProvider.postComentarioPessoa(this.item.id, this.comentario).subscribe(
      data => this.atualizarItens(load), 
      err => this.errorAlert(err, load)
    );
  }

  atualizarItens(load){
    this.comentarioPessoaProvider.getComentarios(this.item.id).subscribe(
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