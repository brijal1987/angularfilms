import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	private cities : Array<string> = ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'];
	public data: any = [];

	constructor(private weatherService: WeatherService) { 
		for (let city of this.cities) {
			this.weatherService.getSearchData({command: 'search', keyword: city}).subscribe((data) => {
				if(Object.keys(data[0]).length > 0) {
					this.weatherService.getLocationData({command: 'location', woeid: data[0].woeid}).subscribe((location) => {
						this.data.push(location);
					});
				}
			});
		}
	}	

}
