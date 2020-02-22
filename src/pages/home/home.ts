import { Component } from '@angular/core';
import {NavController, AlertController} from 'ionic-angular';
import {AboutPage} from "../about/about";
import {HttpClient} from "@angular/common/http";
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  uname: String;
  password: String;
  url : any;
  public details: any;

  constructor(public alertCtrl: AlertController, public navCtrl: NavController){

  }
  signIn() {
    var name = localStorage.getItem('name');
    var pass = localStorage.getItem('password');
    if(this.uname == name && this.password == pass) {
      this.navCtrl.push(ContactPage);
    }else{
      let alert = this.alertCtrl.create({
        title:"Login Failure",
        subTitle: "Please Enter Valid Credentials",
        buttons:['ok']
      });
      alert.present();
    }
  }
  register(){
    this.navCtrl.push(AboutPage);
  }
}
