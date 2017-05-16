import { TrabalhaParaProvider } from './../providers/trabalha-para-provider';
import { UsuarioComentario } from './../pages/usuario-comentario/usuario-comentario';
import { ComentarioPessoaProvider } from './../providers/comentario-pessoa-provider';
import { ComentarioSolicitacaoProvider } from './../providers/comentario-solicitacao-provider';
import { SolicitacaoProvider } from './../providers/solicitacao-provider';
import { ServicoProvider } from './../providers/servico-provider';
import { ConfiguracaoProvider } from './../providers/configuracao-provider';
import { PessoaProvider } from './../providers/pessoa-provider';
import { EmpresaDetalheModal } from './../pages/empresa-detalhe-modal/empresa-detalhe-modal';
import { Servico } from './../pages/servico/servico';
import { FuncionarioDetalhe } from './../pages/funcionario-detalhe/funcionario-detalhe';
import { Funcionario } from './../pages/funcionario/funcionario';
import { ClienteDetalhe } from './../pages/cliente-detalhe/cliente-detalhe';
import { Cliente } from './../pages/cliente/cliente';
import { Configuracao } from './../pages/configuracao/configuracao';
import { Perfil } from './../pages/perfil/perfil';
import { Empresa } from './../pages/empresa/empresa';
import { EmpresaDetalhe } from './../pages/empresa-detalhe/empresa-detalhe';
import { TrabalhoAnaliseDetalhe } from './../pages/trabalho-analise-detalhe/trabalho-analise-detalhe';
import { TrabalhoFechadoDetalhe } from './../pages/trabalho-fechado-detalhe/trabalho-fechado-detalhe';
import { TrabalhoAnalise } from './../pages/trabalho-analise/trabalho-analise';
import { Home } from './../pages/home/home';
import { TrabalhoDetalhe } from './../pages/trabalho-detalhe/trabalho-detalhe';
import { Trabalho } from './../pages/trabalho/trabalho';
import { Solicitacao } from './../pages/solicitacao/solicitacao';
import { SolicitacaoDetalhe } from './../pages/solicitacao-detalhe/solicitacao-detalhe';
import { TrabalhoFechado } from './../pages/trabalho-fechado/trabalho-fechado';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Trabalho,
    TrabalhoDetalhe,
    Home,
    TrabalhoFechado,
    TrabalhoAnalise,
    TrabalhoFechadoDetalhe,
    TrabalhoAnaliseDetalhe,
    Empresa,
    EmpresaDetalhe,
    EmpresaDetalheModal,
    Perfil,
    Configuracao,
    Cliente,
    ClienteDetalhe,
    Funcionario,
    FuncionarioDetalhe,
    Servico,
    Solicitacao,
    SolicitacaoDetalhe,
    UsuarioComentario
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Trabalho,
    TrabalhoDetalhe,
    Home,
    TrabalhoFechado,
    TrabalhoAnalise,
    TrabalhoFechadoDetalhe,
    TrabalhoAnaliseDetalhe,
    Empresa,
    EmpresaDetalhe,
    EmpresaDetalheModal,
    Perfil,
    Configuracao,
    Cliente,
    ClienteDetalhe,
    Funcionario,
    FuncionarioDetalhe,
    Servico,
    Solicitacao,
    SolicitacaoDetalhe,
    UsuarioComentario
  ],
  providers: [
    StatusBar,
    SplashScreen,
    PessoaProvider,
    ServicoProvider,
    ConfiguracaoProvider,
    SolicitacaoProvider,
    ComentarioSolicitacaoProvider,
    ComentarioPessoaProvider,
    TrabalhaParaProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}