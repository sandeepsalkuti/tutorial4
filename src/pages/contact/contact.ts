import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  todos: string[] = [];
  todo: string;
  searchText: any;
  searchImageText: any;
  public getDescription: any;
  public getImageDet: any;
  url : any;
  public details: any;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private http: HttpClient) {

  }
  getDetails(){
    console.log(this.searchText);
    this.http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' + this.searchText + '&key=AIzaSyBg6Mk-p0Br270tvJZnfwSYOCeyYQcpgsM&limit=1&indent=True')
      .subscribe((data: any) => {
        this.getDescription = data;
        console.log('api call' +this.searchText);
        console.log(data.itemListElement[0].result.description);
        console.log(data.itemListElement[0].result.detailedDescription.url);
        console.log(data.itemListElement[0].result.detailedDescription.articleBody);
        console.log(this.getDescription);
        console.log('end');
      })
  }

  getImageDetails(){
    this.http.get('https://api.diffbot.com/v3/image?token=d37118e8be41231e1cbbde653e331928&url=' + this.url ).subscribe((data: any) => {
      this.getImageDet=data;
      console.log(data);
      console.log(this.getImageDet.objects[1].date);

    })
  }
  add() {
    // @ts-ignore
    this.todos.push(this.todo);
    this.todo = "";
  }

  delete(item) {
    // @ts-ignore
    var index = this.todos.indexOf(item);
    if (index > -1) {
      // @ts-ignore
      this.todos.splice(index, 1);
    }
  }
}
