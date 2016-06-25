import {bands} from './mock-data';
import {albums} from './mock-data';
import {artists} from './mock-data';
import {tracks} from './mock-data';
import {comments} from './mock-data';

export class ApiService {
    url = 'http://localhost:1338/';

    constructor ($http) {
        this.http = $http;
    }

    getBands() {
        console.log("llamada a get bands");
        //return new Promise(resolve => resolve(bands));
    	return this.http({method: 'GET', url: `${this.url}bands`}).then(response => response.data);
    }

    getAlbums(params) {
    	console.log("llamada a get albums de banda " , params); 
    	return new Promise(resolve => resolve(albums));
    }

    getArtists(params) {
    	console.log("llamada a get artistsde banda " , params);
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
