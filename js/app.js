/**
 * Created by LIANGLijiao on 14/03/16.
 */

var app = angular.module('myShop', ['ngRoute']);


function shopsRouteConfig($routeProvider) {
    $routeProvider.
        when('/', {
            controller: 'myShopController',
            templateUrl: 'list.html'
        }).
        when('/shop/:shopId', {
            controller: 'bookController',
            templateUrl: 'book.html'
        }).
        when('/shop/:shopId/pay', {
            controller: 'payController',
            templateUrl: 'pay.html'
        }).
        otherwise({
            redirectTo: '/'
        });


};

app.config(shopsRouteConfig);


var shopsList = [
    {
        id: 1,
        nom: 'Boutique du Stade',
        adresse: '4 rue de la Foire aux Vins 75012 Paris',
        horaires: 'Lun-Ven 10h00 19h00, Sam 10h00 12h00'
    },
    {
        id: 2,
        nom: 'Marque à gogo',
        adresse: '15 avenue du président imaginaire 13001 Marseille',
        horaires: 'Lun-Ven 10h00 18h00'
    },
    {
        id: 3,
        nom: 'Les magiciens du net',
        adresse: '2 place du centre 75000 paris',
        horaires: 'Lun-Ven 10h00 19h00, Mer 10h00 14h00, Jeu-Ven 10h00 19h00'
    },
    {
        id: 4,
        nom: 'Article du luxe',
        adresse: '154 boulevard Rodriguez 69000 Lyon',
        horaires: 'Lun-Ven 10h00 19h00'
    },
    {
        id: 5,
        nom: 'Marché aux puces',
        adresse: '4 rue Frank Herbert 17000 La Rochelle',
        horaires: 'Lun-Dim 10h00 19h00'
    }
];

var booksList = [
    {
        id: 1,
        nom: 'Le développement pour les pros',
        prix: 14.90,
        quantity: "0"
    },
    {
        id: 2,
        nom: 'L\'avenir de la France dans les 100 prochaines années (et des poussières)',
        prix: "5",
        quantity: "0"

    }
];


