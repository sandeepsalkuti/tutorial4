import { async, TestBed } from '@angular/core/testing';
import {AlertController, IonicModule, NavController} from 'ionic-angular';
import {AlertControllerMock, AlertMock, NavControllerMock} from 'ionic-mocks';


import { AboutPage} from './about';


describe('About Page', () => {
  let fixture;
  let component;
  let alertCtrl: AlertController;
  let navCtrl: NavController;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutPage],
      imports: [
        IonicModule.forRoot(AboutPage)
      ],
      providers: [
        { provide: AlertController, useClass: AlertControllerMock },
        { provide: NavController, useClass: NavControllerMock }
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    alertCtrl = AlertControllerMock.instance();
    navCtrl = NavControllerMock.instance();
  });

  it('should be created', () => {
    expect(component instanceof AboutPage).toBe(true);
  });

  it('Registration fails, email not entered', () => {

    let registerF = new AboutPage(alertCtrl, navCtrl);
    registerF.Fname = 'Nikhitha';
    registerF.Lname = 'Kolluri';
    registerF.password = '123';
    registerF.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();

  });

  it('Registration success', () => {

    let registerP = new AboutPage(alertCtrl, navCtrl);
    registerP.Fname = 'Nikhitha';
    registerP.Lname = 'Kolluri';
    registerP.email = 'nkkhb@mail.umkc.edu';
    registerP.password = '123';
    registerP.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();

  });
  it("sign up function", () =>{

    let fun = new AboutPage(alertCtrl, navCtrl);
    fun.Signup();
    expect(alertCtrl.create).toHaveBeenCalled();
  });
});
