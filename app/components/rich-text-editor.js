import Ember from 'ember';
import Firebase from 'firebase';
import config from '../config/environment';

export default Ember.Component.extend({
    _init: Ember.on('didInsertElement', function() {
        let firebase = new Firebase(config.firebase);
        let codeMirror = window.CodeMirror(this.$()[0], { lineWrapping: true });
        let firepad = window.Firepad.fromCodeMirror(firebase, codeMirror, { richTextToolbar: true, richTextShortcuts: true });

        firepad.on('ready', () => {
            firepad.setHtml(this.get('value'));
      });
    })
});
