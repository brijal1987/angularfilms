import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeatherService {

	private url: string = 'http://localhost/angularfilms/weather.php';
	private searchData: any = {};
	private locationData: any = {};
	private observable: Observable<any>;

	constructor(private http: Http) { 
	}

	getSearchData(params) {
		if(this.searchData[params.keyword]) {
			return Observable.of(this.searchData[params.keyword]); 
		} else {
			let headers = new Headers();
			this.observable = this.http.get(this.url, {
				headers: headers,
				search: params
			})
			.map(response =>  {
				this.observable = null;

				if(response.status == 400) {
					return "FAILURE";
				} else if(response.status == 200) {
					this.searchData[params.keyword] = response.json();
					return this.searchData[params.keyword];
				}
			})
			.share();
			return this.observable;
		}
	}

	getLocationData(params) {
		if(this.locationData[params.woeid]) {
			return Observable.of(this.locationData[params.woeid]); 
		} else {
			let headers = new Headers();
			this.observable = this.http.get(this.url, {
				headers: headers,
				search: params
			})
			.map(response =>  {
				this.observable = null;

				if(response.status == 400) {
					return "FAILURE";
				} else if(response.status == 200) {
					this.locationData[params.woeid] = response.json();
					return this.locationData[params.woeid];
				}
			})
			.share();
			return this.observable;
		}
	}

}
