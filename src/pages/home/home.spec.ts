import { async, TestBed } from '@angular/core/testing';
import {AlertController, IonicModule, NavController} from 'ionic-angular';
import {AlertControllerMock, AlertMock, NavControllerMock} from 'ionic-mocks';
import {HomePage} from "./home";
import {HttpClientModule} from "@angular/common/http";
import {HttpTestingController} from "@angular/common/http/testing";

describe('Home Page', () => {
  let fixture;
  let component;
  let alertCtrl: AlertController;
  let navCtrl : NavController;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        HttpClientModule,
        IonicModule.forRoot(HomePage)
      ],
      providers: [
        { provide: AlertController, useClass: AlertControllerMock },
        { provide: NavController, useClass: NavControllerMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    alertCtrl = AlertControllerMock.instance();
    navCtrl = NavControllerMock.instance();
  });

  it('should be created', () => {
    expect(component instanceof HomePage).toBe(true);
  });

  it("login functionality check", () =>{

    let home = new HomePage(alertCtrl, navCtrl);
    home.signIn();
    expect(alertCtrl.create).toHaveBeenCalled();
  });

  it('create login', () => {
    expect(component).toBeTruthy();
  });

  it('Incorrect Password', () => {
    component.uname = 'hello';
    component.password = 'hello';
    let loginF = new HomePage(alertCtrl,navCtrl);
    loginF.signIn();
    expect(alertCtrl.create).toHaveBeenCalled();

  });

/*
  describe('when fetching all stuff', () => {
    it('should make a GET request', async(() => {
      //exampleService.getDetails();
      let APICall = new HomePage(navCtrl,alertCtrl, httpClient);
      APICall.getDetails();
      let httpMock :HttpTestingController;
      let req = httpMock.expectOne('https://kgsearch.googleapis.com/v1/entities:search?query=&key=AIzaSyBg6Mk-p0Br270tvJZnfwSYOCeyYQcpgsM&limit=1&indent=True')
      expect(req.request.method).toEqual('GET');
      req.flush([]);
    }));
  });*/


});
