/**
 * Created by david on 6/8/2015.
 */

(function () {
    "use strict";
////debugger;
    angular.module("Port-Authority")
        .controller("PortfolioHistoricalDetailReportCtrl",
        [
            "portfolioResource",
            "PortfolioHistoricalDetail",
            "$state",
            PortfolioHistoricalDetailReportCtrl ]
    );

    function PortfolioHistoricalDetailReportCtrl(portfolioResource,PortfolioHistoricalDetail,$state) {
        debugger;
        var vm = this;
        vm.state = {};
        vm.state.portfolioId = $state.params.portfolioId;
        vm.portfolio = portfolioResource;

        //vm.searchCriteria = "GDN";

/*        // Use Odata query to communicate with API backend.
        portfolioResource.query({ $filter: "contains(ProductCode, 'GDN') and Price ge 5 and Price le 30", $orderby: "Price desc" },function (data) {
                vm.portfolios = data;
            }
        );*/


        // Query the Mock data source.
/*        PortfolioHistoricalDetail.query(function(data){
            vm.portfolios = data;
        });*/

        vm.run = function(portfolioId){
            debugger;
            //$scope.data = [];
            var state = $state;
/*            var portfolioHistoricalDetail = PortfolioHistoricalDetail;
            /!*vm.portfolio*!/ portfolioHistoricalDetail.query(function(data){
                alert("I think this is the portfolio id: "+ vm.state.portfolioId)
                vm.portfolios = data;
            });*/

            PortfolioHistoricalDetail.query(function(data){
                alert("I think this is the portfolio id: "+ vm.state.portfolioId)
                vm.portfolios = data;
            });

        }

        vm.clear = function(){
            debugger;
            vm.portfolios = [];
        }

    }

}());