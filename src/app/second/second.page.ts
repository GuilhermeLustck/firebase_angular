import { Component, OnInit } from '@angular/core';
import { FireDataService } from '../conf/FireDataService';

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {
  dados:any
  constructor(private userServ:FireDataService) { }

  async ngOnInit() {

    this.dados= await this.userServ.getUser();

  }

}
