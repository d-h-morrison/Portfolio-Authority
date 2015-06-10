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


/*
(function() {
    "use strict";
    angular
        .module("common.services")
        .factory("productResource",
        [
            "$resource",
            "appSettings",
            productResource
        ]);

    // Set up async REST communication with Web.API.
    function productResource($resource, appSettings) {
        return $resource(appSettings.serverPath + "api/products/:id", null,
            {
                // Custom $resource method since PUT is not provided out of the box by Angular.
                'update': {method: 'PUT'}
            });
    }
})();*/
