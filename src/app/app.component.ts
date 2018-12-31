import { Component, OnInit } from '@angular/core';
import {promise} from 'selenium-webdriver';
import {AppareilService} from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isAuth = false;
  lastUpdate = new Promise(
    (resolve, reject) => {
     const date =new Date();
     setTimeout(
       () => {
         resolve(date);
       }, 2000
     )
    }
  );

appareils: any[];

  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onAllumer() {
    this.appareilService.switchOnAll();
  }
  onEteindre() {
    this.appareilService.switchOffAll();
  }

  ngOnInit() {
    this.appareils = this.appareilService.appareils;
  }
}
