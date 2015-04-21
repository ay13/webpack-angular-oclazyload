export default (ngModule, Angular) => {
    ngModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
        //$locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

        $urlRouterProvider.otherwise('/page1');

        $stateProvider.state('page1', {
            url: '/page1',
            templateProvider: ['$q', function($q) {
                var deferred = $q.defer();
                require.ensure(['./page1.html'], function() {
                    var template = require('./page1.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: function(){
                this.title = 'This is page 1';
            },
            controllerAs: 'test'
        }).state('page2', {
            url: '/page2',
            templateProvider: ['$q', function($q) {
                var deferred = $q.defer();
                require.ensure(['./page2.html'], function() {
                    var template = require('./page2.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: function(){
                this.title = 'This is page 2';
            },
            controllerAs: 'test'
        }).state('page3', {
            url: '/page3',
            templateProvider: ['$q', function($q) {
                var deferred = $q.defer();
                require.ensure(['./page3.html'], function() {
                    var template = require('./page3.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: 'Page3Controller',
            controllerAs: 'test'
        }).state('page4', {
            url: '/page4',
            templateProvider: ['$q', function($q) {
                let deferred = $q.defer();
                require.ensure(['./page4.html'], function() {
                    var template = require('./page4.html');
                    deferred.resolve(template);
                });
                return deferred.promise;
            }],
            controller: 'Page4Controller',
            controllerAs: 'test',

        // the new version of ui-router wants resolve to be an object-mapping
        // https://github.com/angular-ui/ui-router/wiki
        resolve: {
                foo: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                        var deferred = $q.defer();
                        require.ensure([], function() {
                            var module = require('./page4Module.js')(Angular);
                            $ocLazyLoad.load({
                                name: 'page4App' 
                            });
                            deferred.resolve(module);
                        });
                
                        return deferred.promise;
                }]
            }
/*
            resolve: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();

                require.ensure(['./page4Module.js'], function() {
                    var module = require('./page4Module.js')(Angular);
                    $ocLazyLoad.load({
                        name: 'page4App'
                    });
                    deferred.resolve(module);
                });

                return deferred.promise;
            }]
*/
        });
    }]);
}
