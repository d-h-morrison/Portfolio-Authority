/**
 * Created by david on 6/9/2015.
 */

(function () {
    "use strict";

    angular
        .module("common.services")
        .factory("portfolioHistoricalDetail",["$resource", portfolioHistoricalDetail]);

    function portfolioHistoricalDetail($resource){
        return $resource("/api/portfolios/:portfolioId")
    }

}());