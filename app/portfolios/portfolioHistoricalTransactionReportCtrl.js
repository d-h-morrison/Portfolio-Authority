/**
 * Created by david on 6/8/2015.
 */

(function () {
    "use strict";

    angular.module("Port-Authority")
        .controller("PortfolioHistoricalTransactionReportCtrl",
        ["portfolio",
            "$state",
            PortfolioHistoricalTransactionReportCtrl ]
    );

    function PortfolioHistoricalTransactionReportCtrl(portfolio,$state) {
        var vm = this;
        vm.portfolio = portfolio;

    }

}());