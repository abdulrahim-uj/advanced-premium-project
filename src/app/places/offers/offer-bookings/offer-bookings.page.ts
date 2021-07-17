import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  mdlPlace: Place

  constructor(
    private activatedRout: ActivatedRoute,
    private navCtrl: NavController,
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    this.activatedRout.paramMap.subscribe(paramMapObj => {
      if(!paramMapObj.has('placeId')){
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.mdlPlace = this.placesService.places.find(pId => pId.id === paramMapObj.get('placeId'));
      // const placeID = paramMapObj.get('placeId');
      // this.mdlPlace = this.placesService.getplaceDetails(placeID);
    });
  }


}
