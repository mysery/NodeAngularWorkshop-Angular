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
                data: ApiService => ApiService.getBands()
            },
        })
        .when('/band/:bandId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                artists: (ApiService, $routeParams) => ApiService.getArtists($routeParams.bandId),
                albums: (ApiService, $routeParams) => ApiService.getAlbums($routeParams.bandId)
            },
        })
        .when('/band/:bandId/album/:albumId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                tracks: (ApiService, $routeParams) => ApiService.getTracks($routeParams.albumId)
            },
        })
        .when('/band/:bandId/album/:albumId/track/:trackId/', {
            templateUrl: '/components/app/views/band-detail.html',
            resolve: {
                comments: (ApiService, $routeParams) => new ApiService.getComments($routeParams.trackId)
            },
        });
}
