import { PessoaProvider } from './../../providers/pessoa-provider';
import { ClienteDetalhe } from './../cliente-detalhe/cliente-detalhe';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'cliente',
  templateUrl: 'cliente.html'
})
export class Cliente {
  itens : any[];

  constructor(public navCtrl: NavController, public pessoaProvider: PessoaProvider, public loadingCtrl: LoadingController) {
    this.getPessoas();
  }

  getPessoas(){
    this.pessoaProvider.getPessoas().subscribe(
      data => this.itens = data, 
      err => console.log(err)
    );
    this.presentLoading();
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: 'Buscando...',
      duration: 800
    }).present();
  }

  viewItem(item){
    this.navCtrl.push(ClienteDetalhe, {
      item:item
    });
  }
}
