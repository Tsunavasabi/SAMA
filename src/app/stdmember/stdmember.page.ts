import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-stdmember',
  templateUrl: './stdmember.page.html',
  styleUrls: ['./stdmember.page.scss'],
})
export class StdmemberPage implements OnInit {
  key: string
  userdata: any
  full = 55;
  constructor(private menu: MenuController, private navCtrl: NavController) { }

  ngOnInit() {
    this.userdata = JSON.parse(localStorage.getItem('userdata'))
  }

  openMenu() {
    this.menu.enable(true, 'menu');
    this.menu.open('menu');
  }

  ToOutreach() {
    this.key = "out"
    localStorage.setItem('key', this.key)
    this.navCtrl.navigateForward('/record')
  }

  ToSchool() {
    this.key = "sch"
    localStorage.setItem('key', this.key)
    this.navCtrl.navigateForward('/record')
  }

  ToBook() {
    this.key = "book"
    localStorage.setItem('key', this.key)
    this.navCtrl.navigateForward('/record')
  }

  ToExercise() {
    this.key = "exer"
    localStorage.setItem('key', this.key)
    this.navCtrl.navigateForward('/record')
  }

  ToAcademic() {
    this.key = "aca"
    localStorage.setItem('key', this.key)
    this.navCtrl.navigateForward('/record')
  }

  ToMoral() {
    this.key = "moral"
    localStorage.setItem('key', this.key)
    this.navCtrl.navigateForward('/record')
  }

  ToScivisit() {
    this.key = "sciv"
    localStorage.setItem('key', this.key)
    this.navCtrl.navigateForward('/record')
  }

  ToSocialvisit() {
    this.key = "sov"
    localStorage.setItem('key', this.key)
    this.navCtrl.navigateForward('/record')
  }

  ToScilecture() {
    this.key = "scil"
    localStorage.setItem('key', this.key)
    this.navCtrl.navigateForward('/record')
  }

  ToSociallecture() {
    this.key = "sol"
    localStorage.setItem('key', this.key)
    this.navCtrl.navigateForward('/record')
  }

  ToPersonlecture() {
    this.key = "person"
    localStorage.setItem('key', this.key)
    this.navCtrl.navigateForward('/record')
  }

  ToClub() {
    this.key = "club"
    localStorage.setItem('key', this.key)
    this.navCtrl.navigateForward('/record')
  }

  ToMeet() {
    this.key = "meet"
    localStorage.setItem('key', this.key)
    this.navCtrl.navigateForward('/record')
  }
}
