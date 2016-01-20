export default (ngModule, Angular) => {
    ngModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
        //$locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');

        $urlRouterProvider.otherwise('/page1');

        $stateProvider.state('page1', {
            url: '/page1',
            template: require('./page1.html'),
            controller: function () {
                this.title = 'This is page 1';
            },
            controllerAs: 'test'
        }).state('page2', {
            url: '/page2',
            template: require('./page2.html'),
            controller: function () {
                this.title = 'This is page 2';
            },
            controllerAs: 'test'
        }).state('page3', {
            url: '/page3',
            template: require('./page3/page3.html'),
            controller: 'Page3Controller',
            controllerAs: 'test'
        });
    }]);
        if(ON_DEMO){
            ngModule.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
                $stateProvider.state('page4', {
                    url: '/page4',
                    templateProvider: ['$q', function ($q) {
                        let deferred = $q.defer();
                        require.ensure(['./page4/page4.html'], function () {
                            let template = require('./page4/page4.html');
                            deferred.resolve(template);
                        });
                        return deferred.promise;
                    }],
                    controller: 'Page4Controller',
                    controllerAs: 'test',
                    resolve: {
                        foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
                            let deferred = $q.defer();
                            require.ensure([], function () {
                                let module = require('./page4/page4Module.js')(Angular);
                                $ocLazyLoad.load({
                                    name: 'page4App'
                                });
                                deferred.resolve(module);
                            });

                            return deferred.promise;
                        }]
                    }
                });
            }]);
            
        }


}