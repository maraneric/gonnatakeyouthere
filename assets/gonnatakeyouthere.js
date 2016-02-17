"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('gonnatakeyouthere/adapters/application', ['exports', 'ember', 'emberfire/adapters/firebase'], function (exports, _ember, _emberfireAdaptersFirebase) {
  var inject = _ember['default'].inject;
  exports['default'] = _emberfireAdaptersFirebase['default'].extend({
    firebase: inject.service()
  });
});
define('gonnatakeyouthere/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'gonnatakeyouthere/config/environment'], function (exports, _ember, _emberResolver, _emberLoadInitializers, _gonnatakeyouthereConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _gonnatakeyouthereConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _gonnatakeyouthereConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _gonnatakeyouthereConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('gonnatakeyouthere/components/admin-edit-post', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        classNames: ['row'],
        actions: {
            save: function save() {
                this.set('shouldSaveRichTextValue', true);
            },
            cancel: function cancel() {
                this.sendAction('cancel');
            },
            'delete': function _delete() {
                this.sendAction('delete');
            },
            didSaveValue: function didSaveValue() {
                this.sendAction('save');
            }
        }
    });
});
define('gonnatakeyouthere/components/admin-nav-tabs', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        classNames: ['row'],
        tabs: [{ id: 'admin.posts', title: 'Posts' }, { id: 'admin.attachments', title: 'Attachments' }],
        _activeTabObserver: _ember['default'].observer('selectedTab', function () {
            this.sendAction('navigate', this.get('selectedTab'));
        })
    });
});
define('gonnatakeyouthere/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'gonnatakeyouthere/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _gonnatakeyouthereConfigEnvironment) {

  var name = _gonnatakeyouthereConfigEnvironment['default'].APP.name;
  var version = _gonnatakeyouthereConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('gonnatakeyouthere/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _emberModalDialogComponentsPositionedContainer) {
  exports['default'] = _emberModalDialogComponentsPositionedContainer['default'];
});
define('gonnatakeyouthere/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('gonnatakeyouthere/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, _emberRadioButtonComponentsLabeledRadioButton) {
  exports['default'] = _emberRadioButtonComponentsLabeledRadioButton['default'];
});
define('gonnatakeyouthere/components/materialize-badge', ['exports', 'ember', 'gonnatakeyouthere/components/md-badge'], function (exports, _ember, _gonnatakeyouthereComponentsMdBadge) {
  exports['default'] = _gonnatakeyouthereComponentsMdBadge['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-badge}} has been deprecated. Please use {{md-badge}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-button-submit', ['exports', 'ember', 'gonnatakeyouthere/components/md-btn-submit'], function (exports, _ember, _gonnatakeyouthereComponentsMdBtnSubmit) {
  exports['default'] = _gonnatakeyouthereComponentsMdBtnSubmit['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-button-submit}} has been deprecated. Please use {{md-btn-submit}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-button', ['exports', 'ember', 'gonnatakeyouthere/components/md-btn'], function (exports, _ember, _gonnatakeyouthereComponentsMdBtn) {
  exports['default'] = _gonnatakeyouthereComponentsMdBtn['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-button}} has been deprecated. Please use {{md-btn}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-card-action', ['exports', 'ember', 'gonnatakeyouthere/components/md-card-action'], function (exports, _ember, _gonnatakeyouthereComponentsMdCardAction) {
  exports['default'] = _gonnatakeyouthereComponentsMdCardAction['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-action}} has been deprecated. Please use {{md-card-action}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-card-content', ['exports', 'ember', 'gonnatakeyouthere/components/md-card-content'], function (exports, _ember, _gonnatakeyouthereComponentsMdCardContent) {
  exports['default'] = _gonnatakeyouthereComponentsMdCardContent['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-content}} has been deprecated. Please use {{md-card-content}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-card-panel', ['exports', 'ember', 'gonnatakeyouthere/components/md-card-panel'], function (exports, _ember, _gonnatakeyouthereComponentsMdCardPanel) {
  exports['default'] = _gonnatakeyouthereComponentsMdCardPanel['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-panel}} has been deprecated. Please use {{md-card-panel}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-card-reveal', ['exports', 'ember', 'gonnatakeyouthere/components/md-card-reveal'], function (exports, _ember, _gonnatakeyouthereComponentsMdCardReveal) {
  exports['default'] = _gonnatakeyouthereComponentsMdCardReveal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card-reveal}} has been deprecated. Please use {{md-card-reveal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-card', ['exports', 'ember', 'gonnatakeyouthere/components/md-card'], function (exports, _ember, _gonnatakeyouthereComponentsMdCard) {
  exports['default'] = _gonnatakeyouthereComponentsMdCard['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-card}} has been deprecated. Please use {{md-card}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-checkbox', ['exports', 'ember', 'gonnatakeyouthere/components/md-check'], function (exports, _ember, _gonnatakeyouthereComponentsMdCheck) {
  exports['default'] = _gonnatakeyouthereComponentsMdCheck['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-checkbox}} has been deprecated. Please use {{md-check}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-checkboxes', ['exports', 'ember', 'gonnatakeyouthere/components/md-checks'], function (exports, _ember, _gonnatakeyouthereComponentsMdChecks) {
  exports['default'] = _gonnatakeyouthereComponentsMdChecks['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-checkboxes}} has been deprecated. Please use {{md-checks}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-collapsible-card', ['exports', 'ember', 'gonnatakeyouthere/components/md-card-collapsible'], function (exports, _ember, _gonnatakeyouthereComponentsMdCardCollapsible) {
  exports['default'] = _gonnatakeyouthereComponentsMdCardCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-collapsible-card}} has been deprecated. Please use {{md-card-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-collapsible', ['exports', 'ember', 'gonnatakeyouthere/components/md-collapsible'], function (exports, _ember, _gonnatakeyouthereComponentsMdCollapsible) {
  exports['default'] = _gonnatakeyouthereComponentsMdCollapsible['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-collapsible}} has been deprecated. Please use {{md-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-copyright', ['exports', 'ember', 'gonnatakeyouthere/components/md-copyright'], function (exports, _ember, _gonnatakeyouthereComponentsMdCopyright) {
  exports['default'] = _gonnatakeyouthereComponentsMdCopyright['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-copyright}} has been deprecated. Please use {{md-copyright}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-date-input', ['exports', 'ember', 'gonnatakeyouthere/components/md-input-date'], function (exports, _ember, _gonnatakeyouthereComponentsMdInputDate) {
  exports['default'] = _gonnatakeyouthereComponentsMdInputDate['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-date-input}} has been deprecated. Please use {{md-input-date}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-input-field', ['exports', 'ember', 'gonnatakeyouthere/components/md-input-field'], function (exports, _ember, _gonnatakeyouthereComponentsMdInputField) {
  exports['default'] = _gonnatakeyouthereComponentsMdInputField['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-input-field}} has been deprecated. Please use {{md-input-field}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-input', ['exports', 'ember', 'gonnatakeyouthere/components/md-input'], function (exports, _ember, _gonnatakeyouthereComponentsMdInput) {
  exports['default'] = _gonnatakeyouthereComponentsMdInput['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-input}} has been deprecated. Please use {{md-input}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-loader', ['exports', 'ember', 'gonnatakeyouthere/components/md-loader'], function (exports, _ember, _gonnatakeyouthereComponentsMdLoader) {
  exports['default'] = _gonnatakeyouthereComponentsMdLoader['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-loader}} has been deprecated. Please use {{md-loader}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-modal', ['exports', 'ember', 'gonnatakeyouthere/components/md-modal'], function (exports, _ember, _gonnatakeyouthereComponentsMdModal) {
  exports['default'] = _gonnatakeyouthereComponentsMdModal['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-modal}} has been deprecated. Please use {{md-modal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-navbar', ['exports', 'ember', 'gonnatakeyouthere/components/md-navbar'], function (exports, _ember, _gonnatakeyouthereComponentsMdNavbar) {
  exports['default'] = _gonnatakeyouthereComponentsMdNavbar['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-pagination', ['exports', 'ember', 'gonnatakeyouthere/components/md-pagination'], function (exports, _ember, _gonnatakeyouthereComponentsMdPagination) {
  exports['default'] = _gonnatakeyouthereComponentsMdPagination['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-pagination}} has been deprecated. Please use {{md-pagination}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-parallax', ['exports', 'ember', 'gonnatakeyouthere/components/md-parallax'], function (exports, _ember, _gonnatakeyouthereComponentsMdParallax) {
  exports['default'] = _gonnatakeyouthereComponentsMdParallax['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-parallax}} has been deprecated. Please use {{md-parallax}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-radio', ['exports', 'ember', 'gonnatakeyouthere/components/md-radio'], function (exports, _ember, _gonnatakeyouthereComponentsMdRadio) {
  exports['default'] = _gonnatakeyouthereComponentsMdRadio['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-radio}} has been deprecated. Please use {{md-radio}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-radios', ['exports', 'ember', 'gonnatakeyouthere/components/md-radios'], function (exports, _ember, _gonnatakeyouthereComponentsMdRadios) {
  exports['default'] = _gonnatakeyouthereComponentsMdRadios['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-range', ['exports', 'ember', 'gonnatakeyouthere/components/md-range'], function (exports, _ember, _gonnatakeyouthereComponentsMdRange) {
  exports['default'] = _gonnatakeyouthereComponentsMdRange['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-range}} has been deprecated. Please use {{md-range}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-select', ['exports', 'ember', 'gonnatakeyouthere/components/md-select'], function (exports, _ember, _gonnatakeyouthereComponentsMdSelect) {
  exports['default'] = _gonnatakeyouthereComponentsMdSelect['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-select}} has been deprecated. Please use {{md-select}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-switch', ['exports', 'ember', 'gonnatakeyouthere/components/md-switch'], function (exports, _ember, _gonnatakeyouthereComponentsMdSwitch) {
  exports['default'] = _gonnatakeyouthereComponentsMdSwitch['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-switch}} has been deprecated. Please use {{md-switch}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-switches', ['exports', 'ember', 'gonnatakeyouthere/components/md-switches'], function (exports, _ember, _gonnatakeyouthereComponentsMdSwitches) {
  exports['default'] = _gonnatakeyouthereComponentsMdSwitches['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-tabs-tab', ['exports', 'ember', 'gonnatakeyouthere/components/md-tab'], function (exports, _ember, _gonnatakeyouthereComponentsMdTab) {
  exports['default'] = _gonnatakeyouthereComponentsMdTab['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-tabs-tab}} has been deprecated. Please use {{md-tab}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-tabs', ['exports', 'ember', 'gonnatakeyouthere/components/md-tabs'], function (exports, _ember, _gonnatakeyouthereComponentsMdTabs) {
  exports['default'] = _gonnatakeyouthereComponentsMdTabs['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-tabs}} has been deprecated. Please use {{md-tabs}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/materialize-textarea', ['exports', 'ember', 'gonnatakeyouthere/components/md-textarea'], function (exports, _ember, _gonnatakeyouthereComponentsMdTextarea) {
  exports['default'] = _gonnatakeyouthereComponentsMdTextarea['default'].extend({
    init: function init() {
      this._super.apply(this, arguments);
      _ember['default'].deprecate("{{materialize-textarea}} has been deprecated. Please use {{md-textarea}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('gonnatakeyouthere/components/md-badge', ['exports', 'ember-cli-materialize/components/md-badge'], function (exports, _emberCliMaterializeComponentsMdBadge) {
  exports['default'] = _emberCliMaterializeComponentsMdBadge['default'];
});
define('gonnatakeyouthere/components/md-btn-dropdown', ['exports', 'ember-cli-materialize/components/md-btn-dropdown'], function (exports, _emberCliMaterializeComponentsMdBtnDropdown) {
  exports['default'] = _emberCliMaterializeComponentsMdBtnDropdown['default'];
});
define('gonnatakeyouthere/components/md-btn-submit', ['exports', 'ember-cli-materialize/components/md-btn-submit'], function (exports, _emberCliMaterializeComponentsMdBtnSubmit) {
  exports['default'] = _emberCliMaterializeComponentsMdBtnSubmit['default'];
});
define('gonnatakeyouthere/components/md-btn', ['exports', 'ember-cli-materialize/components/md-btn'], function (exports, _emberCliMaterializeComponentsMdBtn) {
  exports['default'] = _emberCliMaterializeComponentsMdBtn['default'];
});
define('gonnatakeyouthere/components/md-card-action', ['exports', 'ember-cli-materialize/components/md-card-action'], function (exports, _emberCliMaterializeComponentsMdCardAction) {
  exports['default'] = _emberCliMaterializeComponentsMdCardAction['default'];
});
define('gonnatakeyouthere/components/md-card-collapsible', ['exports', 'ember-cli-materialize/components/md-card-collapsible'], function (exports, _emberCliMaterializeComponentsMdCardCollapsible) {
  exports['default'] = _emberCliMaterializeComponentsMdCardCollapsible['default'];
});
define('gonnatakeyouthere/components/md-card-content', ['exports', 'ember-cli-materialize/components/md-card-content'], function (exports, _emberCliMaterializeComponentsMdCardContent) {
  exports['default'] = _emberCliMaterializeComponentsMdCardContent['default'];
});
define('gonnatakeyouthere/components/md-card-panel', ['exports', 'ember-cli-materialize/components/md-card-panel'], function (exports, _emberCliMaterializeComponentsMdCardPanel) {
  exports['default'] = _emberCliMaterializeComponentsMdCardPanel['default'];
});
define('gonnatakeyouthere/components/md-card-reveal', ['exports', 'ember-cli-materialize/components/md-card-reveal'], function (exports, _emberCliMaterializeComponentsMdCardReveal) {
  exports['default'] = _emberCliMaterializeComponentsMdCardReveal['default'];
});
define('gonnatakeyouthere/components/md-card', ['exports', 'ember-cli-materialize/components/md-card'], function (exports, _emberCliMaterializeComponentsMdCard) {
  exports['default'] = _emberCliMaterializeComponentsMdCard['default'];
});
define('gonnatakeyouthere/components/md-check', ['exports', 'ember-cli-materialize/components/md-check'], function (exports, _emberCliMaterializeComponentsMdCheck) {
  exports['default'] = _emberCliMaterializeComponentsMdCheck['default'];
});
define('gonnatakeyouthere/components/md-checks-check', ['exports', 'ember-cli-materialize/components/md-checks-check'], function (exports, _emberCliMaterializeComponentsMdChecksCheck) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdChecksCheck['default'];
    }
  });
});
define('gonnatakeyouthere/components/md-checks', ['exports', 'ember-cli-materialize/components/md-checks'], function (exports, _emberCliMaterializeComponentsMdChecks) {
  exports['default'] = _emberCliMaterializeComponentsMdChecks['default'];
});
define('gonnatakeyouthere/components/md-collapsible', ['exports', 'ember-cli-materialize/components/md-collapsible'], function (exports, _emberCliMaterializeComponentsMdCollapsible) {
  exports['default'] = _emberCliMaterializeComponentsMdCollapsible['default'];
});
define('gonnatakeyouthere/components/md-collection', ['exports', 'ember-cli-materialize/components/md-collection'], function (exports, _emberCliMaterializeComponentsMdCollection) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdCollection['default'];
    }
  });
});
define('gonnatakeyouthere/components/md-copyright', ['exports', 'ember-cli-materialize/components/md-copyright'], function (exports, _emberCliMaterializeComponentsMdCopyright) {
  exports['default'] = _emberCliMaterializeComponentsMdCopyright['default'];
});
define('gonnatakeyouthere/components/md-fixed-btn', ['exports', 'ember-cli-materialize/components/md-fixed-btn'], function (exports, _emberCliMaterializeComponentsMdFixedBtn) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdFixedBtn['default'];
    }
  });
});
define('gonnatakeyouthere/components/md-fixed-btns', ['exports', 'ember-cli-materialize/components/md-fixed-btns'], function (exports, _emberCliMaterializeComponentsMdFixedBtns) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdFixedBtns['default'];
    }
  });
});
define('gonnatakeyouthere/components/md-input-date', ['exports', 'ember-cli-materialize/components/md-input-date'], function (exports, _emberCliMaterializeComponentsMdInputDate) {
  exports['default'] = _emberCliMaterializeComponentsMdInputDate['default'];
});
define('gonnatakeyouthere/components/md-input-field', ['exports', 'ember-cli-materialize/components/md-input-field'], function (exports, _emberCliMaterializeComponentsMdInputField) {
  exports['default'] = _emberCliMaterializeComponentsMdInputField['default'];
});
define('gonnatakeyouthere/components/md-input', ['exports', 'ember-cli-materialize/components/md-input'], function (exports, _emberCliMaterializeComponentsMdInput) {
  exports['default'] = _emberCliMaterializeComponentsMdInput['default'];
});
define('gonnatakeyouthere/components/md-loader', ['exports', 'ember-cli-materialize/components/md-loader'], function (exports, _emberCliMaterializeComponentsMdLoader) {
  exports['default'] = _emberCliMaterializeComponentsMdLoader['default'];
});
define('gonnatakeyouthere/components/md-modal-container', ['exports', 'ember-cli-materialize/components/md-modal-container'], function (exports, _emberCliMaterializeComponentsMdModalContainer) {
  exports['default'] = _emberCliMaterializeComponentsMdModalContainer['default'];
});
define('gonnatakeyouthere/components/md-modal', ['exports', 'ember-cli-materialize/components/md-modal'], function (exports, _emberCliMaterializeComponentsMdModal) {
  exports['default'] = _emberCliMaterializeComponentsMdModal['default'];
});
define('gonnatakeyouthere/components/md-navbar', ['exports', 'ember-cli-materialize/components/md-navbar'], function (exports, _emberCliMaterializeComponentsMdNavbar) {
  exports['default'] = _emberCliMaterializeComponentsMdNavbar['default'];
});
define('gonnatakeyouthere/components/md-pagination', ['exports', 'ember-cli-materialize/components/md-pagination'], function (exports, _emberCliMaterializeComponentsMdPagination) {
  exports['default'] = _emberCliMaterializeComponentsMdPagination['default'];
});
define('gonnatakeyouthere/components/md-parallax', ['exports', 'ember-cli-materialize/components/md-parallax'], function (exports, _emberCliMaterializeComponentsMdParallax) {
  exports['default'] = _emberCliMaterializeComponentsMdParallax['default'];
});
define('gonnatakeyouthere/components/md-radio', ['exports', 'ember-cli-materialize/components/md-radio'], function (exports, _emberCliMaterializeComponentsMdRadio) {
  exports['default'] = _emberCliMaterializeComponentsMdRadio['default'];
});
define('gonnatakeyouthere/components/md-radios-radio', ['exports', 'ember-cli-materialize/components/md-radios-radio'], function (exports, _emberCliMaterializeComponentsMdRadiosRadio) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdRadiosRadio['default'];
    }
  });
});
define('gonnatakeyouthere/components/md-radios', ['exports', 'ember-cli-materialize/components/md-radios'], function (exports, _emberCliMaterializeComponentsMdRadios) {
  exports['default'] = _emberCliMaterializeComponentsMdRadios['default'];
});
define('gonnatakeyouthere/components/md-range', ['exports', 'ember-cli-materialize/components/md-range'], function (exports, _emberCliMaterializeComponentsMdRange) {
  exports['default'] = _emberCliMaterializeComponentsMdRange['default'];
});
define('gonnatakeyouthere/components/md-select', ['exports', 'ember-cli-materialize/components/md-select'], function (exports, _emberCliMaterializeComponentsMdSelect) {
  exports['default'] = _emberCliMaterializeComponentsMdSelect['default'];
});
define('gonnatakeyouthere/components/md-switch', ['exports', 'ember-cli-materialize/components/md-switch'], function (exports, _emberCliMaterializeComponentsMdSwitch) {
  exports['default'] = _emberCliMaterializeComponentsMdSwitch['default'];
});
define('gonnatakeyouthere/components/md-switches-switch', ['exports', 'ember-cli-materialize/components/md-switches-switch'], function (exports, _emberCliMaterializeComponentsMdSwitchesSwitch) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdSwitchesSwitch['default'];
    }
  });
});
define('gonnatakeyouthere/components/md-switches', ['exports', 'ember-cli-materialize/components/md-switches'], function (exports, _emberCliMaterializeComponentsMdSwitches) {
  exports['default'] = _emberCliMaterializeComponentsMdSwitches['default'];
});
define('gonnatakeyouthere/components/md-tab', ['exports', 'ember-cli-materialize/components/md-tab'], function (exports, _emberCliMaterializeComponentsMdTab) {
  exports['default'] = _emberCliMaterializeComponentsMdTab['default'];
});
define('gonnatakeyouthere/components/md-table-col', ['exports', 'ember-cli-materialize/components/md-table-col'], function (exports, _emberCliMaterializeComponentsMdTableCol) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdTableCol['default'];
    }
  });
});
define('gonnatakeyouthere/components/md-table', ['exports', 'ember-cli-materialize/components/md-table'], function (exports, _emberCliMaterializeComponentsMdTable) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeComponentsMdTable['default'];
    }
  });
});
define('gonnatakeyouthere/components/md-tabs', ['exports', 'ember-cli-materialize/components/md-tabs'], function (exports, _emberCliMaterializeComponentsMdTabs) {
  exports['default'] = _emberCliMaterializeComponentsMdTabs['default'];
});
define('gonnatakeyouthere/components/md-textarea', ['exports', 'ember-cli-materialize/components/md-textarea'], function (exports, _emberCliMaterializeComponentsMdTextarea) {
  exports['default'] = _emberCliMaterializeComponentsMdTextarea['default'];
});
define('gonnatakeyouthere/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _emberModalDialogComponentsModalDialog) {
  exports['default'] = _emberModalDialogComponentsModalDialog['default'];
});
define('gonnatakeyouthere/components/post-content', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        _init: _ember['default'].observer('post', _ember['default'].on('init', function () {
            var _this = this;

            var post = this.get('post');
            if (post) {
                this.get('post.postBody').then(function (body) {
                    return _this.set('body', body);
                });
            }
        })),
        _initMaterialBox: _ember['default'].on('didInsertElement', _ember['default'].observer('body.content', function () {
            var _this2 = this;

            _ember['default'].run.scheduleOnce('afterRender', this, function () {
                return _this2.$('.materialboxed').materialbox();
            });
        }))
    });
});
define('gonnatakeyouthere/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, _emberRadioButtonComponentsRadioButtonInput) {
  exports['default'] = _emberRadioButtonComponentsRadioButtonInput['default'];
});
define('gonnatakeyouthere/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, _emberRadioButtonComponentsRadioButton) {
  exports['default'] = _emberRadioButtonComponentsRadioButton['default'];
});
define('gonnatakeyouthere/components/rich-text-editor', ['exports', 'ember', 'firebase', 'gonnatakeyouthere/config/environment'], function (exports, _ember, _firebase, _gonnatakeyouthereConfigEnvironment) {
    exports['default'] = _ember['default'].Component.extend({
        _init: _ember['default'].on('didInsertElement', function () {
            var _this = this;

            var firebase = new _firebase['default'](_gonnatakeyouthereConfigEnvironment['default'].firebase);
            var codeMirror = window.CodeMirror(this.$()[0], { lineWrapping: true });
            var firepad = window.Firepad.fromCodeMirror(firebase, codeMirror, { richTextToolbar: true, richTextShortcuts: true });

            firepad.on('ready', function () {
                firepad.setHtml(_this.get('value'));
            });
            this.set('firepad', firepad);
        }),
        _setValue: _ember['default'].observer('shouldSaveValue', function () {
            if (this.get('shouldSaveValue')) {
                this.set('shouldSaveValue', false);
                var value = this.get('firepad').getHtml();
                this.set('value', value);
                this.sendAction('saveValue', value);
            }
        })
    });
});
define('gonnatakeyouthere/components/user-profile-image', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        classNames: ['user-profile-image'],
        _initDropdown: _ember['default'].on('didInsertElement', function () {
            this.$('img').dropdown({
                belowOrigin: true,
                alignment: 'right'
            });
        }),
        actions: {
            signOut: function signOut() {
                this.sendAction('signOut');
            }
        }
    });
});
define('gonnatakeyouthere/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('gonnatakeyouthere/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('gonnatakeyouthere/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _emberModalDialogInitializersAddModalsContainer) {
  exports['default'] = {
    name: 'add-modals-container',
    initialize: _emberModalDialogInitializersAddModalsContainer['default']
  };
});
define('gonnatakeyouthere/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'gonnatakeyouthere/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _gonnatakeyouthereConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_gonnatakeyouthereConfigEnvironment['default'].APP.name, _gonnatakeyouthereConfigEnvironment['default'].APP.version)
  };
});
define('gonnatakeyouthere/initializers/ember-devtools', ['exports'], function (exports) {
  exports['default'] = {
    name: 'ember-devtools',
    after: typeof window.DS === 'object' ? 'ember-data' : null,
    initialize: function initialize(app) {}
  };
});
define('gonnatakeyouthere/initializers/emberfire', ['exports', 'emberfire/initializers/emberfire'], function (exports, _emberfireInitializersEmberfire) {
  exports['default'] = _emberfireInitializersEmberfire['default'];
});
define('gonnatakeyouthere/initializers/export-application-global', ['exports', 'ember', 'gonnatakeyouthere/config/environment'], function (exports, _ember, _gonnatakeyouthereConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_gonnatakeyouthereConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var value = _gonnatakeyouthereConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_gonnatakeyouthereConfigEnvironment['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('gonnatakeyouthere/initializers/initialize-torii-callback', ['exports', 'torii/redirect-handler'], function (exports, _toriiRedirectHandler) {
  exports['default'] = {
    name: 'torii-callback',
    before: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      application.deferReadiness();
      _toriiRedirectHandler['default'].handle(window)['catch'](function () {
        application.advanceReadiness();
      });
    }
  };
});
define('gonnatakeyouthere/initializers/initialize-torii-session', ['exports', 'torii/configuration', 'torii/bootstrap/session'], function (exports, _toriiConfiguration, _toriiBootstrapSession) {
  exports['default'] = {
    name: 'torii-session',
    after: 'torii',

    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      if (_toriiConfiguration['default'].sessionServiceName) {
        (0, _toriiBootstrapSession['default'])(application, _toriiConfiguration['default'].sessionServiceName);

        var sessionFactoryName = 'service:' + _toriiConfiguration['default'].sessionServiceName;
        application.inject('adapter', _toriiConfiguration['default'].sessionServiceName, sessionFactoryName);
      }
    }
  };
});
define('gonnatakeyouthere/initializers/initialize-torii', ['exports', 'torii/bootstrap/torii', 'torii/configuration'], function (exports, _toriiBootstrapTorii, _toriiConfiguration) {

  var initializer = {
    name: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      (0, _toriiBootstrapTorii['default'])(application);
      application.inject('route', 'torii', 'service:torii');
    }
  };

  if (window.DS) {
    initializer.after = 'store';
  }

  exports['default'] = initializer;
});
define('gonnatakeyouthere/initializers/inject-store', ['exports'], function (exports) {
    exports['default'] = {
        name: 'inject-store',

        initialize: function initialize(container, application) {
            application.inject('component', 'store', 'service:store');
        }
    };
});
define('gonnatakeyouthere/initializers/key-responder', ['exports', 'ember', 'gonnatakeyouthere/instance-initializers/key-responder'], function (exports, _ember, _gonnatakeyouthereInstanceInitializersKeyResponder) {

  var EMBER_VERSION_REGEX = /^([0-9]+)\.([0-9]+)\.([0-9]+)(?:(?:\-(alpha|beta)\.([0-9]+)(?:\.([0-9]+))?)?)?(?:\+(canary))?(?:\.([0-9abcdef]+))?(?:\-([A-Za-z0-9\.\-]+))?(?:\+([A-Za-z0-9\.\-]+))?$/;

  /**
   * VERSION_INFO[i] is as follows:
   *
   * 0  complete version string
   * 1  major version
   * 2  minor version
   * 3  trivial version
   * 4  pre-release type (optional: "alpha" or "beta" or undefined for stable releases)
   * 5  pre-release version (optional)
   * 6  pre-release sub-version (optional)
   * 7  canary (optional: "canary", or undefined for stable releases)
   * 8  SHA (optional)
   */
  var VERSION_INFO = EMBER_VERSION_REGEX.exec(_ember['default'].VERSION);

  exports['default'] = {
    name: 'ember-key-responder',

    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      var registry = !!arguments[1] ? arguments[0] : application.registry;
      var isPre1dot12 = parseInt(VERSION_INFO[1], 10) < 2 && parseInt(VERSION_INFO[2], 10) < 12;
      var container = application.__container__;

      application.inject('view', 'keyResponder', 'key-responder:main');
      application.inject('component', 'keyResponder', 'key-responder:main');

      // Set up a handler on the document for keyboard events that are not
      // handled by Ember's event dispatcher.
      _ember['default'].$(document).on('keyup.outside_ember_event_delegation', null, function (event) {

        if (_ember['default'].$(event.target).closest('.ember-view').length === 0) {
          var keyResponder = container.lookup('key-responder:main');
          var currentKeyResponder = keyResponder.get('current');
          if (currentKeyResponder && currentKeyResponder.get('isVisible')) {
            return currentKeyResponder.respondToKeyEvent(event, currentKeyResponder);
          }
        }

        return true;
      });

      if (isPre1dot12) {
        // For versions before 1.12.0, we have to call the instanceInitializer
        _gonnatakeyouthereInstanceInitializersKeyResponder['default'].initialize(registry, application);
      }
    }
  };
});
define('gonnatakeyouthere/initializers/md-settings', ['exports', 'gonnatakeyouthere/config/environment', 'ember-cli-materialize/services/md-settings'], function (exports, _gonnatakeyouthereConfigEnvironment, _emberCliMaterializeServicesMdSettings) {
  exports.initialize = initialize;

  function initialize(container, application) {
    var materializeDefaults = _gonnatakeyouthereConfigEnvironment['default'].materializeDefaults;

    application.register('config:materialize', materializeDefaults, { instantiate: false });
    application.register('service:materialize-settings', _emberCliMaterializeServicesMdSettings['default']);
    application.inject('service:materialize-settings', 'materializeDefaults', 'config:materialize');
  }

  exports['default'] = {
    name: 'md-settings',
    initialize: initialize
  };
});
define('gonnatakeyouthere/instance-initializers/ember-devtools', ['exports', 'gonnatakeyouthere/config/environment'], function (exports, _gonnatakeyouthereConfigEnvironment) {
  exports['default'] = {
    initialize: function initialize(appInstance) {
      var service = 'service:ember-devtools';
      var devTools = appInstance.lookup ? appInstance.lookup(service)
      // backwards compatibility < 2.1
      : appInstance.container.lookup(service);
      var devToolsConfig = _gonnatakeyouthereConfigEnvironment['default']['ember-devtools'] || {};
      if (devToolsConfig.global === true) {
        devTools.globalize();
      } else if (devToolsConfig.global) {
        window[devToolsConfig.global] = devTools;
      }
    }
  };
});
define('gonnatakeyouthere/instance-initializers/key-responder', ['exports', 'ember'], function (exports, _ember) {
  var Mixin = _ember['default'].Mixin;
  var on = _ember['default'].on;

  var ApplicationViewMixin = Mixin.create({
    delegateToKeyResponder: on('keyUp', function (event) {
      var currentKeyResponder = this.get('keyResponder.current');
      if (currentKeyResponder && currentKeyResponder.get('isVisible')) {
        // check to see if the event target is the keyResponder or the
        // keyResponders parents.  if so, no need to dispatch as it has
        // already had a chance to handle this event.
        var id = '#' + currentKeyResponder.get('elementId');
        if (_ember['default'].$(event.target).closest(id).length === 1) {
          return true;
        }
        return currentKeyResponder.respondToKeyEvent(event, currentKeyResponder);
      }
      return true;
    })
  });

  exports['default'] = {
    name: 'ember-key-responder-instance',

    initialize: function initialize() {
      // Handle 1.12.x case, where signature is
      //  initialize(instance) {...}
      var instance = arguments[1] || arguments[0];
      var container = !!arguments[1] ? arguments[0] : instance.container;

      // Set up a handler on the ApplicationView for keyboard events that were
      // not handled by the current KeyResponder yet
      var ApplicationView = container.lookupFactory ? container.lookupFactory('view:application') : instance.resolveRegistration('view:application');

      ApplicationView = ApplicationView.extend(ApplicationViewMixin);

      //TextField/TextArea are currently uninjectable, so we're going to hack our
      //way in
      _ember['default'].TextSupport.reopen({
        keyResponder: _ember['default'].computed(function () {
          return container.lookup('key-responder:main');
        }).readOnly()
      });
    }
  };
});
define('gonnatakeyouthere/instance-initializers/setup-routes', ['exports', 'torii/configuration', 'torii/bootstrap/routing', 'torii/router-dsl-ext'], function (exports, _toriiConfiguration, _toriiBootstrapRouting, _toriiRouterDslExt) {
  exports['default'] = {
    name: 'torii-setup-routes',
    initialize: function initialize(applicationInstance, registry) {
      if (_toriiConfiguration['default'].sessionServiceName) {
        var router = applicationInstance.get('router');
        var setupRoutes = function setupRoutes() {
          var authenticatedRoutes = router.router.authenticatedRoutes;
          var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
          if (hasAuthenticatedRoutes) {
            (0, _toriiBootstrapRouting['default'])(applicationInstance, authenticatedRoutes);
          }
          router.off('willTransition', setupRoutes);
        };
        router.on('willTransition', setupRoutes);
      }
    }
  };
});
define('gonnatakeyouthere/instance-initializers/walk-providers', ['exports', 'torii/configuration', 'torii/lib/container-utils'], function (exports, _toriiConfiguration, _toriiLibContainerUtils) {
  exports['default'] = {
    name: 'torii-walk-providers',
    initialize: function initialize(applicationInstance) {
      // Walk all configured providers and eagerly instantiate
      // them. This gives providers with initialization side effects
      // like facebook-connect a chance to load up assets.
      for (var key in _toriiConfiguration['default'].providers) {
        if (_toriiConfiguration['default'].providers.hasOwnProperty(key)) {
          (0, _toriiLibContainerUtils.lookup)(applicationInstance, 'torii-provider:' + key);
        }
      }
    }
  };
});
define('gonnatakeyouthere/key-responder', ['exports', 'ember'], function (exports, _ember) {
  var get = _ember['default'].get;
  var computed = _ember['default'].computed;
  var isNone = _ember['default'].isNone;

  /*
    Holds a stack of key responder views. With this we can neatly handle
    restoring the previous key responder when some modal UI element is closed.
    There are a few simple rules that governs the usage of the stack:
     - mouse click does .replace (this should also be used for programmatically taking focus when not a modal element)
     - opening a modal UI element does .push
     - closing a modal element does .pop
  
    Also noteworthy is that a view will be signaled that it loses the key focus
    only when it's popped off the stack, not when something is pushed on top. The
    idea is that when a modal UI element is opened, we know that the previously
    focused view will re-gain the focus as soon as the modal element is closed.
    So if the previously focused view was e.g. in the middle of some edit
    operation, it shouldn't cancel that operation.
  */
  var KeyResponder = _ember['default'].Object.extend({
    init: function init() {
      this.set('isActive', true);
      this.set('stack', _ember['default'].A());
      this._super.apply(this, arguments);
    },

    current: computed.readOnly('stack.lastObject'),
    pushView: function pushView(view, wasTriggeredByFocus) {
      if (!isNone(view)) {
        view.trigger('willBecomeKeyResponder', wasTriggeredByFocus);
        var stack = get(this, 'stack');
        stack.pushObject(view);
        view.trigger('didBecomeKeyResponder', wasTriggeredByFocus);
      }
      return view;
    },

    resume: function resume() {
      this.set('isActive', true);
    },

    pause: function pause() {
      this.set('isActive', false);
    },

    popView: function popView(wasTriggeredByFocus) {
      var stack = get(this, 'stack');
      if (get(this, 'stack.length') > 0) {
        var view = get(this, 'current');
        if (view) {
          view.trigger('willLoseKeyResponder', wasTriggeredByFocus);
        }
        view = stack.popObject();
        if (view) {
          view.trigger('didLoseKeyResponder', wasTriggeredByFocus);
        }
        return view;
      } else {
        return undefined;
      }
    },

    replaceView: function replaceView(view, wasTriggeredByFocus) {
      if (get(this, 'current') !== view) {
        this.popView(wasTriggeredByFocus);
        return this.pushView(view, wasTriggeredByFocus);
      }
    }
  });

  exports['default'] = KeyResponder;
  var KEY_EVENTS = {
    8: 'deleteBackward',
    9: 'insertTab',
    13: 'insertNewline',
    27: 'cancel',
    32: 'insertSpace',
    37: 'moveLeft',
    38: 'moveUp',
    39: 'moveRight',
    40: 'moveDown',
    46: 'deleteForward'
  };

  exports.KEY_EVENTS = KEY_EVENTS;
  var MODIFIED_KEY_EVENTS = {
    8: 'deleteForward',
    9: 'insertBacktab',
    37: 'moveLeftAndModifySelection',
    38: 'moveUpAndModifySelection',
    39: 'moveRightAndModifySelection',
    40: 'moveDownAndModifySelection'
  };

  exports.MODIFIED_KEY_EVENTS = MODIFIED_KEY_EVENTS;
  var KeyResponderSupportViewMixin = _ember['default'].Mixin.create({
    // Set to true in your view if you want to accept key responder status (which
    // is needed for handling key events)
    acceptsKeyResponder: false,
    canBecomeKeyResponder: computed('acceptsKeyResponder', 'disabled', 'isVisible', function () {
      return get(this, 'acceptsKeyResponder') && !get(this, 'disabled') && get(this, 'isVisible');
    }).readOnly(),

    becomeKeyResponderViaMouseDown: _ember['default'].on('mouseDown', function (evt) {
      var responder = this.get('keyResponder');
      if (responder === undefined) {
        return;
      }

      _ember['default'].run.later(function () {
        responder._inEventBubblingPhase = undefined;
      }, 0);

      if (responder._inEventBubblingPhase === undefined) {
        responder._inEventBubblingPhase = true;
        this.becomeKeyResponder(false);
      }
    }),

    /*
      Sets this view as the target of key events. Call this if you need to make
      this happen programmatically.  This gets also called on mouseDown if the
      view handles that, returns true and doesn't have property
      'acceptsKeyResponder'
      set to false. If mouseDown returned true but 'acceptsKeyResponder' is
      false, this call is propagated to the parent view.
       If called with no parameters or with replace = true, the current key
      responder is first popped off the stack and this view is then pushed. See
      comments for Ember.KeyResponderStack above for more insight.
    */
    becomeKeyResponder: function becomeKeyResponder(replace, wasTriggeredByFocus) {
      if (wasTriggeredByFocus === undefined) {
        wasTriggeredByFocus = false;
      }

      var keyResponder = get(this, 'keyResponder');

      if (!keyResponder) {
        return;
      }

      if (get(keyResponder, 'current') === this) {
        return;
      }

      if (get(this, 'canBecomeKeyResponder')) {
        if (replace === undefined || replace === true) {
          return keyResponder.replaceView(this, wasTriggeredByFocus);
        } else {
          return keyResponder.pushView(this, wasTriggeredByFocus);
        }
      } else {
        var parent = get(this, 'parentView');

        if (parent && parent.becomeKeyResponder) {
          return parent.becomeKeyResponder(replace, wasTriggeredByFocus);
        }
      }
    },

    becomeKeyResponderViaFocus: function becomeKeyResponderViaFocus() {
      return this.becomeKeyResponder(true, true);
    },

    /*
      Resign key responder status by popping the head off the stack. The head
      might or might not be this view, depending on whether user clicked anything
      since this view became the key responder. The new key responder
      will be the next view in the stack, if any.
    */
    resignKeyResponder: function resignKeyResponder(wasTriggeredByFocus) {
      if (wasTriggeredByFocus === undefined) {
        wasTriggeredByFocus = false;
      }

      var keyResponder = get(this, 'keyResponder');

      if (!keyResponder) {
        return;
      }

      keyResponder.popView(wasTriggeredByFocus);
    },

    resignKeyResponderViaFocus: function resignKeyResponderViaFocus() {
      return this.resignKeyResponder(true);
    },

    respondToKeyEvent: function respondToKeyEvent(event) {
      _ember['default'].run(this, function () {
        if (get(this, 'keyResponder.isActive')) {
          if (get(this, 'keyResponder.current.canBecomeKeyResponder')) {
            get(this, 'keyResponder.current').interpretKeyEvents(event);
          }
        }
      });
    },

    interpretKeyEvents: function interpretKeyEvents(event) {
      var mapping = event.shiftKey ? MODIFIED_KEY_EVENTS : KEY_EVENTS;
      var eventName = mapping[event.keyCode];

      if (eventName && this.has(eventName)) {
        return this.trigger(eventName, event);
      }

      return false;
    }
  });

  _ember['default'].View.reopen(KeyResponderSupportViewMixin);
  _ember['default'].Component.reopen(KeyResponderSupportViewMixin);

  var KeyResponderInputSupport = _ember['default'].Mixin.create({
    acceptsKeyResponder: true,
    init: function init() {
      this._super.apply(this, arguments);
      this.on('focusIn', this, this.becomeKeyResponderViaFocus);
      this.on('focusOut', this, this.resignKeyResponderViaBlur);
    },

    didBecomeKeyResponder: function didBecomeKeyResponder(wasTriggeredByFocus) {
      if (!wasTriggeredByFocus && this._state === 'inDOM') {
        this.$().focus();
      }
    },

    didLoseKeyResponder: function didLoseKeyResponder(wasTriggeredByFocus) {
      if (!wasTriggeredByFocus && this._state === 'inDOM') {
        this.$().blur();
      }
    }
  });

  exports.KeyResponderInputSupport = KeyResponderInputSupport;
  _ember['default'].TextSupport.reopen(KeyResponderInputSupport);
  _ember['default'].Checkbox.reopen(KeyResponderInputSupport);
  _ember['default'].Select.reopen(KeyResponderInputSupport);
});
define('gonnatakeyouthere/models/attachment', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        url: _emberData['default'].attr('string')
    });
});
define('gonnatakeyouthere/models/post-body', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        postSummary: _emberData['default'].belongsTo('post-summary', { async: true }),
        content: _emberData['default'].attr('string'),
        attachments: _emberData['default'].hasMany('attachment', { async: true })
    });
});
define('gonnatakeyouthere/models/post-summary', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        title: _emberData['default'].attr('string'),
        codedTitle: _emberData['default'].attr('string'),
        timestamp: _emberData['default'].attr('date'),
        isPublished: _emberData['default'].attr('boolean'),
        image: _emberData['default'].attr('string'),
        // image: DS.belongsTo('attachment', { async: true }),
        postBody: _emberData['default'].belongsTo('post-body', { async: true }),
        save: function save() {
            this.set('codedTitle', _ember['default'].String.underscore(this.get('title')));
            return this._super();
        }
    });
});
define('gonnatakeyouthere/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        isAdmin: _emberData['default'].attr('boolean')
    });
});
define('gonnatakeyouthere/router', ['exports', 'ember', 'gonnatakeyouthere/config/environment'], function (exports, _ember, _gonnatakeyouthereConfigEnvironment) {

    var Router = _ember['default'].Router.extend({
        location: _gonnatakeyouthereConfigEnvironment['default'].locationType
    });

    Router.map(function () {
        this.resource('blog', function () {
            this.route('post', { path: '/:codedTitle' });
        });

        this.resource('admin', function () {
            this.resource('admin.posts', { path: 'posts' }, function () {
                this.route('new');
                this.route('edit', { path: 'edit/:id' });
            });
            this.resource('admin.attachments', { path: 'attachments' }, function () {});
        });

        this.route('login');
    });

    exports['default'] = Router;
});
define('gonnatakeyouthere/routes/admin/attachments/index', ['exports', 'gonnatakeyouthere/routes/admin/base'], function (exports, _gonnatakeyouthereRoutesAdminBase) {
    exports['default'] = _gonnatakeyouthereRoutesAdminBase['default'].extend({
        setupController: function setupController(controller, model) {
            this._super(controller, model);
            this.controllerFor('admin').set('selectedTab', 'admin.attachments');
        }
    });
});
define('gonnatakeyouthere/routes/admin/base', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        beforeModel: function beforeModel(transition) {
            var _this = this;

            if (this.get('session.isAuthenticated')) {
                return this.store.find('user', this.get('session.uid')).then(function (user) {
                    if (!user.get('isAdmin')) {
                        _this._nonAdminUser();
                    }
                })['catch'](this._nonAdminUser.bind(this));
            } else {
                this.set('session.previousTransition', transition);
                this.transitionTo('login');
            }
        },
        _nonAdminUser: function _nonAdminUser() {
            window.Materialize.toast('You are not an admin!', 4000);
            this.replaceWith('index');
        }
    });
});
define('gonnatakeyouthere/routes/admin/index', ['exports', 'gonnatakeyouthere/routes/admin/base'], function (exports, _gonnatakeyouthereRoutesAdminBase) {
    exports['default'] = _gonnatakeyouthereRoutesAdminBase['default'].extend({
        redirect: function redirect() {
            this.replaceWith('admin.posts');
        }
    });
});
define('gonnatakeyouthere/routes/admin/posts/edit', ['exports', 'gonnatakeyouthere/routes/admin/base'], function (exports, _gonnatakeyouthereRoutesAdminBase) {
    exports['default'] = _gonnatakeyouthereRoutesAdminBase['default'].extend({
        model: function model(params) {
            var _this = this;

            return this.store.find('post-summary', params.id).then(function (post) {
                return post.get('postBody').then(function (body) {
                    return {
                        post: post,
                        body: body
                    };
                });
            })['catch'](function () {
                _this.replaceWith('admin.posts');
            });
        },
        actions: {
            save: function save() {
                var _this2 = this;

                var model = this.get('controller.model');
                return model.body.save().then(function () {
                    return model.post.save().then(function () {
                        _this2.transitionTo('admin.posts');
                    });
                });
            },
            cancel: function cancel() {
                this.transitionTo('admin.posts');
            },
            'delete': function _delete() {
                var _this3 = this;

                var model = this.get('controller.model');
                return model.body.destroyRecord().then(function () {
                    return model.post.destroyRecord().then(function () {
                        _this3.transitionTo('admin.posts');
                    });
                });
            }
        }
    });
});
define('gonnatakeyouthere/routes/admin/posts/index', ['exports', 'gonnatakeyouthere/routes/admin/base'], function (exports, _gonnatakeyouthereRoutesAdminBase) {
    exports['default'] = _gonnatakeyouthereRoutesAdminBase['default'].extend({
        model: function model() {
            return this.store.findAll('post-summary');
        },
        setupController: function setupController(controller, model) {
            this._super(controller, model);
            this.controllerFor('admin').set('selectedTab', 'admin.posts');
        }
    });
});
define('gonnatakeyouthere/routes/admin/posts/new', ['exports', 'gonnatakeyouthere/routes/admin/base'], function (exports, _gonnatakeyouthereRoutesAdminBase) {
    exports['default'] = _gonnatakeyouthereRoutesAdminBase['default'].extend({
        model: function model() {
            return this.store.createRecord('post-summary', {
                timestamp: new Date()
            });
        },
        setupController: function setupController(controller) {
            this._super.apply(this, arguments);
            controller.set('body', this.store.createRecord('post-body'));
        },
        actions: {
            save: function save() {
                var _this = this;

                var summary = this.get('controller.model'),
                    body = this.get('controller.body');
                return body.save().then(function () {
                    summary.set('postBody', body);
                    return summary.save().then(function () {
                        return body.save().then(function () {
                            _this.transitionTo('admin.posts');
                        });
                    });
                });
            },
            cancel: function cancel() {
                this.transitionTo('admin.posts');
            }
        }
    });
});
define('gonnatakeyouthere/routes/admin', ['exports', 'gonnatakeyouthere/routes/admin/base'], function (exports, _gonnatakeyouthereRoutesAdminBase) {
    exports['default'] = _gonnatakeyouthereRoutesAdminBase['default'].extend({
        actions: {
            navigate: function navigate(toRoute) {
                this.transitionTo(toRoute);
            }
        }
    });
});
define('gonnatakeyouthere/routes/application', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        beforeModel: function beforeModel() {
            return this.get('session').fetch()['catch'](function () {});
        },
        actions: {
            signIn: function signIn(provider) {
                this.get('session').open('firebase', { provider: provider }).then(function (data) {
                    console.log(data.currentUser);
                });
            },
            signOut: function signOut() {
                this.get('session').close();
                this.transitionTo('index');
            }
        }
    });
});
define('gonnatakeyouthere/routes/blog/index', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model() {
            return this.store.findAll('post-summary').then(function (array) {
                return array.filterBy('isPublished').sortBy('timestamp');
            });
        }
    });
});
define('gonnatakeyouthere/routes/blog/post', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        model: function model(params) {
            return this.store.query('post-summary', {
                orderBy: 'codedTitle',
                equalTo: params.codedTitle
            }).then(function (posts) {
                return posts.get('firstObject');
            });
        }
    });
});
define('gonnatakeyouthere/routes/index', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        redirect: function redirect() {
            this.replaceWith('blog.index');
        }
    });
});
define('gonnatakeyouthere/routes/login', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        beforeModel: function beforeModel() {
            var _this = this;

            if (this.get('session.isAuthenticated')) {
                this._goBackToPreviousTransition();
            } else {
                this.get('session').open('firebase', { provider: 'google' }).then(function () {
                    _this._goBackToPreviousTransition();
                });
            }
        },
        _goBackToPreviousTransition: function _goBackToPreviousTransition() {
            var transition = this.get('session.previousTransition');
            if (transition) {
                this.set('session.previousTransition');
                transition.retry()['catch'](function () {});
            } else {
                this.replaceWith('index');
            }
        }
    });
});
define('gonnatakeyouthere/services/ember-devtools', ['exports', 'ember'], function (exports, _ember) {
  var $ = _ember['default'].$;
  var Service = _ember['default'].Service;
  exports['default'] = Service.extend({
    container: null,
    renderedComponents: {},
    init: function init() {
      this.global = this.global || window;
      this.console = this.console || window.console;
      if (typeof DS === 'object') {
        this.store = this.container.lookup('service:store') || this.container.lookup('store:main'); // for ember-data < 2
        this.typeMaps = this.store.typeMaps;
      }
    },
    consoleLog: function consoleLog() {
      this.console.log.apply(this.console, arguments);
    },
    app: function app(name) {
      name = name || 'main';
      return this.container.lookup('application:' + name);
    },
    route: function route(name) {
      name = name || this.currentRouteName();
      return this.container.lookup('route:' + name);
    },
    controller: function controller(name) {
      name = name || this.currentRouteName();
      return this.container.lookup('controller:' + name);
    },
    model: function model(name) {
      var controller = this.controller(name);
      return controller && controller.get('model');
    },
    service: function service(name) {
      return this.lookup('service:' + name);
    },
    router: function router(name) {
      name = name || 'main';
      return this.container.lookup('router:' + name).get('router');
    },
    routes: function routes() {
      return Object.keys(this.router().recognizer.names);
    },
    component: function component(idDomElementOrSelector, type) {
      if (typeof idDomElementOrSelector === 'object') {
        idDomElementOrSelector = idDomElementOrSelector.id;
      }
      return this.lookup('component:' + type + '::' + idDomElementOrSelector);
    },
    currentRouteName: function currentRouteName() {
      return this.controller('application').get('currentRouteName');
    },
    currentPath: function currentPath() {
      return this.controller('application').get('currentPath');
    },
    log: function log(promise, property, getEach) {
      var self = this;
      return promise.then(function (value) {
        self.global.$E = value;
        if (property) {
          value = value[getEach ? 'getEach' : 'get'].call(value, property);
        }
        self.consoleLog(value);
      }, function (err) {
        self.console.error(err);
      });
    },
    lookup: function lookup(name) {
      return this.container.lookup(name);
    },
    lookupFactory: function lookupFactory(name) {
      return this.container.lookupFactory(name);
    },
    containerNameFor: function containerNameFor(object) {
      var cache = this.container.cache || this.container._defaultContainer.cache;
      var keys = Object.keys(cache);
      for (var i = 0; i < keys.length; i++) {
        if (cache[keys[i]] === object) return keys[i];
      }
    },
    inspect: _ember['default'].inspect,
    logResolver: function logResolver(bool) {
      bool = typeof bool === 'undefined' ? true : bool;
      _ember['default'].ENV.LOG_MODULE_RESOLVER = bool;
    },
    logAll: function logAll(bool) {
      bool = typeof bool === 'undefined' ? true : bool;
      var app = this.app();
      app.LOG_ACTIVE_GENERATION = bool;
      app.LOG_VIEW_LOOKUPS = bool;
      app.LOG_TRANSITIONS = bool;
      app.LOG_TRANSITIONS_INTERNAL = bool;
      this.logResolver(bool);
    },
    logRenders: function logRenders() {
      var self = this;

      _ember['default'].subscribe('render', {
        before: function before(name, start, payload) {
          return start;
        },
        after: function after(name, end, payload, start) {
          var id = payload.containerKey;
          if (!id) return;

          var duration = Math.round(end - start);
          var color = self.colorForRender(duration);
          var logId = 'renderedComponents.' + id;
          var ocurrences = self.get(logId);

          if (!ocurrences) {
            self.set(logId, []);
          }

          self.get(logId).push(duration);

          console.log('%c rendered ' + id + ' in ' + duration + 'ms', 'color: ' + color);
        }
      });
    },
    colorForRender: function colorForRender(duration) {
      var ok = '#000000';
      var warning = '#F1B178';
      var serious = '#E86868';

      if (duration < 300) return ok;
      if (duration < 600) return warning;

      return serious;
    },
    globalize: function globalize() {
      var self = this;
      var props = ['app', 'container', 'store', 'typeMaps', 'route', 'controller', 'model', 'service', 'routes', 'view', 'component', 'currentRouteName', 'currentPath', 'log', 'lookup', 'lookupFactory', 'containerNameFor', 'inspect', 'logResolver', 'logAll'];
      // don't stomp on pre-existing global vars
      var skipGlobalize = this.constructor.skipGlobalize;
      if (skipGlobalize === null) {
        skipGlobalize = this.constructor.skipGlobalize = props.filter(function (prop) {
          return !_ember['default'].isNone(self.global[prop]);
        });
      }
      props.map(function (name) {
        if (skipGlobalize.indexOf(name) !== -1) return;
        var prop = self[name];
        if (typeof prop === 'function') {
          prop = function () {
            return self[name].apply(self, arguments);
          };
        }
        self.global[name] = prop;
      });
    }
  }).reopenClass({
    skipGlobalize: null
  });
});
/* global DS */
define('gonnatakeyouthere/services/firebase', ['exports', 'emberfire/services/firebase', 'gonnatakeyouthere/config/environment'], function (exports, _emberfireServicesFirebase, _gonnatakeyouthereConfigEnvironment) {

  _emberfireServicesFirebase['default'].config = _gonnatakeyouthereConfigEnvironment['default'];

  exports['default'] = _emberfireServicesFirebase['default'];
});
define('gonnatakeyouthere/services/md-settings', ['exports', 'ember-cli-materialize/services/md-settings'], function (exports, _emberCliMaterializeServicesMdSettings) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeServicesMdSettings['default'];
    }
  });
});
define('gonnatakeyouthere/services/modal-dialog', ['exports', 'ember-modal-dialog/services/modal-dialog'], function (exports, _emberModalDialogServicesModalDialog) {
  exports['default'] = _emberModalDialogServicesModalDialog['default'];
});
define("gonnatakeyouthere/templates/admin/posts/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "gonnatakeyouthere/templates/admin/posts/edit.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "admin-edit-post", [], ["post", ["subexpr", "@mut", [["get", "model.post", ["loc", [null, [1, 23], [1, 33]]]]], [], []], "body", ["subexpr", "@mut", [["get", "model.body", ["loc", [null, [1, 39], [1, 49]]]]], [], []], "save", "save", "cancel", "cancel", "delete", "delete"], ["loc", [null, [1, 0], [1, 95]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("gonnatakeyouthere/templates/admin/posts/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 4
              },
              "end": {
                "line": 2,
                "column": 81
              }
            },
            "moduleName": "gonnatakeyouthere/templates/admin/posts/index.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["content", "item.title", ["loc", [null, [2, 67], [2, 81]]]]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "gonnatakeyouthere/templates/admin/posts/index.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "link-to", ["admin.posts.edit", ["get", "item.id", ["loc", [null, [2, 34], [2, 41]]]]], ["class", "collection-item"], 0, null, ["loc", [null, [2, 4], [2, 93]]]]],
        locals: ["item"],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 4
            },
            "end": {
              "line": 6,
              "column": 145
            }
          },
          "moduleName": "gonnatakeyouthere/templates/admin/posts/index.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.setAttribute(el1, "class", "mdi-content-add");
          var el2 = dom.createTextNode("add");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "gonnatakeyouthere/templates/admin/posts/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "right-align");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "md-collection", [], ["content", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 25], [1, 30]]]]], [], []]], 0, null, ["loc", [null, [1, 0], [3, 18]]]], ["block", "link-to", ["admin.posts.new"], ["class", "btn-floating btn-large waves-effect waves-light deep-purple accent-2"], 1, null, ["loc", [null, [6, 4], [6, 157]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("gonnatakeyouthere/templates/admin/posts/new", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "gonnatakeyouthere/templates/admin/posts/new.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "admin-edit-post", [], ["post", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 23], [1, 28]]]]], [], []], "body", ["subexpr", "@mut", [["get", "body", ["loc", [null, [1, 34], [1, 38]]]]], [], []], "save", "save", "cancel", "cancel", "isNew", true], ["loc", [null, [1, 0], [1, 79]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("gonnatakeyouthere/templates/admin", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "gonnatakeyouthere/templates/admin.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "admin-nav-tabs", [], ["selectedTab", ["subexpr", "@mut", [["get", "selectedTab", ["loc", [null, [1, 29], [1, 40]]]]], [], []], "navigate", "navigate"], ["loc", [null, [1, 0], [1, 62]]]], ["content", "outlet", ["loc", [null, [3, 0], [3, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("gonnatakeyouthere/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 39
            },
            "end": {
              "line": 2,
              "column": 118
            }
          },
          "moduleName": "gonnatakeyouthere/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("A House Called Panic");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 12
            },
            "end": {
              "line": 6,
              "column": 12
            }
          },
          "moduleName": "gonnatakeyouthere/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "user-profile-image", [], ["user", ["subexpr", "@mut", [["get", "session.currentUser", ["loc", [null, [5, 42], [5, 61]]]]], [], []], "signOut", "signOut"], ["loc", [null, [5, 16], [5, 81]]]]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 20
              },
              "end": {
                "line": 7,
                "column": 47
              }
            },
            "moduleName": "gonnatakeyouthere/templates/application.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Sign in");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 12
            },
            "end": {
              "line": 8,
              "column": 12
            }
          },
          "moduleName": "gonnatakeyouthere/templates/application.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["block", "link-to", ["login"], [], 0, null, ["loc", [null, [7, 20], [7, 59]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 27,
            "column": 0
          }
        },
        "moduleName": "gonnatakeyouthere/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "class", "teal");
        dom.setAttribute(el1, "role", "navigation");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "nav-wrapper container");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "right");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "section");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("footer");
        dom.setAttribute(el1, "class", "page-footer teal");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "footer-copyright");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(element0, 0, 0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [2]), 1, 1);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [2, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[4] = dom.createMorphAt(dom.childAt(fragment, [6, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["index"], ["id", "logo-container", "class", "brand-logo"], 0, null, ["loc", [null, [2, 39], [2, 130]]]], ["block", "if", [["get", "session.currentUser", ["loc", [null, [4, 18], [4, 37]]]]], [], 1, 2, ["loc", [null, [4, 12], [8, 19]]]], ["content", "outlet", ["loc", [null, [15, 8], [15, 18]]]], ["content", "md-modal-container", ["loc", [null, [20, 0], [20, 22]]]], ["inline", "md-copyright", [], ["text", "Cristina Marantette", "startYear", 2014], ["loc", [null, [24, 4], [24, 62]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("gonnatakeyouthere/templates/blog/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 9,
                  "column": 20
                },
                "end": {
                  "line": 11,
                  "column": 20
                }
              },
              "moduleName": "gonnatakeyouthere/templates/blog/index.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["content", "post.timestamp", ["loc", [null, [10, 24], [10, 42]]]]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@1.13.11",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 14,
                    "column": 24
                  },
                  "end": {
                    "line": 14,
                    "column": 62
                  }
                },
                "moduleName": "gonnatakeyouthere/templates/blog/index.hbs"
              },
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("View post");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@1.13.11",
              "loc": {
                "source": null,
                "start": {
                  "line": 13,
                  "column": 20
                },
                "end": {
                  "line": 15,
                  "column": 20
                }
              },
              "moduleName": "gonnatakeyouthere/templates/blog/index.hbs"
            },
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                        ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["block", "link-to", ["blog.post", ["get", "post", ["loc", [null, [14, 47], [14, 51]]]]], [], 0, null, ["loc", [null, [14, 24], [14, 74]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@1.13.11",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 16
              },
              "end": {
                "line": 16,
                "column": 16
              }
            },
            "moduleName": "gonnatakeyouthere/templates/blog/index.hbs"
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "md-card-content", [], [], 0, null, ["loc", [null, [9, 20], [11, 40]]]], ["block", "md-card-action", [], [], 1, null, ["loc", [null, [13, 20], [15, 39]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 8
            },
            "end": {
              "line": 18,
              "column": 8
            }
          },
          "moduleName": "gonnatakeyouthere/templates/blog/index.hbs"
        },
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "col s12 m6 l4");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("            ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "md-card", [], ["title", ["subexpr", "@mut", [["get", "post.title", ["loc", [null, [5, 33], [5, 43]]]]], [], []], "titleClass", "deep-purple-text text-accent-2", "image", ["subexpr", "@mut", [["get", "post.image", ["loc", [null, [7, 26], [7, 36]]]]], [], []]], 0, null, ["loc", [null, [5, 16], [16, 28]]]]],
        locals: ["post"],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 21,
            "column": 0
          }
        },
        "moduleName": "gonnatakeyouthere/templates/blog/index.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("section");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "row");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [3, 16], [3, 21]]]]], [], 0, null, ["loc", [null, [3, 8], [18, 17]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("gonnatakeyouthere/templates/blog/post", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "gonnatakeyouthere/templates/blog/post.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "post-content", [], ["post", ["subexpr", "@mut", [["get", "model", ["loc", [null, [1, 20], [1, 25]]]]], [], []]], ["loc", [null, [1, 0], [1, 27]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("gonnatakeyouthere/templates/blog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "gonnatakeyouthere/templates/blog.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [1, 0], [1, 10]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("gonnatakeyouthere/templates/components/admin-edit-post", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 4
            },
            "end": {
              "line": 9,
              "column": 4
            }
          },
          "moduleName": "gonnatakeyouthere/templates/components/admin-edit-post.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "md-btn", [], ["text", "Delete", "action", "delete", "class", "red"], ["loc", [null, [8, 8], [8, 59]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "gonnatakeyouthere/templates/components/admin-edit-post.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "right-align");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [10]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 6, 6, contextualElement);
        morphs[4] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        morphs[5] = dom.createMorphAt(element0, 1, 1);
        morphs[6] = dom.createMorphAt(element0, 3, 3);
        morphs[7] = dom.createMorphAt(element0, 5, 5);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "md-input", [], ["value", ["subexpr", "@mut", [["get", "post.title", ["loc", [null, [1, 17], [1, 27]]]]], [], []], "label", "Title", "class", "col s12", "errors", ["subexpr", "@mut", [["get", "errors.title", ["loc", [null, [1, 65], [1, 77]]]]], [], []]], ["loc", [null, [1, 0], [1, 79]]]], ["inline", "md-input-date", [], ["label", "Date", "value", ["subexpr", "@mut", [["get", "post.timestamp", ["loc", [null, [2, 35], [2, 49]]]]], [], []], "class", "col s12"], ["loc", [null, [2, 0], [2, 67]]]], ["inline", "md-input", [], ["value", ["subexpr", "@mut", [["get", "post.image", ["loc", [null, [3, 17], [3, 27]]]]], [], []], "label", "Title image", "class", "col s12", "errors", ["subexpr", "@mut", [["get", "errors.image", ["loc", [null, [3, 71], [3, 83]]]]], [], []]], ["loc", [null, [3, 0], [3, 85]]]], ["inline", "rich-text-editor", [], ["value", ["subexpr", "@mut", [["get", "body.content", ["loc", [null, [4, 25], [4, 37]]]]], [], []], "class", "col s12", "shouldSaveValue", ["subexpr", "@mut", [["get", "shouldSaveRichTextValue", ["loc", [null, [4, 70], [4, 93]]]]], [], []], "saveValue", "didSaveValue"], ["loc", [null, [4, 0], [4, 120]]]], ["inline", "md-check", [], ["name", "Publish the post?", "checked", ["subexpr", "@mut", [["get", "post.isPublished", ["loc", [null, [5, 44], [5, 60]]]]], [], []]], ["loc", [null, [5, 0], [5, 62]]]], ["block", "unless", [["get", "isNew", ["loc", [null, [7, 14], [7, 19]]]]], [], 0, null, ["loc", [null, [7, 4], [9, 15]]]], ["inline", "md-btn", [], ["text", "Cancel", "action", "cancel", "class", "grey darken-4"], ["loc", [null, [10, 4], [10, 65]]]], ["inline", "md-btn", [], ["text", "Save", "action", "save", "class", "deep-purple accent-2"], ["loc", [null, [11, 4], [11, 68]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("gonnatakeyouthere/templates/components/admin-nav-tabs", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "gonnatakeyouthere/templates/components/admin-nav-tabs.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "md-tabs", [], ["content", ["subexpr", "@mut", [["get", "tabs", ["loc", [null, [1, 18], [1, 22]]]]], [], []], "selected", ["subexpr", "@mut", [["get", "selectedTab", ["loc", [null, [1, 32], [1, 43]]]]], [], []], "class", "z-depth-1"], ["loc", [null, [1, 0], [1, 63]]]]],
      locals: [],
      templates: []
    };
  })());
});
define("gonnatakeyouthere/templates/components/labeled-radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 0
          }
        },
        "moduleName": "gonnatakeyouthere/templates/components/labeled-radio-button.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["inline", "radio-button", [], ["radioClass", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [2, 15], [2, 25]]]]], [], []], "radioId", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [3, 12], [3, 19]]]]], [], []], "changed", "innerRadioChanged", "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [5, 13], [5, 21]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [6, 15], [6, 25]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 9], [7, 13]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 13], [8, 21]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [9, 10], [9, 15]]]]], [], []]], ["loc", [null, [1, 0], [9, 17]]]], ["content", "yield", ["loc", [null, [11, 0], [11, 9]]]]],
      locals: [],
      templates: []
    };
  })());
});
define('gonnatakeyouthere/templates/components/modal-dialog', ['exports', 'ember-modal-dialog/templates/components/modal-dialog'], function (exports, _emberModalDialogTemplatesComponentsModalDialog) {
  exports['default'] = _emberModalDialogTemplatesComponentsModalDialog['default'];
});
define("gonnatakeyouthere/templates/components/post-content", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "gonnatakeyouthere/templates/components/post-content.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("img");
          dom.setAttribute(el1, "class", "responsive-img");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'src');
          return morphs;
        },
        statements: [["attribute", "src", ["get", "post.image", ["loc", [null, [2, 15], [2, 25]]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "gonnatakeyouthere/templates/components/post-content.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h4");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
        morphs[2] = dom.createUnsafeMorphAt(dom.childAt(fragment, [3]), 0, 0);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "post.image", ["loc", [null, [1, 6], [1, 16]]]]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["content", "post.title", ["loc", [null, [4, 4], [4, 18]]]], ["content", "body.content", ["loc", [null, [5, 5], [5, 23]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("gonnatakeyouthere/templates/components/radio-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "gonnatakeyouthere/templates/components/radio-button.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          morphs[3] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["ember-radio-button ", ["subexpr", "if", [["get", "checked", ["loc", [null, [2, 40], [2, 47]]]], "checked"], [], ["loc", [null, [2, 35], [2, 59]]]], " ", ["get", "joinedClassNames", ["loc", [null, [2, 62], [2, 78]]]]]]], ["attribute", "for", ["get", "radioId", ["loc", [null, [2, 88], [2, 95]]]]], ["inline", "radio-button-input", [], ["class", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [4, 14], [4, 24]]]]], [], []], "id", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [5, 11], [5, 18]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [6, 17], [6, 25]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 13], [7, 17]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [8, 17], [8, 25]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [9, 19], [9, 29]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 14], [10, 19]]]]], [], []], "changed", "changed"], ["loc", [null, [3, 4], [11, 27]]]], ["content", "yield", ["loc", [null, [13, 4], [13, 13]]]]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 15,
              "column": 0
            },
            "end": {
              "line": 25,
              "column": 0
            }
          },
          "moduleName": "gonnatakeyouthere/templates/components/radio-button.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "radio-button-input", [], ["class", ["subexpr", "@mut", [["get", "radioClass", ["loc", [null, [17, 12], [17, 22]]]]], [], []], "id", ["subexpr", "@mut", [["get", "radioId", ["loc", [null, [18, 9], [18, 16]]]]], [], []], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [19, 15], [19, 23]]]]], [], []], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [20, 11], [20, 15]]]]], [], []], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [21, 15], [21, 23]]]]], [], []], "groupValue", ["subexpr", "@mut", [["get", "groupValue", ["loc", [null, [22, 17], [22, 27]]]]], [], []], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [23, 12], [23, 17]]]]], [], []], "changed", "changed"], ["loc", [null, [16, 2], [24, 25]]]]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 26,
            "column": 0
          }
        },
        "moduleName": "gonnatakeyouthere/templates/components/radio-button.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]]]], [], 0, 1, ["loc", [null, [1, 0], [25, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("gonnatakeyouthere/templates/components/user-profile-image", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@1.13.11",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 8
            },
            "end": {
              "line": 4,
              "column": 33
            }
          },
          "moduleName": "gonnatakeyouthere/templates/components/user-profile-image.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Admin");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@1.13.11",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "gonnatakeyouthere/templates/components/user-profile-image.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "class", "z-depth-1");
        dom.setAttribute(el1, "data-activates", "user-profile-dropdown");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "id", "user-profile-dropdown");
        dom.setAttribute(el1, "class", "dropdown-content");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createElement("span");
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        dom.setAttribute(el2, "class", "divider");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("li");
        var el3 = dom.createElement("a");
        var el4 = dom.createTextNode("Sign out");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(fragment, [2]);
        var element2 = dom.childAt(element1, [7, 0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'src');
        morphs[1] = dom.createMorphAt(dom.childAt(element1, [1, 0]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element1, [3]), 0, 0);
        morphs[3] = dom.createElementMorph(element2);
        return morphs;
      },
      statements: [["attribute", "src", ["concat", [["get", "user.profileImageURL", ["loc", [null, [1, 69], [1, 89]]]]]]], ["content", "user.displayName", ["loc", [null, [3, 14], [3, 34]]]], ["block", "link-to", ["admin"], [], 0, null, ["loc", [null, [4, 8], [4, 45]]]], ["element", "action", ["signOut"], [], ["loc", [null, [6, 11], [6, 31]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define('gonnatakeyouthere/torii-adapters/application', ['exports', 'ember', 'emberfire/torii-adapters/firebase'], function (exports, _ember, _emberfireToriiAdaptersFirebase) {
    exports['default'] = _emberfireToriiAdaptersFirebase['default'].extend({
        firebase: _ember['default'].inject.service()
    });
});
define('gonnatakeyouthere/torii-providers/firebase', ['exports', 'emberfire/torii-providers/firebase'], function (exports, _emberfireToriiProvidersFirebase) {
  exports['default'] = _emberfireToriiProvidersFirebase['default'];
});
define('gonnatakeyouthere/views/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].View.extend({});
});
define('gonnatakeyouthere/views/default-collection-header', ['exports', 'ember-cli-materialize/views/default-collection-header'], function (exports, _emberCliMaterializeViewsDefaultCollectionHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeViewsDefaultCollectionHeader['default'];
    }
  });
});
define('gonnatakeyouthere/views/default-column-header', ['exports', 'ember-cli-materialize/views/default-column-header'], function (exports, _emberCliMaterializeViewsDefaultColumnHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliMaterializeViewsDefaultColumnHeader['default'];
    }
  });
});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('gonnatakeyouthere/config/environment', ['ember'], function(Ember) {
  var prefix = 'gonnatakeyouthere';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (!runningTests) {
  require("gonnatakeyouthere/app")["default"].create({"name":"gonnatakeyouthere","version":"0.0.0+b1214c75"});
}

/* jshint ignore:end */
//# sourceMappingURL=gonnatakeyouthere.map