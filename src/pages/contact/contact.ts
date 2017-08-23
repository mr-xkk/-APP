import { Component,ViewChild } from '@angular/core';
import {NavController, Nav} from 'ionic-angular';
import { SidePage } from '../side/side';
import { LoginPage } from '../login/login';	
import { App } from 'ionic-angular';
import { SettingPage } from '../setting/setting';
import { CreaterPage } from '../creater/creater';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = SidePage;

  constructor(private app:App,public navCtrl: NavController) {
   
  }
  toSet(){
    this.navCtrl.push(SettingPage);
  }
  loginOut(){
    localStorage.clear();
    this.app.getRootNav().push(LoginPage);
  }
  toCreater(){
    this.navCtrl.push(CreaterPage);
  }
}
