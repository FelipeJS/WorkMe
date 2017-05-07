import { PessoaProvider } from './../../providers/pessoa-provider';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'perfil',
  templateUrl: 'perfil.html'
})
export class Perfil {
  item: any = {}; 
  user: any = {};
  usuarioLogado;

  constructor(public navCtrl: NavController, public pessoaProvider: PessoaProvider, public loadingCtrl: LoadingController, 
              public formBuilder: FormBuilder, private alertCtrl: AlertController) {
    this.user = this.formBuilder.group({
      id:['', Validators.required],
      documento:['', Validators.required],
      name:['', Validators.required],
      lastName:['', Validators.required],
      fantasia:['', Validators.required],
      telefone:['', Validators.required],
      endereco:['', Validators.required],
      bairro:['', Validators.required],
      cidade:['', Validators.required],
      estado:['', Validators.required],
      email:['', Validators.required],
      password:['', Validators.required],
      categoria:['', Validators.required],
      tipo:['', Validators.required]
    });

    this.getPessoa();
  }

  postPessoa(){
    let load = this.presentLoading();
    this.pessoaProvider.postPessoa(this.user.value).subscribe(
      data=>this.presentAlert(load),
      err=>this.errorAlert(err, load)
    );
  }

  getPessoa(){
    let load = this.presentLoading();
    this.pessoaProvider.getUsuarioLogado().subscribe(
      data => this.buildItens(data, load), 
      err => this.errorAlert(err, load)
    );
  }

  buildItens(data, load){
    this.item = data;
    this.item.password = '';
    load.dismiss();
  }

  presentLoading() {
    let load = this.loadingCtrl.create({
      content: 'Aguarde...'
    });
    load.present();
    return load;
  }

  presentAlert(load) {
    load.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      subTitle: 'Seus dados foram atualizados',
      buttons: ['Ok']
    });
    alert.present();
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