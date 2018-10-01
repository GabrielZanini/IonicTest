import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { trigger, state, style, transition, animate } from '@angular/animations';

/**
 * Generated class for the ExercisePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercise',
  templateUrl: 'exercise.html',
  animations: [
    trigger('mySize',[
      state('big',style({
        width: '100%',
        //height: '100%',
      })),
      state('small',style({
        width: '50%',
        //height: '50%',
      })),
      transition('*=>*', animate('3s')),
    ])
  ]
})

export class ExercisePage {
  imgState = 'big';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExercisePage');
  }

  animate() {
    if (this.imgState == 'big') {
      this.imgState = 'small';
    }
    else {
      this.imgState = 'big';
    }
  }

}
