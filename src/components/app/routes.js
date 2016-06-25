import 'angular-route';

import {bands} from './services/mock-data';
import {artists} from './services/mock-data';
import {albums} from './services/mock-data';
import {tracks} from './services/mock-data';
import {ApiService} from './services/api';


export function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

    $routeProvider
        .otherwise('/')
        .when('/', {
            templateUrl: '/components/app/views/index.html',
            resolve: {
                // use resolve to to pass data to the template under $resolve
                data: () => new ApiService().getBands(), // mock data
            },
        })
        .when('/band/:bandId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                // use resolve to to pass data to the template under $resolve
                artists: () => new Promise(resolve => resolve(artists)),
                albums: () => new Promise(resolve => resolve(albums))
            },
        })
        .when('/band/:bandId/album/:albumId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                tracks: () => new Promise(resolve => resolve(tracks))
                // use resolve to to pass data to the template under $resolve
            },
        })
        .when('/band/:bandId/album/:albumId/track/:trackId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                comments: () => new Prom
                // use resolve to to pass data to the template under $resolve
            },
        });
}
