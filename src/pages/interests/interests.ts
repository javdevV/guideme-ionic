import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Interests} from '../../providers/interests'
/*
Generated class for the Interests page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
	selector: 'page-interests',
	templateUrl: 'interests.html'
})
export class InterestsPage {

	//checkboxFields: string[]=["sourour","dali"];
	//filters: any;
	ints:any;
	userints:any;
	shown :boolean =false;
	pos:number;

	constructor(public navCtrl: NavController, public navParams: NavParams,private myprovider: Interests) {

		//this.checkboxFields.forEach((field) => this.filters = false );


	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad InterestsPage');
		this.start();
	}
	start(){
		this.myprovider.loadInterests().then(ints => {
			this.ints = ints;
			// console.log(this.ints);
			// this.shown=true;
		});
		this.myprovider.loadUsersInts().then(userints=>{
			this.userints=userints;
			//console.log(this.userints);
			if( this.userints)
				this.shown=true;
		});
	}
	isChecked(int):boolean{
	/*console.log('cheking');
	console.log(this.shown);*/


	if(this.shown==true){
		this.pos =this.userints.find(it=>it.label==int.label);
	//console.log(this.userints[this.pos]);
	if(!this.pos){

		return false;
	}
	else{
		//console.log(this.userints[this.pos].label);
		return true;
	}
}

}
saveUserInts(event,int){
	console.log("save fct");
	console.log("ckecked : "+int.checked);
	console.log("userints "+this.userints);
	if(int.checked==true){
		this.pos =this.userints.findIndex(it=>it.label==int.label);
		console.log("pos "+this.pos);
		if(this.pos==-1){
			console.log(int);
			this.myprovider.addIntrToUser(int);
			this.userints.push(int);

		}
	}	
	else if(int.checked==false){
		this.pos =this.userints.findIndex(it=>it.label==int.label);
		console.log("pos "+this.pos);
		if(this.pos > -1){
			console.log(this.userints[this.pos]);
			this.myprovider.deleteIntrFromUser({"label":int.label});
			this.userints.splice(this.pos,1);
		}
	}  
}

}
