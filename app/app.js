/**
 * Created by david on 6/8/2015.
 */

    // Immediately-Invoked Function Expression (IIFE) AKA Self-executing anonymous function...
(function() {
    "use strict";
    var app = angular.module("Port-Authority" /*Main module*/,
                            ["common.services", /*dependencies*/
                             "ui.router", // Most full-featured Angular router based on named, nested and parallel views.
                             "ui.mask",  // Angular utility class for masking data entry fields.
                             "ui.bootstrap", // Bootstrap UI utilities.
                             "portfolioResourceMock"] /*use mock data until the back end is done*/ );

    app.config(["$stateProvider",
                "$urlRouterProvider",
                function($stateProvider, $urlRouterProvider)
                {

                    // The $urlRouterProvider service watches $location for changes to the URL.
                    // When $location changes, it finds a matching state and activates it.

                    // Default route as indicated by the "otherwise" method.
                    // If no valid state, or no active state name provided, we will navigate to the home page.
                    // Notice the fragment identifier "/" is that of the home state.
                    $urlRouterProvider.otherwise("/");

                    // Home route (default route).
                    $stateProvider
                        .state("home",{
                            url: "/", // Fragment identifier.
                            templateUrl: "app/welcomeView.html"
                        })

                        // portfolios state.
                        .state("portfolioList",{
                            // DO NOT OMIT THE "/" URL PREFIX OR THE ROUTE WILL NOT WORK.
                            url: "/portfolios", // Fragment identifier.
                            templateUrl: "app/portfolios/portfolioListView.html",
                            controller: "PortfolioListCtrl as vm"
                        })

                        // Edit state.
                        .state("portfolioEdit",{
                            // DO NOT OMIT THE "/" URL PREFIX OR THE ROUTE WILL NOT WORK.
                            abstract: true,  // Do not invoke the Edit state unless it makes sense.
                            url: "/portfolios/edit/:portfolioId", // Parameter passed to the state.
                            templateUrl:"app/portfolios/portfolioEditView.html",
                            controller: "PortfolioEditCtrl as vm",
                            resolve: {
                                portfolioResource: "portfolioResource",
                                portfolio: function(portfolioResource, $stateParams){
                                    var portfolioId = $stateParams.portfolioId;
                                    return portfolioResource.get({portfolioId: portfolioId}).$promise;
                                }
                            }
                        })

                        .state("portfolioEdit.price",{
                            url:"/price",
                            templateUrl: "app/portfolios/portfolioEditPriceView.html"
                        })

                        .state("portfolioEdit.tags",{
                            url:"/tags",
                            templateUrl: "app/portfolios/portfolioEditTagsView.html",
                            controller: "portfolioEditTagsCtrl as vm"
                        })

                        .state("portfolioEdit.info",{
                            url:"/info",
                            templateUrl: "app/portfolios/portfolioEditInfoView.html",
                            controller: "PortfolioEditInfoCtrl as vm",
                            resolve: {
                                portfolioResource: "portfolioResource",
                                portfolio: function(portfolioResource, $stateParams){
                                    var portfolioId = $stateParams.portfolioId;
                                    return portfolioResource.get({portfolioId: portfolioId}).$promise;
                                }
                            }
                        })

                        // Portfolio detail state.
                        .state("portfolioDetail",{
                            // DO NOT OMIT THE "/" URL PREFIX OR THE ROUTE WILL NOT WORK.
                            url: "/portfolios/:portfolioId", // Parameter passed to the state.
                            templateUrl:"app/portfolios/portfolioDetailView.html",
                            controller: "PortfolioDetailCtrl as vm",
                            resolve: {
                                portfolioResource: "portfolioResource",
                                portfolio: function(portfolioResource, $stateParams){
                                    var portfolioId = $stateParams.portfolioId;
                                    return portfolioResource.get({portfolioId: portfolioId}).$promise;
                                }
                            }
                        })

                }]

    );

}());