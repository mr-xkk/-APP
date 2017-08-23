import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HttpModule ,Http} from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { SidePage } from '../pages/side/side';
import { MusicListPage } from '../pages/music-list/music-list';
import { PlayerPage } from '../pages/player/player';
import { NewsPage } from '../pages/news/news';
import { NewsdetailPage } from '../pages/newsdetail/newsdetail';
import { VideoListPage } from '../pages/video-list/video-list';
import { AboutmePage } from '../pages/aboutme/aboutme';
import { CollectionPage } from '../pages/collection/collection';
import { SettingPage } from '../pages/setting/setting';
import { CreaterPage } from '../pages/creater/creater';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    SidePage,
    MusicListPage,
    PlayerPage,
    NewsPage,
    NewsdetailPage,
    VideoListPage,
    AboutmePage,
    CollectionPage,
    SettingPage,
    CreaterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      //去掉返回键的back字样
      backButtonText: '' 
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    SidePage,
    MusicListPage,
    PlayerPage,
    NewsPage,
    NewsdetailPage,
    VideoListPage,
    AboutmePage,
    CollectionPage,
    SettingPage,
    CreaterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
