import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    timestamp: DS.attr('date'),
    isPublished: DS.attr('boolean'),
    postBody: DS.belongsTo('post-body', { async: true })
});
