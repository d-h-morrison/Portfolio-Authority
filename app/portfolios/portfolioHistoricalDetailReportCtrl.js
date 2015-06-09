/**
 * Created by david on 6/8/2015.
 */

(function () {
    "use strict";
////debugger;
    angular.module("Port-Authority")
        .controller("PortfolioHistoricalDetailReportCtrl",
        ["PortfolioHistoricalDetail",
            "$state",
            PortfolioHistoricalDetailReportCtrl ]
    );

    function PortfolioHistoricalDetailReportCtrl(PortfolioHistoricalDetail,$state) {
        var vm = this;
        //vm.searchCriteria = "GDN";

/*        // Use Odata query to communicate with API backend.
        portfolioResource.query({ $filter: "contains(ProductCode, 'GDN') and Price ge 5 and Price le 30", $orderby: "Price desc" },function (data) {
                vm.portfolios = data;
            }
        );*/

        //debugger;
        // Query the Mock data source.
        PortfolioHistoricalDetail.query(function(data){
            vm.portfolios = data;
        });


    }

}());