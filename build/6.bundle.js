webpackJsonp([6],{

/***/ 8:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	exports['default'] = function (Angular) {
	    var ngPage4Module = Angular.module('page4App', []);

	    __webpack_require__(13)(ngPage4Module);
	};

	module.exports = exports['default'];

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var page4Controller = function page4Controller() {
	    var vm = this;
	    vm.title = 'This is page 4';

	    vm.pets = [{ name: 'Ellie' }, { name: 'Mr. Fish' }, { name: 'Stella' }, { name: 'Stuby' }];
	};

	exports['default'] = function (ngModule) {
	    ngModule.controller('Page4Controller', page4Controller);
	};

	module.exports = exports['default'];

/***/ }

});