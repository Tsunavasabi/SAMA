import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Http } from '@angular/http';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.page.html',
  styleUrls: ['./listview.page.scss'],
})
export class ListviewPage implements OnInit {
  acttype: any
  userdata: any
  actdata: any
  constructor(private menu: MenuController, private http: Http) { }

  ngOnInit() {
    this.menu.close("menu")
    this.acttype = JSON.parse(localStorage.getItem("view"))
    this.userdata = JSON.parse(localStorage.getItem("userdata"))
    this.Fetchdata()
  }

  Fetchdata() {
    let selectdata = { stdid: this.userdata.std_ID,
                       acttype: this.acttype.act_type }
    this.http.post('http://127.0.0.1/www/selectact.php', JSON.stringify(selectdata))
    .subscribe((data: any) => {
      this.actdata = JSON.parse(data['_body'])
      console.log(this.actdata)
    })
  }

}
