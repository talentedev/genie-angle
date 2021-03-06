(function (angular) {
    'use strict';

    angular
        .module('components.keywords')
        .controller("addKeywordsCtrl", addKeywordsCtrl);
    addKeywordsCtrl.$inject = ['$scope', 'Notify', 'commonService', 'keywordsService'];

    function addKeywordsCtrl($scope, Notify, commonService, keywordsService) {
        /* jshint validthis:true */
        var vm = this;

        vm.selectedSite = {};
        vm.sites = [];
        vm.clearKeywords = clearKeywords;
        vm.createKeyword = createKeyword;

        activate();

        //////////////

        function activate() {
            getOwnSites(1);
        }

        // Get user's own site names.
        function getOwnSites(userID) {
            commonService
                .getUserSites(userID)
                .then(function (response) {
                    vm.sites = response.data;
                    vm.selectedSite = vm.sites[0];
                });
        }

        // Clear Keywords
        function clearKeywords() {
            vm.keywords = '';
        }

        // Add Keywords
        function createKeyword() {
            var data = {
                keyword: vm.keywords
            }
            keywordsService
                .addKeyword(data)
                .then(function (response) {
                    var msgHtml = 'Added New Keywords <a style="text-decoration:none;float:right;"><strong>UNDO</strong></a>';
                    Notify.alert(
                        msgHtml,
                        {status: 'success', pos: 'top-right'}
                    );
                });
        }
    }

})(angular);