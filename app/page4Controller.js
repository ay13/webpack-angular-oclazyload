let page4Controller = function(){
    let vm = this;
    vm.title = 'This is page 4';

    vm.pets = [
        {name: 'Ellie'},
        {name: 'Mr. Fish'},
        {name: 'Stella'},
        {name: 'Stuby'}
    ];
};

export default ngModule => {
    ngModule.controller('Page4Controller', page4Controller);
}