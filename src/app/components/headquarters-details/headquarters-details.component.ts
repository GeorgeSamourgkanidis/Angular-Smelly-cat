import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'headquarters-details',
  standalone: true,
  imports: [GoogleMap, MapMarker, CommonModule],
  templateUrl: './headquarters-details.component.html',
  styleUrl: './headquarters-details.component.scss'
})
export class HeadquartersDetailsComponent {
  center: google.maps.LatLngLiteral = { lat: 40.63452198366542, lng: 22.943103897478856 };
  zoom = 16;
}
