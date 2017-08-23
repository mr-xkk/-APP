import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer} from '@angular/platform-browser'; 
/**
 * Generated class for the NewsdetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newsdetail',
  templateUrl: 'newsdetail.html',
})
export class NewsdetailPage {

  watchNews:any;

  constructor(private sanitizer: DomSanitizer,public navCtrl: NavController, public navParams: NavParams) {
    this.watchNews = this.sanitizer.bypassSecurityTrustResourceUrl(navParams.get('detail')); 
  }

  ionViewDidLoad() {
    console.log('新闻详情页加载');
  }
}
