import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string;
  password: string;
  userdata: any;
  navigate: any;
  constructor(private http: Http, private navCtrl: NavController) { }

  ngOnInit() {
  }

  login() {
    console.log(this.username)
    console.log(this.password)
    let logindata = { username: this.username,
                      password: this.password}
    this.http.post('http://127.0.0.1/www/login1.php', JSON.stringify(logindata))
    .subscribe((data: any) => {
      this.userdata = JSON.parse(data['_body'])
      localStorage.setItem('userdata', JSON.stringify(this.userdata))
      console.log(JSON.parse(localStorage.getItem('userdata')))
      this.navCtrl.navigateRoot('/stdmember')
    }), error => {
      console.log('error login')
    }
  }

}
