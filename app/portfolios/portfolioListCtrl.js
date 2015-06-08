/**
 * Created by david on 6/8/2015.
 */
// Use an Immediately Invoked Function Expression (IIFE).
(
  function(){
      "use strict";

      angular
          .module("Port-Authority")// Register with main module.
          .controller("PortfolioListCtrl",
                        ["portfolioResource",
                            PortfolioListCtrl]);

      // Ask angular to pass a reference to the portfolioResource service to this specific controller function.
      // We do this by adding the portfolioResource as a parameter.
      function PortfolioListCtrl(portfolioResource){
          // Define Model
          var vm = this;

            portfolioResource.query(function(data){
                vm.portfolios = data;
            });

          // Define Methods for Actions in the view.
          vm.showImage = false;
          vm.toggleImage = function(){
              vm.showImage = !vm.showImage;
          }

          /*vm.portfolios = [
           {" portfolioId": 1,
           "portfolioName": "Leaf Rake",
           "portfolioCode": "GDN-0011",
           "releaseDate": "March 19, 2009",
           "description": "Leaf rake with 48-inch handle.",
           "cost": 9.00,
           "price": 19.95,
           "category": "garden",
           "tags": [ "leaf", "tool" ],
           "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
           },
           {
           "portfolioId": 5,
           "portfolioName": "Hammer",
           "portfolioCode": "TBX-0048",
           "releaseDate": "May 21, 2013",
           "description": "Curved claw steel hammer",
           "cost": 1.00,
           "price": 8.99,
           "category": "toolbox",
           "tags": ["tool"],
           "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
           },
           {
           "portfolioId": 6,
           "portfolioName": "Russian T-14 Armata",
           "portfolioCode": "RT14-0945",
           "releaseDate":"May 30, 2014",
           "description": "Battle ready T-14.  Ammunition must be purchased separately.",
           "cost": 45000000.00,
           "price": 75000000.00,
           "category": "arsenal",
           "tags": ["tool", "military", "insurgence"],
           "imageUrl":"https://openclipart.org/image/300px/svg_to_png/218607/T-14-Armata-by-Rones.png"
           }
           ];*/
      }
  }()
);