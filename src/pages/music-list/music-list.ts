import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { PlayerPage } from '../player/player'
/**
 * Generated class for the MusicListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-music-list',
  templateUrl: 'music-list.html',
})



export class MusicListPage {
  //获取歌单信息
  musicURL = 'https://api.imjad.cn/cloudmusic?type=playlist&id=134689510'
  musicList:any;

  constructor(public http: Http,public navCtrl: NavController, public navParams: NavParams) {
   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MusicListPage');
  }
  ngOnInit() {
    this.http.get(this.musicURL)
        .map(res => res.json())
        .subscribe(data => {
          this.musicList = data;  
    }); 
  }
  //点击时传递歌曲参数
  toPlay(id,name){
    this.navCtrl.push(PlayerPage,{
      musicId:id,
      creater:name
    })
  }
}
