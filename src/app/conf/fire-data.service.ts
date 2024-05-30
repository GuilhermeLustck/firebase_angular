import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class FireDataService {

  constructor(private auth:AngularFireAuth,private rot:Router,private http:HttpClient) { }
  
  
  async login(email: string, password: string){
    try{
      await this.auth.signInWithEmailAndPassword(email,password)
      this.rot.navigate(['second'])
    

    }catch (error) {

      this.rot.navigate(['home'])

    }
  
  }
  private fire='https://algo-72622-default-rtdb.firebaseio.com/cadastros.json'

  cadasrto(senha:string,Tel:string,Email:string,Nome:string){
    const dados = {
      Nome: Nome,
      Email: Email,
      Senha: senha,
      Tel: Tel
    };

    return this.http.post(this.fire,dados)

  }

}
