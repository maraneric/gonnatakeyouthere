import AdminBaseRoute from 'gonnatakeyouthere/routes/admin/base';

export default AdminBaseRoute.extend({
    model: function(params) {
        return this.store.find('post-summary', params.id).then(post =>{
            return post.get('postBody').then(body => {
                return {
                    post: post,
                    body: body
                };
            });
        }).catch(() => {
            this.replaceWith('admin.posts');
        });
    },
    actions: {
        save: function() {
            const model = this.get('controller.model');
            return model.body.save().then(() => {
                return model.post.save().then(() => {
                    this.transitionTo('admin.posts');
                });
            });
        },
        cancel: function() {
            this.transitionTo('admin.posts');
        },
        delete: function() {
            const model = this.get('controller.model');
            return model.body.destroyRecord().then(() => {
                return model.post.destroyRecord().then(() => {
                    this.transitionTo('admin.posts');
                });
            });
        }
    }
});
