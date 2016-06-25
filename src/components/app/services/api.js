import {bands} from './mock-data';

export class ApiService {
    url = 'http://localhost:1337/';

    constructor ($http) {
        this.http = $http;
    }

    getBands() {
    	console.log("llamada a get bands");
    	return new Promise(resolve => resolve(bands));
    }

    getAlbums(bandId) {
    	console.log("llamada a get albums");
    	return new Promise(resolve => resolve(albums));
    }

    getArtists(bandId) {
    	console.log("llamada a get artists");
    	return new Promise(resolve => resolve(artists));
    }

    getTracks(albumId) {
    	console.log("llamada a get tracks");
    	return new Promise(resolve => resolve(tracks));
    }

    getComments(trackId) {
    	console.log("llamada a get comments");
    	return new Promise(resolve => resolve(comments));
    }

}
