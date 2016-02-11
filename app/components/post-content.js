import Ember from 'ember';

export default Ember.Component.extend({
    _init: Ember.observer('post', Ember.on('init', function() {
        const post = this.get('post');
        if (post) {
            this.get('post.postBody').then(body => this.set('body', body));
        }
    })),
    _initMaterialBox: Ember.on('didInsertElement', Ember.observer('body.content', function() {
        Ember.run.scheduleOnce('afterRender', this, () => this.$('.materialboxed').materialbox());
    }))
});
