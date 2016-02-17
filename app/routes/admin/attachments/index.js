import AdminBaseRoute from 'gonnatakeyouthere/routes/admin/base';

export default AdminBaseRoute.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        this.controllerFor('admin').set('selectedTab', 'admin.attachments');
    }
});
