import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  loadedData: Place;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController
    ) { }

  ngOnInit() {
    console.log("@Discover ngOnInit");
    this.activatedRoute.paramMap.subscribe(paramMapObj => {
      if(!paramMapObj.has('placeId')) {
        //redirect the page, because check the id is valid or not
        return
      }
      const placeID = paramMapObj.get('placeId');
      this.loadedData = this.placesService.getplaceDetails(placeID);
      console.log("Data: : : ", this.loadedData);
    })
  }

  ionViewWillEnter() {
    console.log("@Discover ionViewWillEnter");
  }

  ionViewDidEnter() {
    console.log("@Discover ionViewDidEnter");
  }

  ionViewWillLeave() {
    console.log("@Discover ionViewWillLeave");
  }

  ionViewDidLeave() {
    console.log("@Discover ionViewDidLeave");
  }

  ngOnDestroy() {
    console.log("@Discover ngOnDestroy");
  }

  onBookPlace() {
    // this.router.navigateByUrl('/places/tabs/discover');
    // this.navCtrl.navigateBack('/places/tabs/discover');
    this.modalCtrl.create({component: CreateBookingComponent}).then(modelEl => {
      modelEl.present();
    });
  }

}
