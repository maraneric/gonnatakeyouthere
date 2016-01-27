import AdminBaseRoute from 'gonnatakeyouthere/routes/admin/base';

export default AdminBaseRoute.extend({
    redirect: function() {
        this.replaceWith('admin.posts');
    }
});
