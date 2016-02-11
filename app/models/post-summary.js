import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    codedTitle: DS.attr('string'),
    timestamp: DS.attr('date'),
    isPublished: DS.attr('boolean'),
    image: DS.attr('string'),
    // image: DS.belongsTo('attachment', { async: true }),
    postBody: DS.belongsTo('post-body', { async: true }),
    save: function() {
        this.set('codedTitle', Ember.String.underscore(this.get('title')));
        return this._super();
    }
});
