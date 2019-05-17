import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  OnToView(type) {
    let acttype: any
    if (type == 1) {
      acttype = {name: "Social Outreach", act_type: "01"}
    } else if (type == 2) {
      acttype = {name: "School Outreach", act_type: "02"}
    } else if (type == 3) {
      acttype = {name: "Reading Book", act_type: "03"}
    } else if (type == 4) {
      acttype = {name: "Academic Camp", act_type: "04"}
    } else if (type == 5) {
      acttype = {name: "Moral Camp", act_type: "05"}
    } else if (type == 6) {
      acttype = {name: "Science Visit", act_type: "06"}
    } else if (type == 7) {
      acttype = {name: "Social Visit", act_type: "07"}
    } else if (type == 8) {
      acttype = {name: "Science Lecture", act_type: "08"}
    } else if (type == 9) {
      acttype = {name: "Personality Lecture", act_type: "09"}
    } else if (type == 10) {
      acttype = {name: "Social Lecture", act_type: "10"}
    } else if (type == 11) {
      acttype = {name: "Club Activity", act_type: "11"}
    } else if (type == 12) {
      acttype = {name: "Exercise", act_type: "12"}
    } else if (type == 13) {
      acttype = {name: "Meet Teacher", act_type: "13"}
    }
    localStorage.setItem("view", JSON.stringify(acttype))
    this.navCtrl.navigateForward('/listview')
    
  }


}
