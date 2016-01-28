import Ember from 'ember';
export default Ember.Route.extend({
    beforeModel: function() {
        if (this.get('session.isAuthenticated')) {
            this._goBackToPreviousTransition();
        } else {
            this.get('session').open('firebase', { provider: 'google'}).then(() => {
                this._goBackToPreviousTransition();
            });
        }
    },
    _goBackToPreviousTransition: function() {
        let transition = this.get('session.previousTransition');
        if (transition) {
            this.set('session.previousTransition');
            transition.retry().catch(() => {});
        } else {
            this.replaceWith('index');
        }
    }
});
