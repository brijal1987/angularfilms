import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

	Math: any;
	today: Date = new Date();
	@Input() locations: Array<Object>;
	@Input() type: string = 'mini';

	constructor() { 
		this.Math = Math;
	}

	ngOnInit() {
		
	}

}
