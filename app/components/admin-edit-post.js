import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['row'],
    actions: {
        save: function() {
            this.set('shouldSaveRichTextValue', true);
        },
        cancel: function() {
            this.sendAction('cancel');
        },
        delete: function() {
            this.sendAction('delete');
        },
        didSaveValue: function() {
            this.sendAction('save');
        }
    }
});
