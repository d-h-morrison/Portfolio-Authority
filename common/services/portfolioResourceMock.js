/**
 * Created by david on 6/8/2015.
 */

(function(){
    "use strict";

    var app = angular
        .module("portfolioResourceMock",
                        ["ngMockE2E"]);
    
    app.run(function ($httpBackend) {

        var portfolios;
        portfolios = [
            {
                "portfolioId": 1,
                "portfolioName": "Leaf Rake Group",
                "portfolioCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf Rake. Private Wealth Fund.",
                "cost": 9.00,
                "NAV": 19.95,
                "category": "garden",
                "tags": ["leaf", "tool"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "portfolioId": 5,
                "portfolioName": "Hammer, MC",
                "portfolioCode": "TBX-0048",
                "releaseDate": "May 21, 2013",
                "description": "Curved Claw Steel Hammer.  Private Family.",
                "cost": 1.00,
                "NAV": 8.99,
                "category": "toolbox",
                "tags": ["tool"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            },
            {
                "portfolioId": 2,
                "portfolioName": "Garden Cart Consortium",
                "portfolioCode": "GDN-0023",
                "releaseDate": "March 18, 2010",
                "description": "Rolling Garden Cart. Private Investor.",
                "cost": 20.00,
                "NAV": 32.99,
                "category": "garden",
                "tags": ["barrow", "cart", "wheelbarrow"],
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
            },
            {
                "portfolioId": 6,
                "portfolioName": "Russian T-14 Armata G.P.",
                "portfolioCode": "RMS-0945",
                "releaseDate": "May 30, 2014",
                "description": "Battle Ready T-14.  Ammunition must be purchased separately.  Sovereign Wealth Fund",
                "cost": 45000000.00,
                "NAV": 75000000.00,
                "category": "arsenal",
                "tags": ["tool", "military", "insurgence"],
                "imageUrl": "https://openclipart.org/image/300px/svg_to_png/218607/T-14-Armata-by-Rones.png"
            }
        ];

        var portfolioUrl = "/api/portfolios";
        $httpBackend.whenGET(portfolioUrl).respond(portfolios);

        // Define whenGET for extensible mocking using a regular expression.
        var editingRegex = new RegExp(portfolioUrl + "/[0-9][0-9]*",'');
        $httpBackend.whenGET(editingRegex).respond(function (method,url,data) {
            var portfolio = {"portfolioId": 0};
            var parameters = url.split('/');
            var length = parameters.length;
            var id = parameters[length - 1];

            if (id > 0) {
                for (var i = 0; i < portfolios.length; i++) {
                    if (portfolios[i].portfolioId == id) {
                        portfolio = portfolios[i];
                        break;
                    }
                }
            }
            return [200, portfolio,{}];
        });

// I.E. $save()...
        $httpBackend.whenPOST(portfolioUrl).respond(function (method,url,data) {
            var portfolio = angular.fromJson(data);
            //debugger;
            if(!portfolio.portfolioId){
                // New portfolio.  Assign id.
                portfolio.portfolioId = portfolios[portfolios.length-1].portfolioId +1;
                portfolios.push(portfolio);
            }
            else{
                for (var i = 0; i < portfolios.length; i++) {
                    if (portfolios[i].portfolioId == portfolio.portfolioId) {
                        portfolios[i] = portfolio;
                        break;
                    }
                }
            }

            return [200, portfolio,{}];
        });


        // Pass any requests for application files through--don't intercept them.
        $httpBackend.whenGET(/app/).passThrough();

    })
}());