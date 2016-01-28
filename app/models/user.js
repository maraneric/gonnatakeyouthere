import DS from 'ember-data';

export default DS.Model.extend({
    isAdmin: DS.attr('boolean')
});
