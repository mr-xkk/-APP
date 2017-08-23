import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreaterPage } from './creater';

@NgModule({
  declarations: [
    CreaterPage,
  ],
  imports: [
    IonicPageModule.forChild(CreaterPage),
  ],
})
export class CreaterPageModule {}
