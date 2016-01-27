import DS from 'ember-data';

export default DS.Model.extend({
    postSummary: DS.belongsTo('post-summary', { async: true }),
    content: DS.attr('string'),
    attachments: DS.hasMany('attachment', { async: true })
});
