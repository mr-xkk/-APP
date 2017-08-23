import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CollectionPage } from '../collection/collection';
/**
 * Generated class for the SidePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-side',
  templateUrl: 'side.html',
})
export class SidePage {
  userData:string;
  showName:string = '';

  constructor(public navCtrl: NavController) {
    let userInfo = localStorage.getItem('user');
    console.log(userInfo)
    this.userData = userInfo;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SidePage');
  }

  toCollection(){
    this.navCtrl.push(CollectionPage);
  }

  doRefresh(refresher) {
    setTimeout(() => {
      let myNick = localStorage.getItem("myNickname")
      this.showName  = myNick;
      refresher.complete();
    }, 1000);
  }

}
