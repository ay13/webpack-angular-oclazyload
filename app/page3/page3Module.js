export default Angular => {
    const ngPage3Module = Angular.module('page3App', []);
    require('./page3.scss');
    require('./page3Controller')(ngPage3Module);
}
