﻿(function (angular) {
    'use strict';

    angular
        .module('services')
        .factory('keywordsService', keywordsService);

    keywordsService.$inject = ["REST"];

    function keywordsService(REST) {

        var getKeywords = function (siteID) {
            return REST.getKeywords({
                siteId: siteID
            });
        };

        return {
            getKeywords: getKeywords
        };
    }

})(angular);