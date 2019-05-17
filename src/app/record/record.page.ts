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
    this.userdata = JSON.parse(localStorage.getItem('userdata'))
    this.key = localStorage.getItem('key')
    console.log(this.userdata)
  }

  typeclub(club) {
    this.formdetail.place = club.detail.value;
    console.log(this.formdetail.place)
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

  Form2() {
    let postParams =  {
      acttype: "02",
      act_type_name: "การบำเพ็ญประโยชน์ต่อโรงเรียน",
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
    this.http.post("http://127.0.0.1/www/insert/form2insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        console.log(data)
        this.navCtrl.pop()
      }, error => {
        console.log(error);});
  }

  async Form2Confirm() {
    const confirm = await this.alertCtrl.create({
      header: 'Save',
      message: 'Are you sure to save this activity?',
      buttons: [{ text: 'Cancel'},{ text: 'OK',handler: () => {this.Form2();}}]});
    await confirm.present();
  }

  Form3() {
    let postParams =  {
      acttype: "03",
      act_type_name: "การอ่านหนังสือ",
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
      feel: this.formdetail.feel,
      head: this.formdetail.head,
      print: this.formdetail.print
    };
    this.http.post("http://127.0.0.1/www/insert/form3insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        console.log(data)
        this.navCtrl.pop()
      }, error => {
        console.log(error);});
  }

  async Form3Confirm() {
    const confirm = await this.alertCtrl.create({
      header: 'Save',
      message: 'Are you sure to save this activity?',
      buttons: [{ text: 'Cancel'},{ text: 'OK',handler: () => {this.Form3();}}]});
    await confirm.present();
  }

  Form4() {
    let postParams =  {
      acttype: "04",
      act_type_name: "การเข้าค่ายวิชาการ",
      std_firstname: this.userdata.std_firstname,
      std_lastname: this.userdata.std_lastname,
      std_classroom: this.userdata.std_classroom,
      std_number: this.userdata.std_number,
      std_dorm: this.userdata.std_dormitory,
      std_id: this.userdata.std_ID,
      head: this.formdetail.head,
      place: this.formdetail.place,
      make: this.formdetail.make,
      feel: this.formdetail.feel
    };
    this.http.post("http://127.0.0.1/www/insert/form4insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        console.log(data)
        this.navCtrl.pop()
      }, error => {
        console.log(error);});
  }

  async Form4Confirm() {
    const confirm = await this.alertCtrl.create({
      header: 'Save',
      message: 'Are you sure to save this activity?',
      buttons: [{ text: 'Cancel'},{ text: 'OK',handler: () => {this.Form4();}}]});
    await confirm.present();
  }

  Form5() {
    let postParams =  {
      acttype: "05",
      act_type_name: "การเข้าค่ายปฏิบัติธรรม",
      std_firstname: this.userdata.std_firstname,
      std_lastname: this.userdata.std_lastname,
      std_classroom: this.userdata.std_classroom,
      std_number: this.userdata.std_number,
      std_dorm: this.userdata.std_dormitory,
      std_id: this.userdata.std_ID,
      head: this.formdetail.head,
      place: this.formdetail.place,
      make: this.formdetail.make,
      feel: this.formdetail.feel
    };
    this.http.post("http://127.0.0.1/www/insert/form5insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        console.log(data)
        this.navCtrl.pop()
      }, error => {
        console.log(error);});
  }

  async Form5Confirm() {
    const confirm = await this.alertCtrl.create({
      header: 'Save',
      message: 'Are you sure to save this activity?',
      buttons: [{ text: 'Cancel'},{ text: 'OK',handler: () => {this.Form5();}}]});
    await confirm.present();
  }

  Form6() {
    let postParams =  {
      acttype: "06",
      act_type_name: "การศึกษาดูงานด้านคณิตศาสตร์ วิทยาศาสตร์และเทคโนโลยี",
      std_firstname: this.userdata.std_firstname,
      std_lastname: this.userdata.std_lastname,
      std_classroom: this.userdata.std_classroom,
      std_number: this.userdata.std_number,
      std_dorm: this.userdata.std_dormitory,
      std_id: this.userdata.std_ID,
      date: this.formdetail.date,
      head: this.formdetail.head,
      place: this.formdetail.place,
      make: this.formdetail.make,
      feel: this.formdetail.feel
    };
    this.http.post("http://127.0.0.1/www/insert/form6insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        console.log(data)
        this.navCtrl.pop()
      }, error => {
        console.log(error);});
  }

  async Form6Confirm() {
    const confirm = await this.alertCtrl.create({
      header: 'Save',
      message: 'Are you sure to save this activity?',
      buttons: [{ text: 'Cancel'},{ text: 'OK',handler: () => {this.Form6();}}]});
    await confirm.present();
  }

  Form7() {
    let postParams =  {
      acttype: "07",
      act_type_name: "การศึกษาดูงานด้านสังคมศึกษา ภาษา ศาสนา ศิลปวัฒนธรรมและโบราณคดี",
      std_firstname: this.userdata.std_firstname,
      std_lastname: this.userdata.std_lastname,
      std_classroom: this.userdata.std_classroom,
      std_number: this.userdata.std_number,
      std_dorm: this.userdata.std_dormitory,
      std_id: this.userdata.std_ID,
      date: this.formdetail.date,
      head: this.formdetail.head,
      place: this.formdetail.place,
      make: this.formdetail.make,
      feel: this.formdetail.feel
    };
    this.http.post("http://127.0.0.1/www/insert/form7insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        console.log(data)
        this.navCtrl.pop()
      }, error => {
        console.log(error);});
  }

  async Form7Confirm() {
    const confirm = await this.alertCtrl.create({
      header: 'Save',
      message: 'Are you sure to save this activity?',
      buttons: [{ text: 'Cancel'},{ text: 'OK',handler: () => {this.Form7();}}]});
    await confirm.present();
  }

  Form8() {
    let postParams =  {
      acttype: "08",
      act_type_name: "การฟังบรรยายด้านวิทยาศาสตร์ และเทคโนโลยี",
      std_firstname: this.userdata.std_firstname,
      std_lastname: this.userdata.std_lastname,
      std_classroom: this.userdata.std_classroom,
      std_number: this.userdata.std_number,
      std_dorm: this.userdata.std_dormitory,
      std_id: this.userdata.std_ID,
      date: this.formdetail.date,
      head: this.formdetail.head,
      make: this.formdetail.make,
      feel: this.formdetail.feel
    };
    this.http.post("http://127.0.0.1/www/insert/form8insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        console.log(data)
        this.navCtrl.pop()
      }, error => {
        console.log(error);});
  }

  async Form8Confirm() {
    const confirm = await this.alertCtrl.create({
      header: 'Save',
      message: 'Are you sure to save this activity?',
      buttons: [{ text: 'Cancel'},{ text: 'OK',handler: () => {this.Form8();}}]});
    await confirm.present();
  }

  Form9() {
    let postParams =  {
      acttype: "09",
      act_type_name: "การฟังบรรยายด้านพัฒนาบุคลิกภาพและความฉลาดทางอารมณ์",
      std_firstname: this.userdata.std_firstname,
      std_lastname: this.userdata.std_lastname,
      std_classroom: this.userdata.std_classroom,
      std_number: this.userdata.std_number,
      std_dorm: this.userdata.std_dormitory,
      std_id: this.userdata.std_ID,
      date: this.formdetail.date,
      head: this.formdetail.head,
      make: this.formdetail.make,
      feel: this.formdetail.feel
    };
    this.http.post("http://127.0.0.1/www/insert/form9insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        console.log(data)
        this.navCtrl.pop()
      }, error => {
        console.log(error);});
  }
  
  async Form9Confirm() {
    const confirm = await this.alertCtrl.create({
      header: 'Save',
      message: 'Are you sure to save this activity?',
      buttons: [{ text: 'Cancel'},{ text: 'OK',handler: () => {this.Form9();}}]});
    await confirm.present();
  }

  Form10() {
    let postParams =  {
      acttype: "10",
      act_type_name: "การฟังบรรยายด้านสังคมศึกษา ภาษา ศาสนา ศิลปวัฒนธรรมและดนตรี",
      std_firstname: this.userdata.std_firstname,
      std_lastname: this.userdata.std_lastname,
      std_classroom: this.userdata.std_classroom,
      std_number: this.userdata.std_number,
      std_dorm: this.userdata.std_dormitory,
      std_id: this.userdata.std_ID,
      date: this.formdetail.date,
      head: this.formdetail.head,
      make: this.formdetail.make,
      feel: this.formdetail.feel
    };
    this.http.post("http://127.0.0.1/www/insert/form10insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        console.log(data)
        this.navCtrl.pop()
      }, error => {
        console.log(error);});
  }

  async Form10Confirm() {
    const confirm = await this.alertCtrl.create({
      header: 'Save',
      message: 'Are you sure to save this activity?',
      buttons: [{ text: 'Cancel'},{ text: 'OK',handler: () => {this.Form10();}}]});
    await confirm.present();
  }

  Form11() {
    let postParams =  {
      acttype: "11",
      act_type_name: "การเข้าร่วมกิจกรรมชุมนุม",
      std_firstname: this.userdata.std_firstname,
      std_lastname: this.userdata.std_lastname,
      std_classroom: this.userdata.std_classroom,
      std_number: this.userdata.std_number,
      std_dorm: this.userdata.std_dormitory,
      std_id: this.userdata.std_ID,
      date: this.formdetail.date,
      head: this.formdetail.head,
      hour: this.formdetail.hour,
      place: this.formdetail.place,
      make: this.formdetail.make,
      feel: this.formdetail.feel
    };
    this.http.post("http://127.0.0.1/www/insert/form11insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        console.log(data)
        this.navCtrl.pop()
      }, error => {
        console.log(error);});
  }

  async Form11Confirm() {
    const confirm = await this.alertCtrl.create({
      header: 'Save',
      message: 'Are you sure to save this activity?',
      buttons: [{ text: 'Cancel'},{ text: 'OK',handler: () => {this.Form11();}}]});
    await confirm.present();
  }

  Form12() {
    let postParams =  {
      acttype: "12",
      act_type_name: "การออกกำลังกายและการเล่นกีฬา",
      std_firstname: this.userdata.std_firstname,
      std_lastname: this.userdata.std_lastname,
      std_classroom: this.userdata.std_classroom,
      std_number: this.userdata.std_number,
      std_dorm: this.userdata.std_dormitory,
      std_id: this.userdata.std_ID,
      date: this.formdetail.date,
      timestart: this.formdetail.timeStart,
      timeend: this.formdetail.timeEnd,
      make: this.formdetail.make
    };
    this.http.post("http://127.0.0.1/www/insert/form12insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        console.log(data)
        this.navCtrl.pop()
      }, error => {
        console.log(error);});
  }

  async Form12Confirm() {
    const confirm = await this.alertCtrl.create({
      header: 'Save',
      message: 'Are you sure to save this activity?',
      buttons: [{ text: 'Cancel'},{ text: 'OK',handler: () => {this.Form12();}}]});
    await confirm.present();
  }

  Form13() {
    let postParams =  {
      acttype: "13",
      act_type_name: "การเข้าร่วมกิจกรรมพบพ่อครู/แม่ครู",
      std_firstname: this.userdata.std_firstname,
      std_lastname: this.userdata.std_lastname,
      std_classroom: this.userdata.std_classroom,
      std_number: this.userdata.std_number,
      std_dorm: this.userdata.std_dormitory,
      std_id: this.userdata.std_ID,
      date: this.formdetail.date,
      head: this.formdetail.head
    };
    this.http.post("http://127.0.0.1/www/insert/form13insert.php", JSON.stringify(postParams))
      .subscribe(data => {
        console.log(data)
        this.navCtrl.pop()
      }, error => {
        console.log(error);});
  }

  async Form13Confirm() {
    const confirm = await this.alertCtrl.create({
      header: 'Save',
      message: 'Are you sure to save this activity?',
      buttons: [{ text: 'Cancel'},{ text: 'OK',handler: () => {this.Form13();}}]});
    await confirm.present();
  }


}
