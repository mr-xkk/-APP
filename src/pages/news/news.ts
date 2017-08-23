import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { NewsdetailPage } from '../newsdetail/newsdetail';
/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  //新闻api
  newsURL = 'http://v.juhe.cn/toutiao/index?type=top&key=3bdff304409ec289d90b80f9334e1060';
  newsList:object;
  constructor(public http:Http,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('新闻页加载');
  }
  ngOnInit() {
    this.http.get(this.newsURL)
        .map(res => res.json())
        .subscribe(data => {
         this.newsList = data;
    }); 
  }
  //push的第二个值为传递的参数
  toNewdetail(url){
    this.navCtrl.push(NewsdetailPage,{
      detail:url,
    })
  }

}
