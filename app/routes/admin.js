import AdminBaseRoute from 'gonnatakeyouthere/routes/admin/base';

export default AdminBaseRoute.extend({
    actions: {
        navigate: function(toRoute) {
            this.transitionTo(toRoute);
        }
    }
});
