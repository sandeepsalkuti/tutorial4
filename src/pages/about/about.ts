import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {ContactPage} from "../contact/contact";
import {HomePage} from "../home/home";


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  Fname: any;
  password: any;
  Lname: any;
  email: any;
  retypepassword: any;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController) {

  }

  Signup() {
    if (this.Fname == undefined || this.Lname == undefined || this.password == undefined || this.email == undefined || this.retypepassword == undefined ) {


      this.alertCtrl.create({
        title: "Registration failure",
        message: "Please check all the fields",
        buttons: ['ok']
      });
    } else {
      localStorage.setItem("name", this.Fname);
      localStorage.setItem("password", this.password);
      var alertc = this.alertCtrl.create({
        title: "Registered Successfully",
        subTitle: "Account is Created",
        buttons: [ {
          text: 'Ok',
          handler: () => {
            this.navCtrl.push(HomePage);
          }
        }]
      });
      alertc.present();

    }
  }
}
// if(this.password != this.retypepassword)
// {
//   var alertc = this.alertCtrl.create({
//     title: "Error display",
//     subTitle: "Mismatch password",
//   }),
//     }