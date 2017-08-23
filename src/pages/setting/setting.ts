import { Component, } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
/**
 * Generated class for the SettingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var $:any; 

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})

export class SettingPage {
  sendName : string;

  constructor( 
      private alertCtrl: AlertController,
      public navCtrl: NavController, 
      public navParams: NavParams
  ) {
      let sendNick = localStorage.getItem('user');
      this.sendName = sendNick;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }

  setting(nickname:HTMLInputElement){
    let alert = this.alertCtrl.create({
      title: '提示',
      message: '是否确定改为这个昵称?',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: () => {
            console.log('取消');
          }
        },
        {
          text: '确定',
          handler: () => {
            //存储
            localStorage.setItem("myNickname",nickname.value);
            $.ajax({
              url:'http://localhost:1993/uploadImg',
              type: 'POST',
              data:{sendName:this.sendName,myName:nickname.value},
              success:(info) => {
                console.log(info);
              }
            })
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }
}
