import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['row'],
    _initTabs: Ember.on('didInsertElement', function() {
        this.$('.tabs').tabs();
    })
});
