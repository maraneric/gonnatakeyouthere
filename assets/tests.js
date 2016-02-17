define('gonnatakeyouthere/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/components/admin-edit-post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/admin-edit-post.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/admin-edit-post.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/components/admin-nav-tabs.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/admin-nav-tabs.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/admin-nav-tabs.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/components/post-content.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/post-content.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/post-content.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/components/rich-text-editor.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/rich-text-editor.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/rich-text-editor.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/components/user-profile-image.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - components');
  QUnit.test('components/user-profile-image.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/user-profile-image.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('gonnatakeyouthere/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'gonnatakeyouthere/tests/helpers/start-app', 'gonnatakeyouthere/tests/helpers/destroy-app'], function (exports, _qunit, _gonnatakeyouthereTestsHelpersStartApp, _gonnatakeyouthereTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _gonnatakeyouthereTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _gonnatakeyouthereTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('gonnatakeyouthere/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/helpers/resolver', ['exports', 'ember/resolver', 'gonnatakeyouthere/config/environment'], function (exports, _emberResolver, _gonnatakeyouthereConfigEnvironment) {

  var resolver = _emberResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _gonnatakeyouthereConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _gonnatakeyouthereConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('gonnatakeyouthere/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/helpers/start-app', ['exports', 'ember', 'gonnatakeyouthere/app', 'gonnatakeyouthere/config/environment'], function (exports, _ember, _gonnatakeyouthereApp, _gonnatakeyouthereConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _gonnatakeyouthereConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _gonnatakeyouthereApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('gonnatakeyouthere/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/helpers/torii', ['exports'], function (exports) {
  exports.stubValidSession = stubValidSession;

  function stubValidSession(application, sessionData) {
    var session = application.__container__.lookup('service:session');
    var sm = session.get('stateMachine');
    Ember.run(function () {
      sm.send('startOpen');
      sm.send('finishOpen', sessionData);
    });
  }
});
define('gonnatakeyouthere/tests/initializers/inject-store.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - initializers');
  QUnit.test('initializers/inject-store.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'initializers/inject-store.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/models/attachment.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/attachment.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/attachment.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/models/post-body.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/post-body.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post-body.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/models/post-summary.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/post-summary.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post-summary.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/models/user.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/user.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/routes/admin/attachments/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/admin/attachments');
  QUnit.test('routes/admin/attachments/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin/attachments/index.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/routes/admin/base.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/admin');
  QUnit.test('routes/admin/base.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin/base.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/routes/admin/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/admin');
  QUnit.test('routes/admin/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin/index.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/routes/admin/posts/edit.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/admin/posts');
  QUnit.test('routes/admin/posts/edit.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin/posts/edit.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/routes/admin/posts/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/admin/posts');
  QUnit.test('routes/admin/posts/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin/posts/index.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/routes/admin/posts/new.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/admin/posts');
  QUnit.test('routes/admin/posts/new.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin/posts/new.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/routes/admin.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/admin.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/admin.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/routes/blog/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/blog');
  QUnit.test('routes/blog/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/blog/index.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/routes/blog/post.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes/blog');
  QUnit.test('routes/blog/post.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/blog/post.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/index.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/routes/login.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/login.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/login.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/test-helper', ['exports', 'gonnatakeyouthere/tests/helpers/resolver', 'ember-qunit'], function (exports, _gonnatakeyouthereTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_gonnatakeyouthereTestsHelpersResolver['default']);
});
define('gonnatakeyouthere/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/torii-adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - torii-adapters');
  QUnit.test('torii-adapters/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'torii-adapters/application.js should pass jshint.');
  });
});
define('gonnatakeyouthere/tests/unit/models/post-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForModel)('post', 'Unit | Model | post', {
    // Specify the other units that are required for this test.
    needs: []
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var model = this.subject();
    // let store = this.store();
    assert.ok(!!model);
  });
});
define('gonnatakeyouthere/tests/unit/models/post-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/models');
  QUnit.test('unit/models/post-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/post-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('gonnatakeyouthere/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map