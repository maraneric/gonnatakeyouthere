import AdminBaseRoute from 'gonnatakeyouthere/routes/admin/base';

export default AdminBaseRoute.extend({
    model: function() {
        return this.store.findAll('post-summary');
    }
});
