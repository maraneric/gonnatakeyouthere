import Ember from 'ember';
export default Ember.Route.extend({
    beforeModel: function(transition) {
        if (this.get('session.isAuthenticated')) {
            return this.store.find('user', this.get('session.uid')).then(user => {
                if (!user.get('isAdmin')) {
                    this._nonAdminUser();
                }
            }).catch(this._nonAdminUser.bind(this));
        } else {
            this.set('session.previousTransition', transition);
            this.transitionTo('login');
        }
    },
    _nonAdminUser: function() {
        window.Materialize.toast('You are not an admin!', 4000);
        this.replaceWith('index');
    }
});
