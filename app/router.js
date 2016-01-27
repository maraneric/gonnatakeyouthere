import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.resource('blog', function() {

    });

    this.resource('admin', function() {
        this.resource('admin.posts', { path: 'posts' }, function() {
            this.route('new');
            this.route('edit', { path: 'edit/:id'});
        });
        this.resource('admin.attachments', { path: 'attachments' }, function() {

        });
    });
});

export default Router;
