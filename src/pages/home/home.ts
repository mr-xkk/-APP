import { Component,ViewChild } from '@angular/core';
import { NavController,Slides } from 'ionic-angular';
import { MusicListPage } from '../music-list/music-list';
import { NewsPage } from '../news/news';
import { VideoListPage } from '../video-list/video-list';
import { AboutmePage } from '../aboutme/aboutme';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('mySlider') slider:Slides;
  //轮播图片
  slidePic:Array<string> = [
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503033482123&di=e45ba0baba95c73dbc45d0d1361af4e9&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F012c3956f39ac26ac7257d2088301a.jpg%40900w_1l_2o_100sh.jpg",
    "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1503046899684&di=8665b38718c3e31403bcc66736e4b385&imgtype=0&src=http%3A%2F%2Fimg02.tooopen.com%2Fproducts%2F20150307%2Ftooopen_89254546.jpg"
  ]

  homeNews = 'http://v.juhe.cn/toutiao/index?type=top&key=3bdff304409ec289d90b80f9334e1060';
  homeMusic = 'https://api.imjad.cn/cloudmusic?type=playlist&id=134689510'
  homeshowNews:string;
  newsImg:string;
  musicImg:any;

  constructor(
    public http:Http,
    public modalCtrl: ModalController,
    public navCtrl: NavController
    ) 
    {  }

  ngOnInit() {
    //获取新闻
    this.http.get(this.homeNews)
        .map(res => res.json())
        .subscribe(res => {
         this.homeshowNews = res.result.data[0].title;
         this.newsImg = res.result.data[0].thumbnail_pic_s;
    }); 
    //获取歌单
    this.http.get(this.homeMusic)
        .map(res => res.json())
        .subscribe(data => {
        //console.log(data.playlist.tracks.slice(0,5));
        this.musicImg = data.playlist.tracks.slice(0,5);
        
    }); 
  }
  
  toMusic(){
    this.navCtrl.push(MusicListPage)
  }
  toNews(){
    this.navCtrl.push(NewsPage);
  }
  toVideo(){
    this.navCtrl.push(VideoListPage);
  }
  toAboutme(){
    let modal = this.modalCtrl.create(AboutmePage);
    modal.present();
  }
  //页面切换后保持轮播图自动滚动
  ionViewWillEnter(){
    this.slider.startAutoplay();
  }
  ionViewWillLeave(){
    this.slider.stopAutoplay();
  }
  //刷新页面
  homeRefresh(refresher) {
      this.http.get(this.homeNews)
        .map(res => res.json())
        .subscribe(res => {
        this.homeshowNews = res.result.data[0].title;
        this.newsImg = res.result.data[0].thumbnail_pic_s;
        refresher.complete();  
      }); 
      //获取歌单
      this.http.get(this.homeMusic)
        .map(res => res.json())
        .subscribe(data => {
        //console.log(data.playlist.tracks.slice(0,5));
        this.musicImg = data.playlist.tracks.slice(0,5);        
      });     
  }
}
