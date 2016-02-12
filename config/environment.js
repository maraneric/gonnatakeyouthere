/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'gonnatakeyouthere',
    environment: environment,
    contentSecurityPolicy: {
      'connect-src': "'self' wss://*.firebaseio.com",
      'frame-src': "'self' https://*.firebaseio.com",
      'script-src': "'self' 'unsafe-eval' https://*.firebaseio.com",
      'img-src': "* data: blob",
      'style-src': "* 'unsafe-inline'",
      'font-src': "'self' data: blob"
    },
    firebase: 'https://gonnatakeyouthere.firebaseio.com/',
    torii: {
      sessionServiceName: 'session'
    },
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    'ember-devtools': {global: 'devTools', enabled: environment !== 'production'},

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    sassOptions: {
      includePaths: ['bower_components/materialize/sass']
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
