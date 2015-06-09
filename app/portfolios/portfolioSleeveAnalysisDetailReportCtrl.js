/**
 * Created by david on 6/8/2015.
 */

(function () {
    "use strict";

    angular.module("Port-Authority")
        .controller("PortfolioSleeveAnalysisDetailReportCtrl",
        ["portfolio",
            "$state",
            PortfolioSleeveAnalysisDetailReportCtrl ]
    );

    function PortfolioSleeveAnalysisDetailReportCtrl(portfolio,$state) {
        var vm = this;
        vm.portfolio = portfolio;

    }

}());