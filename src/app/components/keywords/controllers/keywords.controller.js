﻿(function (angular) {
    'use strict';

    angular
        .module('components.keywords')
        .controller("keywordsController", keywordsController);
    keywordsController.$inject = ['$scope', '$timeout', '$resource', '$q', '$location', 'keywordsService', 'toastr', 'ngDialog'];

    function keywordsController($scope, $timeout, $resource, $q, $location, keywordsService, toastr, ngDialog) {
        var vm = this;
        vm.activeTab = 1;
        vm.addKeywordsOpenDialog = addKeywordsOpenDialog;

        activate();

        ///////////////////////

        function activate() {
            setRoute(); 
        }

        // Show add keywords modal.
        function addKeywordsOpenDialog() {
            ngDialog.open({
                template: 'app/views/modals/addKeywords.html',
                className: 'ngdialog-theme-default add-keywords',
                showClose: false
            });
        }

        // Detect the changing of the route.
        $scope.$on('$locationChangeStart', function(event) {
            setRoute();
        })

        // Define the behavior for sidebar menu.
        function setRoute() {
            switch($location.path()) {
                case '/app/keywords/dashboard':
                    vm.activeTab = 1;
                    break;
                case '/app/keywords/list':
                    vm.activeTab = 2;
                    break;
                case '/app/keywords/add-keywords':
                    addKeywordsOpenDialog();
                    break;
                case '/app/keywords/dashboard/statistics':
                    vm.activeTab = 1;
                    expandPanel('statistics');
                    changeIcon('statistics');
                    shakePanel('statistics');
                    break;
                case '/app/keywords/dashboard/engines':
                    vm.activeTab = 1;
                    expandPanel('searchEngine');
                    changeIcon('searchEngine');
                    shakePanel('searchEngine');
                    break;
                case '/app/keywords/dashboard/ranking':
                    vm.activeTab = 1;
                    expandPanel('chartsPanel');
                    changeIcon('chartsPanel');
                    shakePanel('chartsPanel');
                    break;
                default:
                    vm.activeTab = 1;
            }
        }

        // Expand panel
        function expandPanel(id) {
            var query = '#' + id + ' .panel-wrapper';
            var panel = angular.element(document.querySelector(query));
            panel.addClass('in');
            panel.removeAttr('style');
        }

        // Change arrow icon
        function changeIcon(id) {
            var queryDown = '#' + id + ' .panel-heading em:nth-child(1)';
            var queryUp = '#' + id + ' .panel-heading em:nth-child(2)';
            var arrowDown = angular.element(document.querySelector(queryDown));
            var arrowUp = angular.element(document.querySelector(queryUp));
            arrowUp.removeClass('ng-hide');
            arrowDown.addClass('ng-hide');
        }

        // Shake panel
        function shakePanel(id) {
            var query = '#' + id;
            var panel = angular.element(document.querySelector(query));
            panel.addClass('shake');
            $timeout(function() {
                panel.removeClass('shake');
            }, 1000);
        }
    }

})(angular);