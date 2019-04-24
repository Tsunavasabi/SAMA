import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {
  key: string
  formdetail : any = {}
  userdata: any
  constructor(private http: Http, private navCtrl: NavController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.userdata = localStorage.getItem('userdata')
    this.key = localStorage.getItem('key')
  }

  typeclub(club: any) {
    this.formdetail.place = club;
  }

  Form1() {
    let postParams =  {
      acttype: "01",
      act_type_name: "การบำเพ็ญประโยชน์ต่อชุมชนและสังคม",
      std_firstname: this.userdata.std_firstname,
      std_lastname: this.userdata.std_lastname,
      std_classroom: this.userdata.std_classroom,
      std_number: this.userdata.std_number,
      std_dorm: this.userdata.std_dormitory,
      std_id: this.userdata.std_ID,
      date: this.formdetail.date,
      hour: this.formdetail.hour,
      place: this.formdetail.place,
      make: this.formdetail.make,
      feel: this.formdetail.feel
    };
    this.http.post("http://127.0.0.1/www/insert/form1insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        console.log(data)
        this.navCtrl.pop()
      }, error => {
        console.log(error);});
  }

  async Form1Confirm() {
    const confirm = await this.alertCtrl.create({
      header: 'Save',
      message: 'Are you sure to save this activity?',
      buttons: [{ text: 'Cancel'},{ text: 'OK',handler: () => {this.Form1();}}]});
    await confirm.present();
  }

}
