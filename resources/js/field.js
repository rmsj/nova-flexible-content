import DefaultField from './components/DefaultField'

Nova.booting((Vue, router, store) => {
    // Vue.component('index-nova-flexible-content', require('./components/IndexField'))
    Vue.component('detail-nova-flexible-content', require('./components/DetailField'))
    Vue.component('detail-nova-flexible-content-group', require('./components/DetailGroup'))
    Vue.component('form-nova-flexible-content', require('./components/FormField'))
    Vue.component('form-nova-flexible-content-group', require('./components/FormGroup'))
    Vue.component('flexible-drop-menu', require('./components/OriginalDropMenu'))
    Vue.component('flexible-search-menu', require('./components/SearchMenu'))
    Vue.component('delete-flexible-content-group-modal', require('./components/DeleteGroupModal'))
    Vue.component('icon-arrow-down', require('./components/icons/ArrowDown'))
    Vue.component('icon-arrow-up', require('./components/icons/ArrowUp'))
    Vue.component('icon-plus-square', require('./components/icons/PlusSquare'))
    Vue.component('icon-minus-square', require('./components/icons/MinusSquare'))
    Vue.component('default-field', DefaultField)
})
