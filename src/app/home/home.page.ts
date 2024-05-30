import { Component } from '@angular/core';
import { FireDataService } from '../conf/fire-data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string ='';
  password: string ='';
  res:string='false'

  senha:string='';
  Tel: string='';
  Email:string=''
  Nome:string=''

  
  constructor(private authS:FireDataService) {}

  login() {

    this.authS.login( this.email , this.password )

  }
 cadas(){

  this.authS.cadasrto(this.senha,this.Tel,this.Email,this.Nome).subscribe(response => {
    console.log('Cadastro realizado com sucesso', response);
  }, error => {
    console.error('Erro ao realizar cadastro', error);
  });

 }



}
