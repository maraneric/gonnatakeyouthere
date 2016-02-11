import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params) {
        return this.store.query('post-summary', {
            orderBy: 'codedTitle',
            equalTo: params.codedTitle
        }).then(posts => {
            return posts.get('firstObject');
        });
    }
});
