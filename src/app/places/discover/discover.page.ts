import { Component, OnDestroy, OnInit } from '@angular/core';

import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit, OnDestroy {

  loadedPlaces: Place[];

  constructor(
    private placesService: PlacesService
  ) { }

  ngOnInit() {
    console.log("@Discover ngOnInit");
    this.loadedPlaces = this.placesService.places;
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

}
