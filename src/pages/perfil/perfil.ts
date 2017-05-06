import { PessoaProvider } from './../../providers/pessoa-provider';
import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder } from '@angular/forms'

@Component({
  selector: 'perfil',
  templateUrl: 'perfil.html'
})
export class Perfil {
  item: any = {}; 
  pessoa: any = {};
  usuarioLogado;

  constructor(public navCtrl: NavController, public pessoaProvider: PessoaProvider, public loadingCtrl: LoadingController, 
              public formBuilder: FormBuilder, private alertCtrl: AlertController) {
    this.pessoa = this.formBuilder.group({
      cdPessoa:['', Validators.required],
      documento:['', Validators.required],
      nome:['', Validators.required],
      fantasia:['', Validators.required],
      telefone:['', Validators.required],
      endereco:['', Validators.required],
      bairro:['', Validators.required],
      cidade:['', Validators.required],
      estado:['', Validators.required],
      email:['', Validators.required],
      senha:['', Validators.required],
      categoria:['', Validators.required],
      tipo:['', Validators.required]
    });

    this.getPessoa(this.getUsuarioLogado());
  }

  postPessoa(){
    let load = this.presentLoading();
    this.pessoaProvider.postPessoa(this.pessoa.value).subscribe(
      data=>this.presentAlert(load),
      err=>this.errorAlert(err, load)
    );
  }

  getPessoa(usuarioLogado){
    let load = this.presentLoading();
    this.pessoaProvider.getPessoa(usuarioLogado).subscribe(
      data => this.buildItens(data, load), 
      err => this.errorAlert(err, load)
    );
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

  buildItens(data, load){
    this.item = data;
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

  getUsuarioLogado(){
    return 1;
  }
}
