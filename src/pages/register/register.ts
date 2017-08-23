import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

import { FormBuilder, Validators, FormGroup } from '@angular/forms';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//声明$
declare var $:any; 

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  loginForm: FormGroup;
  username : any;
  password : any;
  firstIn : string;
  secondIn : string;
  isdis : boolean;
  nickname : string='';

  constructor(
    private formBuilder: FormBuilder, 
    public viewCtrl: ViewController,
    private toastCtrl: ToastController,
    public navCtrl: NavController, 
    public navParams: NavParams
  ) {
    this.loginForm = formBuilder.group({
      username: ['', Validators.compose([Validators.minLength(6), Validators.maxLength(11), Validators.required, Validators.pattern("/^[a-zA-z]\w{5,10}$/")])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    })
    this.username = this.loginForm.controls['username'];
    this.password = this.loginForm.controls['password'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  
  //返回
  dismiss() {
    this.viewCtrl.dismiss();
  }

  //注册
  toRegister(username: HTMLInputElement, password: HTMLInputElement){
    //将this的指向改为正确的,一下toast组件使用
    let _this = this
    $.ajax({
      type: "post",
      url: "http://localhost:1993/register",
      dataType: "json",
      data:{ username: username.value, password: password.value,nickname:this.nickname },
      success: function(data){
      //接受返回的数据，前端判断采取的动作
      console.log(data);
      if(data){
          if(data.message==false){
            //已被注册的话显示toast组件
            let toast = _this.toastCtrl.create({
              message: '该账号已经被注册了-_-!!!',
              duration: 3000,
              position: 'top'
            });
          
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
          
            toast.present();
          }else{
            let toast = _this.toastCtrl.create({
              message: '注册成功,请登录$_$!!!',
              duration: 3000,
              position: 'middle'
            });
          
            toast.onDidDismiss(() => {
              console.log('Dismissed toast');
            });
          
            toast.present();
            
          }
        }
      }
    });
  }

}
