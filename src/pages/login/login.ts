import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//引入http组件
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { TabsPage } from "../tabs/tabs";
import{ RegisterPage } from "../register/register";
//引入toast模块
import { ToastController } from 'ionic-angular';
//模态模块
import { ModalController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

declare var $:any; 

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  constructor(public modalCtrl: ModalController,private toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams) {
  }

  //加载状态
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  logIn(username: HTMLInputElement, password: HTMLInputElement) {   
    //let userinfo: string = '用户名：' + username.value  + '密码：' + password.value;
    $.ajax({
      url:'http://localhost:1993/login',
      type: 'POST',
      data:{username: username.value, password: password.value },
      //箭头函数的this指向为当前对象
      success:(msg)=>{
        if(msg){
          if(msg.message==false){
            let toast = this.toastCtrl.create({
              message: '账号密码错误-_-!没有账号请前往注册哦!',
              duration: 3000,
              position: 'top'
            });
          
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
          
            toast.present();
          }else{
            let toast = this.toastCtrl.create({
              message: '登录成功,欢迎!',
              duration: 3000,
              position: 'top'
            });
          
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
            
            //保存local账号密码
            localStorage.setItem('user',username.value);
            localStorage.setItem('psw',password.value);
          
            toast.present();
            //验证完成完成跳转
            this.navCtrl.push(TabsPage);
          }
        } 
      }
    }) 
   
  }
  //弹出注册页
  register(){
    let modal = this.modalCtrl.create(RegisterPage);
    modal.present();
  }
}
