import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['row'],
    tabs: [
        { id: 'admin.posts', title: 'Posts'},
        { id: 'admin.attachments', title: 'Attachments' }
    ],
    _activeTabObserver: Ember.observer('selectedTab', function() {
        this.sendAction('navigate', this.get('selectedTab'));
    })
});
