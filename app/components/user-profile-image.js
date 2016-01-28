import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['user-profile-image'],
    _initDropdown: Ember.on('didInsertElement', function() {
        this.$('img').dropdown({
            belowOrigin: true,
            alignment: 'right'
        });
    }),
    actions: {
        signOut: function() {
            this.sendAction('signOut');
        }
    }
});
