import AdminBaseRoute from 'gonnatakeyouthere/routes/admin/base';

export default AdminBaseRoute.extend({
    model: function() {
        return this.store.createRecord('post-summary', {
            timestamp: new Date()
        });
    },
    setupController: function(controller) {
        this._super(...arguments);
        controller.set('body', this.store.createRecord('post-body'));
    },
    actions: {
        save: function() {
            const summary = this.get('controller.model'),
                body = this.get('controller.body');
            return body.save().then(() => {
                summary.set('postBody', body);
                return summary.save().then(() => {
                    return body.save().then(() => {
                        this.transitionTo('admin.posts');
                    });
                });
            });
        },
        cancel: function() {
            this.transitionTo('admin.posts');
        }
    }
});
