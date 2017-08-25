import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CollectionPage } from '../collection/collection';
/**
 * Generated class for the SidePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
declare var $:any; 

@IonicPage()
@Component({
  selector: 'page-side',
  templateUrl: 'side.html',
})
export class SidePage {
  userData : string;
  usersetPsw : string;
  showName : string = '';

  constructor(public navCtrl: NavController) {
    let userInfo = localStorage.getItem('user');
    let setPsw = localStorage.getItem('psw');
    
    this.userData = userInfo;
    this.usersetPsw = setPsw;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SidePage');
  }

  toCollection(){
    this.navCtrl.push(CollectionPage);
  }

  //刷新获取nickname
  doRefresh(refresher) {
      $.ajax({
        url:'http://localhost:1993/login',
        type: 'POST',
        data:{username:this.userData,password:this.usersetPsw},
        success:(info) => {
          console.log(info.data);
          this.showName = info.data[0].nickname;
          refresher.complete();
        }
      })   
    }
}
