import {bands} from './mock-data';

export class ApiService {
    url = 'http://localhost:1338/';


    constructor ($http) {
        this.http = $http;
    }

    getBands() {
    	console.log("llamada a get bands");
    	return new Promise(resolve => resolve(bands));
    }

}
