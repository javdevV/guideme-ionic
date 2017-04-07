import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TagsPage } from './tags';
import { Myprovider } from '../../providers/myprovider';

@NgModule({
  declarations: [
    TagsPage,
  ],
  imports: [
    IonicPageModule.forChild(TagsPage),
  ],
  providers:[Myprovider],
  exports: [
    TagsPage
  ]
})
export class TagsModule {}
