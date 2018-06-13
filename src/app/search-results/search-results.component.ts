import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnChanges {

	public data: any = [];
	public mode: boolean = false;
	private keyword: string = '';

	constructor(private weatherService: WeatherService, private route: ActivatedRoute) { 
		route.url.subscribe(() => {
			this.keyword = route.snapshot.paramMap.get('keyword');
			this.fetch();
		});
	}

	ngOnInit() {
		
	}

	fetch() {
		this.data = [];
		this.mode = true;
		this.weatherService.getSearchData({command: 'search', keyword: this.keyword})
		.finally(() => { this.mode = false; })
		.subscribe((data) => {
			if(Object.keys(data[0]).length > 0) {
				this.weatherService.getLocationData({command: 'location', woeid: data[0].woeid}).subscribe((location) => {
					this.data.push(location);
				});
			}
		});
	}

	ngOnChanges() {

	}

}
