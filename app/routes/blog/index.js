import Ember from 'ember';

export default Ember.Route.extend({
    model: function() {
        return this.store.findAll('post-summary').then(array => array.filterBy('isPublished').sortBy('timestamp'));
    }
});
