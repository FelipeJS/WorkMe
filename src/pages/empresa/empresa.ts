import { PessoaProvider } from './../../providers/pessoa-provider';
import { EmpresaDetalhe } from './../empresa-detalhe/empresa-detalhe';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

@Component({
  selector: 'empresa',
  templateUrl: 'empresa.html'
})
export class Empresa {
  itens : any[];

  constructor(public navCtrl: NavController, public pessoaProvider: PessoaProvider, public loadingCtrl: LoadingController) {
    this.getPessoas();
  }

  getPessoas(){
    let load = this.presentLoading();
    this.pessoaProvider.getPessoas().subscribe(
      data => this.itens = data, 
      err => console.log(err)
    );
    
    //load.dismiss().then(() => {
      
    //});
  }

  presentLoading() {
    let load = this.loadingCtrl.create({
      content: 'Buscando...',
      duration: 800
    });
    load.present();
    return load;
  }

  viewItem(item){
    this.navCtrl.push(EmpresaDetalhe, {
      item:item
    });
  }
}
