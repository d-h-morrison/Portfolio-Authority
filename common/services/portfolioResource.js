/**
 * Created by david on 6/8/2015.
 * This is the portfolioResource service.
 */
(
    function(){
        "use strict";

        angular
            .module("common.services")
            .factory("portfolioResource",["$resource", portfolioResource]);

        function portfolioResource($resource){
            return $resource("/api/portfolios/:portfolioId")
        }
    }()
);