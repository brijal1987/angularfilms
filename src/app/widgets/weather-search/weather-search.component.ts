import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

	query: string = '';

	constructor(private route: ActivatedRoute) { 
		let searchKey = this.route.snapshot.children;
		route.url.subscribe(() => {
			this.query = route.snapshot.firstChild.paramMap.get('keyword');
		});
	}

	ngOnInit() {

	}

}
