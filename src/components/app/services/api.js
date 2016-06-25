import {bands} from './mock-data';
import {albums} from './mock-data';
import {artists} from './mock-data';
import {tracks} from './mock-data';
import {comments} from './mock-data';

export class ApiService {
    url = 'http://localhost:1337/';

    constructor ($http, $routeParams) {
        this.http = $http;
        this.routeParams = $routeParams;
    }

    getBands() {
    	console.log("llamada a get bands");
    	return new Promise(resolve => resolve(bands));
    }

    getAlbums(bandId) {
    	console.log("llamada a get albums de banda " + bandId); 
    	return new Promise(resolve => resolve(albums));
    }

    getArtists(bandId) {
    	console.log("llamada a get artistsde banda " + bandId);
    	return new Promise(resolve => resolve(artists));
    }

    getTracks(albumId) {
    	console.log("llamada a get tracks de album " + albumId);
    	return new Promise(resolve => resolve(tracks));
    }

    getComments(trackId) {
    	console.log("llamada a get comments del track " + trackId);
    	return new Promise(resolve => resolve(comments));
    }
}
