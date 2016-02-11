export default {
    name: 'inject-store',

    initialize: function(container, application) {
        application.inject('component', 'store', 'service:store');
    }
};
