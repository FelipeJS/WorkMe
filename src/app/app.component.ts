import { Servico } from './../pages/servico/servico';
import { Funcionario } from './../pages/funcionario/funcionario';
import { Cliente } from './../pages/cliente/cliente';
import { Configuracao } from './../pages/configuracao/configuracao';
import { Perfil } from './../pages/perfil/perfil';
import { Empresa } from './../pages/empresa/empresa';
import { Home } from './../pages/home/home';
import { Solicitacao } from './../pages/solicitacao/solicitacao';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;
  activePage: any;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Trabalho', component: Home },
      { title: 'Empresas', component: Empresa },
      { title: 'Clientes', component: Cliente },
      { title: 'Funcionarios', component: Funcionario },
      { title: 'Minhas Solicitações', component: Solicitacao },
      { title: 'Serviços/Produtos', component: Servico },
      { title: 'Perfil', component: Perfil },
      { title: 'Configurações', component: Configuracao }
    ];

    this.activePage = this.pages[0];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
    this.activePage = page;
  }

  checkActive(page){
    return page == this.activePage;
  }
}
