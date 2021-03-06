import AdminBaseRoute from 'gonnatakeyouthere/routes/admin/base';

export default AdminBaseRoute.extend({
    model: function() {
        return this.store.findAll('post-summary');
    },
    setupController: function(controller, model) {
        this._super(controller, model);
        this.controllerFor('admin').set('selectedTab', 'admin.posts');
    }
});
