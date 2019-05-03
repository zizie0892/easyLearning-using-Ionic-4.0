import {
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  NavController,
  ModalController
} from '@ionic/angular';
import {
  AuthenticateService
} from '../services/authentication.service';
import {
  IonInput,IonList,IonSlides
} from '@ionic/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  
  @ViewChild('slideWithNav') slideWithNav: IonSlides;
  
  slider: any;
  userEmail: string;

  slideOptsOne= {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService
  ) {}
  
  

  ngOnInit() {

    if (this.authService.userDetails()) {
      this.userEmail = this.authService.userDetails().email;
    } else {
      this.navCtrl.navigateBack('');
    }
  }

  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }
}