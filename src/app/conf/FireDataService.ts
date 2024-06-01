import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable,firstValueFrom } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class FireDataService {

  private fire = 'https://algo-72622-default-rtdb.firebaseio.com/cadastros';

  constructor(private auth: AngularFireAuth, private rot: Router, private http: HttpClient) { }


  async login(email: string, password: string) {
    try {
      await this.auth.signInWithEmailAndPassword(email, password);
      this.rot.navigate(['second']);


    } catch (error) {

      this.rot.navigate(['home']);

    }

  }
  

  async cadasrto(senha: string, Tel: string, Email: string, Nome: string) {
    try{
      const dados = {
        Nome: Nome,

        Tel: Tel
      };

      this.auth.createUserWithEmailAndPassword(Email,senha);


      const user = await this.auth.currentUser;
      const Uid = user?.uid;

      if(!Uid){

      throw new Error("user no authentication");

      }


      const response= await firstValueFrom(this.http.post(`${this.fire}/${Uid}.json`, dados))

      return response
        
      
    }catch(error: any){
      console.log("erro no cadastramento",error)
      throw error
    }
  }
}

