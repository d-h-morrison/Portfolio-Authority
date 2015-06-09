/**
 * Created by david on 6/8/2015.
 */

(function () {
    "use strict";

    angular.module("Port-Authority")
        .controller("PortfolioHistoricalDetailReportCtrl",
        ["portfolio",
            "$state",
            PortfolioHistoricalDetailReportCtrl ]
    );

    function PortfolioHistoricalDetailReportCtrl(portfolio,$state) {
        var vm = this;
        vm.portfolio = portfolio;

    }

}());