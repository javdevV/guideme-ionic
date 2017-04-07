/**
 * Created by javdev on 4/7/2017.
 */
import {Tags} from './tags';
import {Categories} from './categories';
export interface User{
  name: String,
  evt_tags: [Tags],
  evt_categories: [Categories]
}
