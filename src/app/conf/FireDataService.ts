import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';







@Injectable({
  providedIn: 'root'
})
export class FireDataService {
  

  private fire = 'https://algo-72622-default-rtdb.firebaseio.com/cadastros/';

  constructor(
     private auth: AngularFireAuth,
     private rot: Router,
     private http: HttpClient
    ) { }

  id:any

  async login(email: string, password: string) {
    try {
      await this.auth.signInWithEmailAndPassword(email, password);
      const user = await this.auth.currentUser;
      this.id = user?.uid; // Se necessário
      this.rot.navigate(['second']);
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      this.rot.navigate(['home']);
    }
  }
  
  async getUser() {
    try {
      const resul = await this.http.get(`${this.fire}/${this.id}.json`).toPromise(); // Convertendo o Observable em uma Promise
      // Manipular os dados retornados (por exemplo, atribuir a uma variável ou realizar alguma ação com eles)
      console.log('Dados do usuário:', resul);
      return resul; // Se desejar retornar os dados para uso posterior
    } catch (error) {
      console.error('Erro ao obter dados do usuário:', error);
      // Tratar o erro, se necessário
      throw error; // Re-lança o erro para que possa ser tratado pelo chamador, se necessário
    }
  }


  async cadasrto(senha: string, Tel: string, Email: string, Nome: string) {
    try {
      // Cria o usuário
      await this.auth.createUserWithEmailAndPassword(Email, senha);

      // Obtém o usuário atual
      const user = await this.auth.currentUser;
      const Uid = user?.uid;

      if (!Uid) {
        throw new Error("user no authenticaion");
      }
      const dados={
        Nome:Nome,
        Tel:Tel
      }
      // Monta os dados do usuário

      await this.http.post(`https://algo-72622-default-rtdb.firebaseio.com/cadastros/${Uid}.json`,dados)

      console.log("cadastrado com sucesso sem errrooooooooo0phhfgbhbgb carolho")
      
    }catch(error: any){
      console.log("erro no cadastramento",error)
      throw error
    }
  }
}

