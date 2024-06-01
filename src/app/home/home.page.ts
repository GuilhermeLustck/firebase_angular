import { Component } from '@angular/core';
import { FireDataService } from '../conf/FireDataService';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string ='';
  password: string ='';
  res:string='cadastre-se'

  senha:string='';
  Tel: string='';
  Email:string=''
  Nome:string=''

  
  constructor(private authS:FireDataService) {}

  login() {

    this.authS.login( this.email , this.password )

  }
  async cadas(){
    try{
      const resul= this.authS.cadasrto(this.senha,this.Tel,this.Email,this.Nome);
      console.log("cadastro feito com sucesso",resul);
      this.res="cadastro feito com sucesso","  ",resul;

    }catch(error: any){
      console.error("erro ao cadastrar",error);
      this.res="erro ao cadastrar","  ",error;
    }
  }
}
