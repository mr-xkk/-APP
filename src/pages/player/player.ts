import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/**
 * Generated class for the PlayerPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-player',
  templateUrl: 'player.html',
})
export class PlayerPage {

  playInfo:string;
  musicPlay:any;

  constructor(public http:Http,public navCtrl: NavController, public navParams: NavParams) {
    let playId = this.navParams.get('musicId');
    let createrName = this.navParams.get('creater');
    //音乐搜索api,暂时不能使用了,根据传过来的id和歌曲名都不能获取到播放的面庞
    /*this.playInfo = playId;  
    let playURL = 'http://s.music.163.com/search/get/?type=1&limit=5&s='+createrName;
    this.http.get(playURL)
      .map(res => res.json())
      .subscribe(data => { 
        this.musicPlay = data;
        console.log(this.musicPlay.result.songs[0].audio);
    }); */
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayerPage');
  }
}
