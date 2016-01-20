let page3Controller = function(){
    let vm = this;
    vm.title = 'This is page 3';

    vm.family = [
        {name: 'Andy'},
        {name: 'Jamie'},
        {name: 'Lucy'},
        {name: 'Quinn'}
    ];
};

export default ngModule => {
    ngModule.controller('Page3Controller', page3Controller);
}