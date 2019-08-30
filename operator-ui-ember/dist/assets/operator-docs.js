'use strict';



;define("operator-docs/app", ["exports", "operator-docs/resolver", "ember-load-initializers", "operator-docs/config/environment"], function (_exports, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
  var _default = App;
  _exports.default = _default;
});
;define("operator-docs/components/black-duck-form", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    name: "",
    namespace: "",
    version: "",
    licenseKey: "",
    dbMigrate: false,
    size: "small",
    exposeService: "",
    blackDuckType: "",
    useBinaryUploads: false,
    enableSourceUploads: false,
    livenessProbes: false,
    persistentStorage: true,
    cloneDB: "",
    PVCStorageClass: "",
    scanType: "",
    externalDatabase: false,
    postgresSQLUserPassword: "",
    postgresSQLAdminPassword: "",
    postgresSQLPostgresPassword: "",
    certificateName: "",
    customCACertificateAuthentication: false,
    proxyRootCertificate: "",
    actions: {
      deployBlackDuck() {
        alert("Running AJAX for Black Duck..."); //alert(model.name)

        var BlackDuckSpecData = {
          name: this.name,
          namespace: this.namespace,
          version: this.version
        };
        alert(BlackDuckSpecData); //alert(this)

        alert(this.dbMigrate);
        var dataString = "Hello Black Duck";
        $.ajax({
          type: "POST",
          url: "http://localhost:8081/",
          data: JSON.stringify(BlackDuckSpecData),
          success: function () {
            alert("success");
          }
        });
      }

    }
  });

  _exports.default = _default;
});
;define("operator-docs/components/documentation-navbar", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let menu_entries = [{
    name: "Home",
    id: "home",
    link: "/documentation/home"
  }, {
    name: "Overview",
    id: "overview",
    link: "/documentation/overview"
  }, {
    name: "Prerequisites",
    id: "prerequisites",
    link: "/documentation/prerequisites"
  }, {
    name: "Deploy (or) Upgrade Operator",
    id: "deploy-operator",
    link: "/documentation/deploy-operator"
  }, {
    name: "Deploy Polaris on On-Premises Kubernetes",
    id: "on-premises",
    link: "/documentation/on-premises"
  }, {
    name: "Deploy Polaris on Google Kubernetes Engine(GKE)",
    id: "gke",
    link: "/documentation/gke"
  }, {
    name: "Deploy Polaris on Elastic Kubernetes Service(EKS)",
    id: "eks",
    link: "/documentation/eks"
  }, {
    name: "Deploy Polaris on Azure Kubernetes Service(AKS)",
    id: "aks",
    link: "/documentation/aks"
  }, {
    name: "Contact",
    id: "contact",
    link: "/documentation/contact"
  }];

  var _default = Ember.Component.extend({
    // Variables
    menu_entries: menu_entries
  });

  _exports.default = _default;
});
;define("operator-docs/components/documentation/aks", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("operator-docs/components/documentation/deploy-operator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("operator-docs/components/documentation/eks", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("operator-docs/components/documentation/gke", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("operator-docs/components/documentation/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let menu_entries = [{
    name: "Home",
    id: "home",
    link: "/documentation/home"
  }, {
    name: "Polaris Requirements",
    id: "prerequisites",
    link: "/documentation/prerequisites"
  }, {
    name: "Instructions to deploy Polaris operator",
    id: "install-operator",
    link: "/documentation/install-operator"
  }, {
    name: "Instructions to deploy Polaris on On-Premises Kubernetes",
    id: "on-premises",
    link: "/documentation/on-premises"
  }, {
    name: "Instructions to deploy Polaris on Google Kubernetes Engine(GKE)",
    id: "gke",
    link: "/documentation/gke"
  }, {
    name: "Instructions to deploy Polaris on Elastic Kubernetes Service(EKS)",
    id: "eks",
    link: "/documentation/eks"
  }, {
    name: "Instructions to deploy Polaris on Azure Kubernetes Service(AKS)",
    id: "aks",
    link: "/documentation/aks"
  }, {
    name: "Additional Help",
    id: "contact",
    link: "/documentation/contact"
  }];

  var _default = Ember.Component.extend({
    menu_entries: menu_entries
  });

  _exports.default = _default;
});
;define("operator-docs/components/documentation/introduction", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("operator-docs/components/documentation/on-premises", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("operator-docs/components/documentation/overview", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("operator-docs/components/documentation/prerequisites", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("operator-docs/components/ui-brand-logo", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("operator-docs/components/ui-head", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("operator-docs/components/ui-mobile-header", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("operator-docs/components/ui-nav-bar", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let menu_entries = [{
    name: "Home",
    id: "home",
    link: "/home"
  }, {
    name: "Operator",
    id: "operator",
    link: "/operator"
  }, {
    name: "Deploy Polaris",
    id: "deploy_polaris",
    link: "/deploy_polaris"
  }, {
    name: "Deploy Black Duck",
    id: "deploy_black_duck",
    link: "/deploy_black_duck"
  }, {
    name: "Docs",
    id: "docs",
    link: "/documentation"
  }, {
    name: "Help",
    id: "help",
    link: "/help"
  }];

  var _default = Ember.Component.extend({
    // Variables
    menu_entries: menu_entries
  });

  _exports.default = _default;
});
;define("operator-docs/components/ui/help", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("operator-docs/components/ui/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({});

  _exports.default = _default;
});
;define("operator-docs/components/ui/operator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Component.extend({
    didInsertElement() {
      fetch("http://10.145.119.53:8080/operator/status").then(function (response) {
        return response.json();
      }).then(data => {
        this.set('operator', data);
      });
    }

  });

  _exports.default = _default;
});
;define("operator-docs/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define("operator-docs/helpers/and", ["exports", "ember-truth-helpers/helpers/and"], function (_exports, _and) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(_exports, "and", {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
;define("operator-docs/helpers/app-version", ["exports", "operator-docs/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("operator-docs/helpers/eq", ["exports", "ember-truth-helpers/helpers/equal"], function (_exports, _equal) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(_exports, "equal", {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
;define("operator-docs/helpers/gt", ["exports", "ember-truth-helpers/helpers/gt"], function (_exports, _gt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(_exports, "gt", {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
;define("operator-docs/helpers/gte", ["exports", "ember-truth-helpers/helpers/gte"], function (_exports, _gte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(_exports, "gte", {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
;define("operator-docs/helpers/is-array", ["exports", "ember-truth-helpers/helpers/is-array"], function (_exports, _isArray) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(_exports, "isArray", {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
;define("operator-docs/helpers/is-empty", ["exports", "ember-truth-helpers/helpers/is-empty"], function (_exports, _isEmpty) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEmpty.default;
    }
  });
});
;define("operator-docs/helpers/is-equal", ["exports", "ember-truth-helpers/helpers/is-equal"], function (_exports, _isEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(_exports, "isEqual", {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
;define("operator-docs/helpers/lt", ["exports", "ember-truth-helpers/helpers/lt"], function (_exports, _lt) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(_exports, "lt", {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
;define("operator-docs/helpers/lte", ["exports", "ember-truth-helpers/helpers/lte"], function (_exports, _lte) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(_exports, "lte", {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
;define("operator-docs/helpers/not-eq", ["exports", "ember-truth-helpers/helpers/not-equal"], function (_exports, _notEqual) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(_exports, "notEq", {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
;define("operator-docs/helpers/not", ["exports", "ember-truth-helpers/helpers/not"], function (_exports, _not) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(_exports, "not", {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
;define("operator-docs/helpers/or", ["exports", "ember-truth-helpers/helpers/or"], function (_exports, _or) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(_exports, "or", {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
;define("operator-docs/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _pluralize.default;
  _exports.default = _default;
});
;define("operator-docs/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _singularize.default;
  _exports.default = _default;
});
;define("operator-docs/helpers/xor", ["exports", "ember-truth-helpers/helpers/xor"], function (_exports, _xor) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(_exports, "xor", {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
;define("operator-docs/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "operator-docs/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("operator-docs/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("operator-docs/initializers/ember-data", ["exports", "ember-data/setup-container", "ember-data"], function (_exports, _setupContainer, _emberData) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */
  var _default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
  _exports.default = _default;
});
;define("operator-docs/initializers/export-application-global", ["exports", "operator-docs/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("operator-docs/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (_exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'ember-data',
    initialize: _initializeStoreService.default
  };
  _exports.default = _default;
});
;define("operator-docs/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("operator-docs/router", ["exports", "operator-docs/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  Router.map(function () {
    this.route('documentation', function () {
      this.route('gke');
      this.route('eks');
      this.route('aks');
      this.route('on-premises');
      this.route('prerequisites');
      this.route('home');
      this.route('overview');
      this.route('deploy-operator');
    });
    this.route('ui');
    this.route('ui', {
      path: '/'
    }, function () {
      this.route('home');
      this.route('help');
      this.route('operator');
      this.route('deploy_polaris');
      this.route('deploy_black_duck');
    });
  });
  var _default = Router;
  _exports.default = _default;
});
;define("operator-docs/routes/documentation", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("operator-docs/routes/documentation/aks", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("operator-docs/routes/documentation/deploy-operator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("operator-docs/routes/documentation/eks", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("operator-docs/routes/documentation/gke", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("operator-docs/routes/documentation/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("operator-docs/routes/documentation/on-premises", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("operator-docs/routes/documentation/overview", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("operator-docs/routes/documentation/prerequisites", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("operator-docs/routes/ui", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("operator-docs/routes/ui/deploy-black-duck", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("operator-docs/routes/ui/deploy-polaris", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({
    actions: {
      deployPolaris() {
        alert("Running AJAX for Polaris..."); //alert(model.name)

        var dataString = "Hello Polaris";
        $.ajax({
          type: "POST",
          url: "http://localhost:8081/",
          data: dataString,
          success: function () {
            alert("success");
          }
        });
      }

    }
  });

  _exports.default = _default;
});
;define("operator-docs/routes/ui/help", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("operator-docs/routes/ui/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("operator-docs/routes/ui/operator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Route.extend({});

  _exports.default = _default;
});
;define("operator-docs/services/ajax", ["exports", "ember-ajax/services/ajax"], function (_exports, _ajax) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define("operator-docs/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "3zTHhaSm",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/black-duck-form", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "iBXUym37",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[9],[0,\"Create a Black Duck Instance\"],[10],[0,\"\\n\"],[7,\"div\"],[11,\"id\",\"contact_form\"],[9],[0,\"\\n    \"],[7,\"form\"],[11,\"name\",\"bd-form\"],[11,\"action\",\"\"],[11,\"class\",\"form-horizontal\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"name\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"Name *\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[1,[29,\"input\",null,[[\"value\",\"class\"],[[24,0,[\"name\"]],\"form-control\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"namespace\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"Namespace *\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[1,[29,\"input\",null,[[\"value\",\"class\"],[[24,0,[\"namespace\"]],\"form-control\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"version\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"Black Duck Version\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[1,[29,\"input\",null,[[\"value\",\"class\"],[[24,0,[\"version\"]],\"form-control\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"license-key\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"License Key\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[1,[29,\"input\",null,[[\"value\",\"class\"],[[24,0,[\"licenseKey\"]],\"form-control\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"db-migrate\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"DbMigrate\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[5,\"input\",[],[[\"@type\",\"@checked\"],[\"checkbox\",[24,0,[\"dbMigrate\"]]]]],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"size\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"Size\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[1,[29,\"input\",null,[[\"value\",\"class\"],[[24,0,[\"size\"]],\"form-control\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"expose-service\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"Expose Service\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[1,[29,\"input\",null,[[\"value\",\"class\"],[[24,0,[\"exposeService\"]],\"form-control\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"black-duck-type\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"Black Duck Type (OpsSight specific)\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[1,[29,\"input\",null,[[\"value\",\"class\"],[[24,0,[\"blackDuckType\"]],\"form-control\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"db-migrate\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"Use Binary Uploads\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[5,\"input\",[],[[\"@type\",\"@checked\"],[\"checkbox\",[24,0,[\"useBinaryUploads\"]]]]],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"db-migrate\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"Enable Source Uploads\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[5,\"input\",[],[[\"@type\",\"@checked\"],[\"checkbox\",[24,0,[\"enableSourceUploads\"]]]]],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"db-migrate\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"Liveness Probes\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[5,\"input\",[],[[\"@type\",\"@checked\"],[\"checkbox\",[24,0,[\"livenessProbes\"]]]]],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"db-migrate\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"Persistent Storage\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[5,\"input\",[],[[\"@type\",\"@checked\"],[\"checkbox\",[24,0,[\"persistentStorage\"]]]]],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"black-duck-type\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"Clone DB\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[1,[29,\"input\",null,[[\"value\",\"class\"],[[24,0,[\"cloneDb\"]],\"form-control\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"black-duck-type\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"PVC Storage Class\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[1,[29,\"input\",null,[[\"value\",\"class\"],[[24,0,[\"PVCStorageClass\"]],\"form-control\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"black-duck-type\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"Scan Type\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[1,[29,\"input\",null,[[\"value\",\"class\"],[[24,0,[\"scanType\"]],\"form-control\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"db-migrate\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"External Database\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[5,\"input\",[],[[\"@type\",\"@checked\"],[\"checkbox\",[24,0,[\"externalDatabase\"]]]]],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"black-duck-type\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"PostgresSQL User Password *\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[1,[29,\"input\",null,[[\"value\",\"class\"],[[24,0,[\"postgresSQLUserPassword\"]],\"form-control\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"black-duck-type\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"PostgresSQL Admin Password *\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[1,[29,\"input\",null,[[\"value\",\"class\"],[[24,0,[\"postgresSQLAdminPassword\"]],\"form-control\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"black-duck-type\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"PostgresSQL Postgres Password *\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[1,[29,\"input\",null,[[\"value\",\"class\"],[[24,0,[\"postgresSQLPostgresPassword\"]],\"form-control\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"black-duck-type\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"Certificate Name\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[1,[29,\"input\",null,[[\"value\",\"class\"],[[24,0,[\"certificateName\"]],\"form-control\"]]],false],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"db-migrate\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"Custom CA for certificate authentication\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[5,\"input\",[],[[\"@type\",\"@checked\"],[\"checkbox\",[24,0,[\"customCACertificateAuthentication\"]]]]],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"db-migrate\"],[11,\"class\",\"col-md-2 control-label\"],[9],[0,\"Proxy Root Certificate\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-md-5\"],[9],[0,\"\\n                \"],[5,\"textarea\",[],[[\"@value\",\"@cols\",\"@rows\"],[[24,0,[\"proxyRootCertificate\"]],\"80\",\"6\"]]],[0,\"                \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n\\n\\n\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"col-sm-offset-2 col-sm-10\"],[9],[0,\"\\n                \"],[7,\"button\"],[11,\"class\",\"btn btn-sm btn-primary\"],[9],[0,\"Submit\"],[3,\"action\",[[24,0,[]],\"deployBlackDuck\"]],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/black-duck-form.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/documentation-navbar", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "utU4e57c",
    "block": "{\"symbols\":[\"entry\"],\"statements\":[[7,\"div\"],[11,\"class\",\"bg-light border-right\"],[11,\"id\",\"sidebar-wrapper\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"sidebar-heading mt-4\"],[9],[0,\"Polaris Operator Documentation\"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"list-group list-group-flush\"],[9],[0,\"\\n\"],[4,\"each\",[[24,0,[\"menu_entries\"]]],null,{\"statements\":[[0,\"      \"],[7,\"a\"],[11,\"class\",\"list-group-item list-group-item-action bg-light\"],[12,\"href\",[24,1,[\"link\"]]],[12,\"id\",[24,1,[\"id\"]]],[9],[1,[24,1,[\"name\"]],false],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/documentation-navbar.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/documentation/aks", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "STOfDs1V",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[11,\"class\",\"mt-4\"],[11,\"id\",\"heading\"],[9],[0,\"Deploy Polaris on Azure Kubernetes Engine\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Navigate to \"],[7,\"b\"],[9],[0,\"Deploy Polaris\"],[10],[0,\" tab.\"],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"1. Choose the \"],[7,\"code\"],[9],[0,\"Azure\"],[10],[0,\" option under Deployment Platform\"],[10],[0,\"\\n\\n\"],[7,\"img\"],[11,\"src\",\"/assets/images/aks/nav.png\"],[11,\"class\",\"aks-nav\"],[11,\"alt\",\"\"],[9],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"2. Fill the common environment details\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"ENVIRONMENT NAME\"],[10],[0,\" can be any friendly name for the environment. Should contain only lowercase alphabets.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"ENVIRONMENT ADDRESS (DNS)\"],[10],[0,\" is a desired URL to access the application.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"NAMESPACE\"],[10],[0,\", namespace on which you want to deploy the application. Supports only default namespace for now.\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"3. Whitelist IPs to restrict public access\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"List of allowed IPs to access environment (Whitelist IPs)\"],[10],[0,\", Provide the IPs and their range in CIDR notation.\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"4. Choose the ssl certificate type for enabling https for Polaris\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"You can have either Self-Signed or Custom certificate. If you choose to have custom certificate, provide the certificate information in \"],[7,\"code\"],[9],[0,\"CRT FILE CONTENT(.crt)\"],[10],[0,\" and \"],[7,\"code\"],[9],[0,\"KEY FILE CONTENT(.key)\"],[10],[0,\" fields.\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"5. Choose the Postgresql Instance type\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"You can have either integreated Postgresql instance or azure managed Postgresql instance.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Provide the following information in the respective fields\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"POSTGRES HOST\"],[10],[0,\", postgresql instance address\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"POSTGRES PORT\"],[10],[0,\", postgresql instance port\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"POSTGRES USERNAME\"],[10],[0,\", username for postgresql instance\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"POSTGRES PASSWORD\"],[10],[0,\", password for postgresql instance\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\\n\"],[7,\"h5\"],[9],[0,\"6. SMTP server details for enabling emails\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Provide the following information in the respective fields\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"SMTP HOST\"],[10],[0,\", smtp server address\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"SMTP PORT\"],[10],[0,\", smtp server port\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"SMTP USERNAME\"],[10],[0,\", smtp server username\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"SMTP PASSWORD\"],[10],[0,\", smtp server password\"],[10],[0,\"\\n\\n\"],[7,\"img\"],[11,\"src\",\"/assets/images/aks/aks.png\"],[11,\"class\",\"aks-deploy\"],[11,\"alt\",\"\"],[9],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h7\"],[9],[0,\"Click on Submit. Thats it !\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/documentation/aks.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/documentation/deploy-operator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "9Cf0UMx6",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[11,\"class\",\"mt-4\"],[11,\"id\",\"heading\"],[9],[0,\"Deploy (or) Upgrade Operator\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"a\"],[11,\"href\",\"#deploy_operator\"],[9],[0,\"Deploy Operator\"],[10],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"a\"],[11,\"href\",\"#upgrade_operator\"],[9],[0,\"Upgrade Operator\"],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\\n\"],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[11,\"id\",\"deploy_operator\"],[9],[7,\"a\"],[11,\"href\",\"#deploy_operator\"],[9],[0,\"Deploy Operator\"],[10],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Navigate to \"],[7,\"b\"],[9],[0,\"Operator\"],[10],[0,\" tab,\"],[10],[0,\"\\n\\n\"],[7,\"img\"],[11,\"src\",\"/assets/images/operator/nav.png\"],[11,\"class\",\"operator-nav\"],[11,\"alt\",\"\"],[9],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Enter Operator version to be deployed and GoogleContainerRegistry authentication token(JSON token gathered from prerequisites). Click on Deploy.\"],[10],[0,\"\\n\\n\"],[7,\"img\"],[11,\"src\",\"/assets/images/operator/install.png\"],[11,\"class\",\"operator-install\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[11,\"id\",\"upgrade_operator\"],[9],[7,\"a\"],[11,\"href\",\"#upgrade_operator\"],[9],[0,\"Upgrade Operator\"],[10],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Navigate to \"],[7,\"b\"],[9],[0,\"Operator\"],[10],[0,\" tab,\"],[10],[0,\"\\n\\n\"],[7,\"img\"],[11,\"src\",\"/assets/images/operator/nav.png\"],[11,\"class\",\"operator-nav\"],[11,\"alt\",\"\"],[9],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Enter Operator version to which you would like to upgrade to and click on Upgrade.\"],[10],[0,\"\\n\\n\"],[7,\"img\"],[11,\"src\",\"/assets/images/operator/upgrade.png\"],[11,\"class\",\"operator-upgrade\"],[11,\"alt\",\"\"],[9],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Note: If you are not sure about the version, leave the pre-populated version as it as which is considered to be latest release version.\"],[10],[0,\"\\n\\n\"],[7,\"h7\"],[9],[0,\"You have successfully deployed Operator ! Proceed for application deployment.\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/documentation/deploy-operator.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/documentation/eks", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "k4gDCd2A",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[11,\"class\",\"mt-4\"],[11,\"id\",\"heading\"],[9],[0,\"Deploy Polaris on Elastic Kubernetes Service(EKS)\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Navigate to \"],[7,\"b\"],[9],[0,\"Deploy Polaris\"],[10],[0,\" tab.\"],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"1. Choose the \"],[7,\"code\"],[9],[0,\"AWS\"],[10],[0,\" option under Deployment Platform\"],[10],[0,\"\\n\\n\"],[7,\"img\"],[11,\"src\",\"/assets/images/eks/main-aws.png\"],[11,\"class\",\"eks-nav\"],[11,\"alt\",\"\"],[9],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"2. Fill the common environment details\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"ENVIRONMENT NAME\"],[10],[0,\" can be any friendly name for the environment. Should contain only lowercase alphabets.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"ENVIRONMENT ADDRESS (DNS)\"],[10],[0,\" is a desired URL to access the application.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"NAMESPACE\"],[10],[0,\", namespace on which you want to deploy the application. Supports only default namespace for now.\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"3. SSL certificate\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Import certificate into Cert Manager through AWS console and provide its ARN in \"],[7,\"code\"],[9],[0,\"SSL CERTIFICATE FOR POLARIS(HTTPS)\"],[10],[0,\" field.\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"4. Whitelist IPs to restrict public access\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"List of allowed IPs to access environment (Whitelist IPs)\"],[10],[0,\", Provide the IPs and their range in CIDR notation.\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"5. RDS INFORMATION\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Provide the following information in the respective fields\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"RDS Instance Endpoint\"],[10],[0,\", RDS instance address\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"RDS Port\"],[10],[0,\", RDS instance port\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"RDS Username\"],[10],[0,\", username for RDS instance\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"RDS Password\"],[10],[0,\", password for RDS instance\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"5. SMTP server details for enabling emails\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Provide the following information in the respective fields\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"SMTP HOST\"],[10],[0,\", smtp server address\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"SMTP PORT\"],[10],[0,\", smtp server port\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"SMTP USERNAME\"],[10],[0,\", smtp server username\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"SMTP PASSWORD\"],[10],[0,\", smtp server password\"],[10],[0,\"\\n\\n\"],[7,\"img\"],[11,\"src\",\"/assets/images/eks/aws.png\"],[11,\"class\",\"eks-deploy\"],[11,\"alt\",\"\"],[9],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h7\"],[9],[0,\"Click on Submit. Thats it !\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/documentation/eks.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/documentation/gke", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "mBcPW6L/",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[11,\"class\",\"mt-4\"],[11,\"id\",\"heading\"],[9],[0,\"Deploy Polaris on Google Kubernetes Engine(GKE)\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Navigate to \"],[7,\"b\"],[9],[0,\"Deploy Polaris\"],[10],[0,\" tab,\"],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"1. Choose the \"],[7,\"code\"],[9],[0,\"GCP\"],[10],[0,\" option under Deployment Platform\"],[10],[0,\"\\n\\n\"],[7,\"img\"],[11,\"src\",\"/assets/images/gke/main-gcp.png\"],[11,\"class\",\"gke-nav\"],[11,\"alt\",\"\"],[9],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"2. Fill the common environment details\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"ENVIRONMENT NAME\"],[10],[0,\" can be any friendly name for the environment. Should contain only lowercase alphabets.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"ENVIRONMENT ADDRESS (DNS)\"],[10],[0,\" is a desired URL to access the application.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"NAMESPACE\"],[10],[0,\", namespace on which you want to deploy the application. Supports only default namespace for now.\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"3. Choose the ssl certificate type for enabling https for Polaris\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"You can have either Self-Signed or Custom certificate. If you choose to have custom certificate, provide the certificate information in \"],[7,\"code\"],[9],[0,\"CRT FILE CONTENT(.crt)\"],[10],[0,\" and \"],[7,\"code\"],[9],[0,\"KEY FILE CONTENT(.key)\"],[10],[0,\" fields.\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"4. Whitelist IPs to restrict public access\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"List of allowed IPs to access environment (Whitelist IPs)\"],[10],[0,\", Provide the IPs and their range in CIDR notation.\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"5. CloudSQL information\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Provide the following information in the respective fields\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"CloudSQL IP\"],[10],[0,\", cloudsql instance address\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"CloudSQL Port\"],[10],[0,\", cloudsql instance port\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"CloudSQL Username\"],[10],[0,\", username for cloudsql instance\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"CloudSQL Password\"],[10],[0,\", password for cloudsql instance\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"5. SMTP server details for enabling emails\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Provide the following information in the respective fields\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"SMTP HOST\"],[10],[0,\", smtp server address\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"SMTP PORT\"],[10],[0,\", smtp server port\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"SMTP USERNAME\"],[10],[0,\", smtp server username\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"SMTP PASSWORD\"],[10],[0,\", smtp server password\"],[10],[0,\"\\n\\n\"],[7,\"img\"],[11,\"src\",\"/assets/images/gke/gcp.png\"],[11,\"class\",\"gke-deploy\"],[11,\"alt\",\"\"],[9],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h7\"],[9],[0,\"Click on Submit. Thats it !\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/documentation/gke.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/documentation/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "cBeOD97o",
    "block": "{\"symbols\":[\"entry\"],\"statements\":[[7,\"h2\"],[11,\"class\",\"mt-4\"],[11,\"id\",\"heading-1\"],[9],[0,\"Index\"],[10],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"ul\"],[11,\"class\",\"index-ul\"],[9],[0,\"\\n\"],[4,\"each\",[[24,0,[\"menu_entries\"]]],null,{\"statements\":[[0,\"    \"],[7,\"li\"],[9],[7,\"a\"],[12,\"href\",[24,1,[\"link\"]]],[9],[1,[24,1,[\"name\"]],false],[10],[10],[7,\"br\"],[9],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/documentation/home.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/documentation/introduction", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "r4aMw1AW",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h1\"],[11,\"class\",\"mt-4\"],[11,\"id\",\"heading\"],[9],[0,\"Introduction\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Polaris Operator is designed to support Polaris application deployment on various platforms. Currently it supports only ReportingPlatform deployment.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Polaris Operator has two components.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"1. \"],[7,\"b\"],[9],[0,\"Polaris Operator\"],[10],[0,\" - Operator that monitors api server for CustomResource requests to deploy Polaris\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"2. \"],[7,\"b\"],[9],[0,\"Polaris Operator UI\"],[10],[0,\" - A flask application that helps the user to install, configure and manage Polaris application\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/documentation/introduction.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/documentation/on-premises", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5tz7bO6W",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[11,\"class\",\"mt-4\"],[11,\"id\",\"heading\"],[9],[0,\"Deploy Polaris on on-premises kubernetes\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Navigate to \"],[7,\"b\"],[9],[0,\"Deploy Polaris\"],[10],[0,\" tab\"],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"1. Choose the \"],[7,\"code\"],[9],[0,\"On-Premise\"],[10],[0,\" option under Deployment Platform\"],[10],[0,\"\\n\\n\"],[7,\"img\"],[11,\"src\",\"/assets/images/on-premises/main-on-prem.png\"],[11,\"class\",\"on-prem-nav\"],[11,\"alt\",\"\"],[9],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"2. Fill the common environment details\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"ENVIRONMENT NAME\"],[10],[0,\" can be any friendly name for the environment. Should contain only lowercase alphabets.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"ENVIRONMENT ADDRESS (DNS)\"],[10],[0,\" is a desired URL to access the application.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"NAMESPACE\"],[10],[0,\", namespace on which you want to deploy the application. Supports only default namespace for now.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"STORAGE CLASS\"],[10],[0,\", default storage class to be used for creating Persistent Volumes.\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"3. Choose the ssl certificate type for enabling https for Polaris\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"You can have either Self-Signed or Custom certificate. If you choose to have custom certificate, provide the certificate information in \"],[7,\"code\"],[9],[0,\"CRT FILE CONTENT(.crt)\"],[10],[0,\" and \"],[7,\"code\"],[9],[0,\"KEY FILE CONTENT(.key)\"],[10],[0,\" fields.\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"4. Choose the Postgresql Instance type\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"You can have either integreated Postgresql instance or external Postgresql instance.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"If you choose to have external Postgresql instance, provide the following information in the respective fields\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"POSTGRES HOST\"],[10],[0,\", postgresql instance address\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"POSTGRES PORT\"],[10],[0,\", postgresql instance port\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"POSTGRES USERNAME\"],[10],[0,\", username for postgresql instance\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"POSTGRES PASSWORD\"],[10],[0,\", password for postgresql instance\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[9],[0,\"5. SMTP server details for enabling emails\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Provide the following information in the respective fields\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"SMTP HOST\"],[10],[0,\", smtp server address\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"SMTP PORT\"],[10],[0,\", smtp server port\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"SMTP USERNAME\"],[10],[0,\", smtp server username\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[7,\"code\"],[9],[0,\"SMTP PASSWORD\"],[10],[0,\", smtp server password\"],[10],[0,\"\\n\\n\"],[7,\"img\"],[11,\"src\",\"/assets/images/on-premises/on-prem.png\"],[11,\"class\",\"on-prem-deploy\"],[11,\"alt\",\"\"],[9],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h7\"],[9],[0,\"Click on Submit. Thats it !\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/documentation/on-premises.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/documentation/overview", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "q6L5ssNj",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h3\"],[11,\"class\",\"mt-4\"],[11,\"id\",\"heading\"],[9],[0,\"Overview\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Polaris Operator is designed to support Polaris application deployment on various platforms. Currently it supports only ReportingPlatform deployment.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"Polaris operator has two components.\"],[10],[0,\"\\n\\n\"],[7,\"p\"],[9],[0,\"1. \"],[7,\"b\"],[9],[0,\"Polaris Operator\"],[10],[0,\" - Operator is responsible for deploying Polaris based on CustomResource request\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"2. \"],[7,\"b\"],[9],[0,\"Polaris Operator UI\"],[10],[0,\" - UI application that helps to deploy or upgrade Polaris application\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/documentation/overview.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/documentation/prerequisites", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "1EJSE4g/",
    "block": "{\"symbols\":[],\"statements\":[[7,\"h2\"],[11,\"class\",\"mt-4\"],[11,\"id\",\"heading\"],[9],[0,\"Prerequisites\"],[10],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"ul\"],[11,\"class\",\"index-ul\"],[9],[0,\"\\n  \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#kubernetes_cluster\"],[9],[0,\"Kubernetes Cluster\"],[10],[7,\"br\"],[9],[10],[10],[0,\"\\n  \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#postgresql\"],[9],[0,\"PostgreSQL Instance\"],[10],[7,\"br\"],[9],[10],[10],[0,\"\\n  \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#docker_hub_access\"],[9],[0,\"Access to private repos on Docker Hub\"],[10],[7,\"br\"],[9],[10],[10],[0,\"\\n  \"],[7,\"li\"],[9],[7,\"a\"],[11,\"href\",\"#gcr_access\"],[9],[0,\"Access to GoogleContainerRegistry(GCR)\"],[10],[7,\"br\"],[9],[10],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[11,\"id\",\"kubernetes_cluster\"],[9],[7,\"a\"],[11,\"href\",\"#kubernetes_cluster\"],[9],[0,\"Kubernetes Cluster\"],[10],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Polaris is designed to run on Kubernetes platform. It requires a cluster with atleast 1 manager and 3 nodes satisfying following configurations.\"],[10],[0,\"\\n\\n\"],[7,\"b\"],[9],[0,\"Memory :\"],[10],[0,\" 20 GB \"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"b\"],[9],[0,\"CPU :\"],[10],[0,\" 18 CPUs \"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"b\"],[9],[0,\"Disk Space :\"],[10],[0,\" 400 GB \"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[11,\"id\",\"postgresql\"],[9],[7,\"a\"],[11,\"href\",\"#postgresql\"],[9],[0,\"PostgreSQL Instance\"],[10],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Polaris requires a PostgreSQL instance with few databases created. Recommended configuration for PostgreSQL is,\"],[10],[0,\"\\n\\n\"],[7,\"b\"],[9],[0,\"Memory :\"],[10],[0,\" 8 GB \"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"b\"],[9],[0,\"CPU :\"],[10],[0,\" 4 CPUs \"],[7,\"br\"],[9],[10],[0,\"\\n\"],[7,\"b\"],[9],[0,\"Disk Space :\"],[10],[0,\" 200 GB \"],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[11,\"id\",\"docker_hub_access\"],[9],[7,\"a\"],[11,\"href\",\"#docker_hub_access\"],[9],[0,\"Docker hub access\"],[10],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Request access to pull operator-ui image from docker hub.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Sign up for docker hub and request access to the operator private repo by sharing username with any of the following contacts.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Contact : Aditya Byreddy (abyreddy@synopsys.com) or Viral H Chande (vchande@synopsys.com)\"],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10],[0,\"\\n\\n\"],[7,\"h5\"],[11,\"id\",\"gcr_access\"],[9],[7,\"a\"],[11,\"href\",\"#gcr_access\"],[9],[0,\"Polaris's Private Docker registry access\"],[10],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Request access for Polaris's private docker registry.\"],[10],[0,\"\\n\"],[7,\"p\"],[9],[0,\"Contact : Aditya Byreddy (abyreddy@synopsys.com) or Viral H Chande (vchande@synopsys.com)\"],[10],[0,\"\\n\\n\"],[7,\"br\"],[9],[10],[7,\"br\"],[9],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/documentation/prerequisites.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/ui-brand-logo", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "ytnUEJY6",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"k-header__brand   k-grid__item\"],[11,\"id\",\"k_header_brand\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"k-header__brand-logo\"],[9],[0,\"\\n    \"],[7,\"a\"],[11,\"href\",\"/\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"/assets/images/snps-logo-sts-white-grey.png\"],[11,\"width\",\"100\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"h1\"],[11,\"class\",\"k-header__brand-title\"],[9],[0,\"\\n    Polaris Reporting Operator\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/ui-brand-logo.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/ui-head", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "oiYVjGqf",
    "block": "{\"symbols\":[],\"statements\":[[7,\"head\"],[9],[0,\"\\n  \"],[7,\"meta\"],[11,\"charset\",\"utf-8\"],[9],[10],[0,\"\\n  \"],[7,\"meta\"],[11,\"name\",\"viewport\"],[11,\"content\",\"width=device-width, initial-scale=1, shrink-to-fit=no\"],[9],[10],[0,\"\\n  \"],[7,\"meta\"],[11,\"http-equiv\",\"X-UA-Compatible\"],[11,\"content\",\"IE=edge\"],[9],[10],[0,\"\\n  \"],[7,\"title\"],[9],[0,\"Polaris Helm Operator\"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/ui-head.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/ui-mobile-header", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "aTB9I0kQ",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"id\",\"k_header_mobile\"],[11,\"class\",\"k-header-mobile  k-header-mobile--fixed \"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"k-header-mobile__logo\"],[9],[0,\"\\n    \"],[7,\"a\"],[11,\"href\",\"/\"],[9],[0,\"\\n      \"],[7,\"img\"],[11,\"src\",\"/assets/images/snps-logo-sts-white-grey.png\"],[11,\"width\",\"100\"],[11,\"alt\",\"\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"k-header-mobile__toolbar\"],[9],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"k-header-mobile__toolbar-toggler\"],[11,\"id\",\"k_header_mobile_toggler\"],[9],[7,\"span\"],[9],[10],[10],[0,\"\\n    \"],[7,\"button\"],[11,\"class\",\"k-header-mobile__toolbar-topbar-toggler\"],[11,\"id\",\"k_header_mobile_topbar_toggler\"],[9],[0,\"\\n      \"],[7,\"i\"],[11,\"class\",\"flaticon-more-1\"],[9],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/ui-mobile-header.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/ui-nav-bar", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "JDTgBLA7",
    "block": "{\"symbols\":[\"entry\"],\"statements\":[[7,\"div\"],[11,\"class\",\"k-header__bottom\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"k-container\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"k-header-menu-wrapper\"],[11,\"id\",\"k_header_menu_wrapper\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"id\",\"k_header_menu\"],[11,\"class\",\"k-header-menu k-header-menu-mobile \"],[9],[0,\"\\n        \"],[7,\"ul\"],[11,\"class\",\"k-menu__nav \"],[9],[0,\"\\n\"],[4,\"each\",[[24,0,[\"menu_entries\"]]],null,{\"statements\":[[0,\"            \"],[7,\"li\"],[11,\"class\",\"k-menu__item \"],[11,\"aria-haspopup\",\"true\"],[9],[0,\"\\n              \"],[7,\"a\"],[12,\"href\",[24,1,[\"link\"]]],[12,\"id\",[24,1,[\"id\"]]],[11,\"class\",\"k-menu__link \"],[9],[0,\"\\n                \"],[7,\"i\"],[11,\"class\",\"k-menu__link-icon flaticon-interface-3\"],[9],[10],[7,\"span\"],[11,\"class\",\"k-menu__link-text\"],[9],[1,[24,1,[\"name\"]],false],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/ui-nav-bar.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/ui/help", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "uO4XngfH",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"k-portlet\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"k-portlet__head\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"k-portlet__head-label\"],[9],[0,\"\\n      \"],[7,\"h3\"],[11,\"class\",\"k-portlet__head-title\"],[9],[0,\"Help\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"k-portlet__body\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-12 alert\"],[11,\"role\",\"alert\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"alert-text\"],[9],[0,\"\\n          For any queries, please contact \"],[7,\"a\"],[11,\"href\",\"mailto:polaris-support@synopsys.com\"],[9],[0,\"polaris-support@synopsys.com\"],[10],[0,\".\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-12 alert\"],[11,\"role\",\"alert\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"alert-text\"],[9],[0,\"\\n          Github : \"],[7,\"a\"],[11,\"href\",\"https://github.com/blackducksoftware/polaris-helm-operator\"],[9],[0,\"https://github.com/blackducksoftware/polaris-helm-operator\"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/ui/help.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/ui/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "8SImu9SO",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"k-portlet\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"k-portlet__head\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"k-portlet__head-label\"],[9],[0,\"\\n      \"],[7,\"h3\"],[11,\"class\",\"k-portlet__head-title\"],[9],[0,\"Introduction\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"k-portlet__body\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"col-12 alert\"],[11,\"role\",\"alert\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"alert-text\"],[9],[0,\"\\n          Welcome to Polaris Operator dashboard. Polaris Operator is designed to\\n          support on-premise deployment of Polaris application. Currently it supports only\\n          ReportingPlatform deployment.\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/ui/home.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/components/ui/operator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "vsVPVwT9",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"k-portlet\"],[9],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"k-portlet__head\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"k-portlet__head-label\"],[9],[0,\"\\n      \"],[7,\"h3\"],[11,\"class\",\"k-portlet__head-title\"],[9],[0,\"Install / Upgrade Operator\"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"k-portlet__body\"],[9],[0,\"\\n\"],[4,\"if\",[[24,0,[\"operator\",\"isInstalled\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-12 alert\"],[11,\"role\",\"alert\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"alert-text\"],[9],[0,\"You are running Polaris Operator version : \"],[1,[24,0,[\"operator\",\"currentVersion\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n\"],[4,\"if\",[[29,\"not-eq\",[[24,0,[\"operator\",\"currentVersion\"]],[24,0,[\"operator\",\"latestVersion\"]]],null]],null,{\"statements\":[[0,\"          \"],[7,\"div\"],[11,\"class\",\"col-5 alert alert-warning\"],[11,\"role\",\"alert\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"alert-text\"],[9],[0,\"New version of Polaris Operator is available ! Latest Version : \"],[1,[24,0,[\"operator\",\"latestVersion\"]],false],[10],[7,\"br\"],[9],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"col-12\"],[9],[0,\"\\n            \"],[7,\"h3\"],[9],[0,\"Operator Upgrade\"],[10],[0,\"\\n            \"],[7,\"form\"],[11,\"class\",\"k-form k-form--label-right\"],[11,\"id\",\"operator-deploy-form\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n                \"],[7,\"label\"],[11,\"for\",\"polarisOperatorVersion\"],[9],[0,\"POLARIS VERSION\"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n                  \"],[7,\"input\"],[11,\"class\",\"form-control\"],[11,\"name\",\"polarisOperatorVersion\"],[11,\"id\",\"polarisOperatorVersion\"],[11,\"required\",\"\"],[11,\"placeholder\",\"Please enter polaris version to be deployed\"],[12,\"value\",[24,0,[\"operator\",\"latestVersion\"]]],[11,\"type\",\"text\"],[9],[10],[0,\"\\n                  \"],[7,\"input\"],[11,\"name\",\"operationType\"],[11,\"value\",\"upgrade\"],[11,\"type\",\"hidden\"],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n              \"],[10],[0,\"\\n              \"],[7,\"button\"],[11,\"class\",\"btn btn-primary btn-create\"],[11,\"type\",\"submit\"],[9],[0,\"Upgrade\"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[4,\"unless\",[[24,0,[\"operator\",\"isInstalled\"]]],null,{\"statements\":[[0,\"      \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-12 alert\"],[11,\"role\",\"alert\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"alert-text\"],[9],[0,\"Polaris Operator is not installed. Install it using below form.\"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-12 alert\"],[11,\"role\",\"alert\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"alert-text\"],[9],[0,\"Latest Version: \"],[1,[24,0,[\"operator\",\"latestVersion\"]],false],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"col-12\"],[9],[0,\"\\n          \"],[7,\"h3\"],[9],[0,\"Install Operator\"],[10],[0,\"\\n          \"],[7,\"form\"],[11,\"class\",\"k-form k-form--label-right\"],[11,\"id\",\"operator-deploy-form\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n              \"],[7,\"label\"],[11,\"for\",\"polarisOperatorVersion\"],[9],[0,\"POLARIS VERSION\"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n                \"],[7,\"input\"],[11,\"class\",\"form-control\"],[11,\"name\",\"polarisOperatorVersion\"],[11,\"id\",\"polarisOperatorVersion\"],[11,\"required\",\"\"],[11,\"placeholder\",\"Please enter polaris version to be deployed\"],[12,\"value\",[24,0,[\"operator\",\"latestVersion\"]]],[11,\"type\",\"text\"],[9],[10],[0,\"\\n                \"],[7,\"input\"],[11,\"name\",\"operationType\"],[11,\"value\",\"install\"],[11,\"type\",\"hidden\"],[9],[10],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n              \"],[7,\"label\"],[11,\"for\",\"gcrToken\"],[9],[0,\"GCR TOKEN\"],[10],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n                \"],[7,\"textarea\"],[11,\"class\",\"form-control\"],[11,\"name\",\"gcrToken\"],[11,\"id\",\"gcrToken\"],[11,\"required\",\"\"],[11,\"placeholder\",\"Please enter the private GCR token(json)\"],[9],[10],[0,\"              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n            \"],[7,\"button\"],[11,\"class\",\"btn btn-primary btn-create\"],[11,\"type\",\"submit\"],[9],[0,\"Install\"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n\"]],\"parameters\":[]},null],[0,\"  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/components/ui/operator.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/documentation", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "hBNYOV51",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"d-flex\"],[11,\"id\",\"wrapper\"],[9],[0,\"\\n  \"],[5,\"documentation-navbar\",[],[[],[]]],[0,\"\\n  \"],[7,\"div\"],[11,\"id\",\"page-content-wrapper\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"container-fluid\"],[11,\"id\",\"main\"],[9],[0,\"\\n      \"],[1,[23,\"outlet\"],false],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/documentation.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/documentation/aks", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "RwJPsKUx",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"documentation/aks\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/documentation/aks.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/documentation/deploy-operator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "+VoSTVJf",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"documentation/deploy-operator\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/documentation/deploy-operator.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/documentation/eks", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Dr/GkZxa",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"documentation/eks\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/documentation/eks.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/documentation/gke", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tkvuVNfb",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"documentation/gke\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/documentation/gke.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/documentation/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "5hBoauut",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"documentation/home\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/documentation/home.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/documentation/on-premises", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "bxMHqoGE",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"documentation/on-premises\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/documentation/on-premises.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/documentation/overview", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "YyC2Eq6J",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"documentation/overview\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/documentation/overview.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/documentation/prerequisites", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "EBpgCGqU",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"documentation/prerequisites\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/documentation/prerequisites.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/ui", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "Mm1FO4Ek",
    "block": "{\"symbols\":[],\"statements\":[[5,\"ui-head\",[],[[],[]]],[0,\"\\n\"],[7,\"body\"],[11,\"class\",\"k-page--loading-enabled k-page--loading k-page--fixed k-header--fixed k-header--minimize-menu k-header-mobile--fixed\"],[9],[0,\"\\n  \"],[5,\"ui-mobile-header\",[],[[],[]]],[0,\"\\n  \"],[7,\"div\"],[11,\"class\",\"k-grid k-grid--hor k-grid--root\"],[9],[0,\"\\n    \"],[7,\"div\"],[11,\"class\",\"k-grid__item k-grid__item--fluid k-grid k-grid--ver k-page\"],[9],[0,\"\\n      \"],[7,\"div\"],[11,\"class\",\"k-grid__item k-grid__item--fluid k-grid k-grid--hor k-wrapper \"],[11,\"id\",\"k_wrapper\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"id\",\"k_header\"],[11,\"class\",\"k-header k-grid__item  k-header--fixed \"],[11,\"data-kheader-minimize\",\"on\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"k-header__top\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"k-container\"],[9],[0,\"\\n              \"],[5,\"ui-brand-logo\",[],[[],[]]],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n          \"],[5,\"ui-nav-bar\",[],[[],[]]],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"k-grid__item k-grid__item--fluid k-grid k-grid--ver k-grid--stretch\"],[9],[0,\"\\n          \"],[7,\"div\"],[11,\"class\",\"k-container k-content-wrapper  k-grid k-grid--ver\"],[11,\"id\",\"k_content_wrapper\"],[9],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"k-content\\tk-grid__item k-grid__item--fluid k-grid k-grid--hor\"],[11,\"id\",\"k_content\"],[9],[0,\"\\n              \"],[7,\"div\"],[11,\"class\",\"k-content__body\\tk-grid__item k-grid__item--fluid\"],[9],[0,\"\\n                \"],[1,[23,\"outlet\"],false],[0,\"\\n              \"],[10],[0,\"\\n            \"],[10],[0,\"\\n          \"],[10],[0,\"\\n        \"],[10],[0,\"\\n      \"],[10],[0,\"\\n    \"],[10],[0,\"\\n  \"],[10],[0,\"\\n  \"],[7,\"script\"],[9],[0,\"\\n    var KAppOptions = {\\n      \\\"colors\\\": {\\n        \\\"state\\\": {\\n          \\\"brand\\\": \\\"#5d78ff\\\",\\n          \\\"metal\\\": \\\"#c4c5d6\\\",\\n          \\\"light\\\": \\\"#ffffff\\\",\\n          \\\"accent\\\": \\\"#00c5dc\\\",\\n          \\\"primary\\\": \\\"#5867dd\\\",\\n          \\\"success\\\": \\\"#34bfa3\\\",\\n          \\\"info\\\": \\\"#36a3f7\\\",\\n          \\\"warning\\\": \\\"#ffb822\\\",\\n          \\\"danger\\\": \\\"#fd3995\\\",\\n          \\\"focus\\\": \\\"#9816f4\\\"\\n        },\\n        \\\"base\\\": {\\n          \\\"label\\\": [\\\"#c5cbe3\\\", \\\"#a1a8c3\\\", \\\"#3d4465\\\", \\\"#3e4466\\\"],\\n          \\\"shape\\\": [\\\"#f0f3ff\\\", \\\"#d9dffa\\\", \\\"#afb4d4\\\", \\\"#646c9a\\\"]\\n        }\\n      }\\n    };\\n  \"],[10],[0,\"\\n\"],[10]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/ui.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/ui/deploy-black-duck", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "zcgaud2b",
    "block": "{\"symbols\":[],\"statements\":[[5,\"black-duck-form\",[],[[\"@data\"],[[23,\"bdData\"]]]],[0,\"\\n\"],[1,[23,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/ui/deploy-black-duck.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/ui/deploy-polaris", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "tQd6UWo3",
    "block": "{\"symbols\":[],\"statements\":[[7,\"div\"],[11,\"class\",\"k-content k-grid__item k-grid__item--fluid k-grid k-grid--hor\"],[11,\"id\",\"k_content\"],[9],[0,\"\\n    \"],[7,\"form\"],[11,\"class\",\"k-form k-form--label-right\"],[11,\"id\",\"polaris-options-form\"],[9],[0,\"\\n        \"],[7,\"div\"],[11,\"id\",\"deployOptions\"],[9],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"smtpDetails\"],[9],[7,\"b\"],[9],[0,\"SMTP SERVER DETAILS (For exchanging emails)\"],[10],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-6\"],[9],[0,\"\\n                    \"],[7,\"label\"],[11,\"for\",\"smtpHost\"],[9],[0,\"SMTP HOST\"],[10],[0,\"\\n                    \"],[7,\"input\"],[11,\"class\",\"form-control\"],[11,\"name\",\"smtpHost\"],[11,\"id\",\"smtpHost\"],[11,\"required\",\"\"],[11,\"placeholder\",\"Please enter smtp hostname\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-6\"],[9],[0,\"\\n                    \"],[7,\"label\"],[11,\"for\",\"smtpPort\"],[9],[0,\"SMTP PORT\"],[10],[0,\"\\n                    \"],[7,\"input\"],[11,\"class\",\"form-control\"],[11,\"name\",\"smtpPort\"],[11,\"id\",\"smtpPort\"],[11,\"required\",\"\"],[11,\"placeholder\",\"Please enter smtp port\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-6\"],[9],[0,\"\\n                    \"],[7,\"label\"],[11,\"for\",\"smtpUsername\"],[9],[0,\"SMTP USERNAME\"],[10],[0,\"\\n                    \"],[7,\"input\"],[11,\"class\",\"form-control\"],[11,\"name\",\"smtpUsername\"],[11,\"id\",\"smtpUsername\"],[11,\"placeholder\",\"Please enter smtp username\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-6\"],[9],[0,\"\\n                    \"],[7,\"label\"],[11,\"for\",\"smtpPassword\"],[9],[0,\"SMTP PASSWORD\"],[10],[0,\"\\n                    \"],[7,\"input\"],[11,\"class\",\"form-control\"],[11,\"name\",\"smtpPassword\"],[11,\"id\",\"smtpPassword\"],[11,\"placeholder\",\"Please enter smtp password\"],[11,\"type\",\"password\"],[9],[10],[0,\"\\n                    \"],[7,\"button\"],[11,\"id\",\"smtp-button\"],[11,\"class\",\"btn btn-secondary btn-create\"],[11,\"type\",\"button\"],[9],[0,\"Test Settings\"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"polarisEnvironmentName\"],[9],[0,\"ENVIRONMENT NAME\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n                \"],[7,\"input\"],[11,\"class\",\"form-control\"],[11,\"name\",\"polarisEnvironmentName\"],[11,\"id\",\"polarisEnvironmentName\"],[11,\"required\",\"\"],[11,\"placeholder\",\"Please enter a name for your Environment\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"polarisEnvironmentAddress\"],[9],[0,\"ENVIRONMENT ADDRESS (DNS)\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n                \"],[7,\"input\"],[11,\"class\",\"form-control\"],[11,\"name\",\"polarisEnvironmentAddress\"],[11,\"id\",\"polarisEnvironmentAddress\"],[11,\"required\",\"\"],[11,\"placeholder\",\"Please enter a desired url for polaris\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"namespace\"],[9],[0,\"NAMESPACE\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n                \"],[7,\"input\"],[11,\"class\",\"form-control\"],[11,\"name\",\"namespace\"],[11,\"id\",\"namespace\"],[11,\"required\",\"\"],[11,\"placeholder\",\"Namespace where polaris need to be deployed\"],[11,\"value\",\"default\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"storageClass\"],[9],[0,\"STORAGE CLASS\"],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"input-group\"],[9],[0,\"\\n                \"],[7,\"input\"],[11,\"class\",\"form-control\"],[11,\"name\",\"storageClass\"],[11,\"id\",\"storageClass\"],[11,\"required\",\"\"],[11,\"placeholder\",\"Storage class to be used for Persistent Volumes\"],[11,\"type\",\"text\"],[9],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"id\",\"ssl\"],[9],[10],[0,\"\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"label\"],[11,\"for\",\"polarisEnvironmentTemplate\"],[9],[7,\"b\"],[9],[0,\"POSTGRES INSTANCE TYPE\"],[10],[10],[0,\"\\n            \"],[7,\"div\"],[11,\"class\",\"row\"],[9],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-lg-3\"],[9],[0,\"\\n                    \"],[7,\"label\"],[11,\"class\",\"k-option\"],[9],[0,\"\\n                        \"],[7,\"span\"],[11,\"class\",\"k-option__control\"],[9],[0,\"\\n                            \"],[7,\"span\"],[11,\"class\",\"k-radio k-radio--check-bold\"],[9],[0,\"\\n                                \"],[7,\"input\"],[11,\"name\",\"postgresInstanceType\"],[11,\"value\",\"internal\"],[11,\"checked\",\"\"],[11,\"type\",\"radio\"],[9],[10],[0,\"\\n                                \"],[7,\"span\"],[9],[10],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"span\"],[11,\"class\",\"k-option__label\"],[9],[0,\"\\n                            \"],[7,\"span\"],[11,\"class\",\"k-option__head\"],[9],[0,\"\\n                                \"],[7,\"span\"],[11,\"class\",\"k-option__title\"],[9],[0,\"\\n                                    Internal Postgres Instance\\n                                \"],[10],[0,\"\\n                            \"],[10],[0,\"\\n                            \"],[7,\"span\"],[11,\"class\",\"k-option__body\"],[9],[0,\"\\n                                Postgres instance runs within kubernetes network.\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n                \"],[7,\"div\"],[11,\"class\",\"col-lg-3\"],[9],[0,\"\\n                    \"],[7,\"label\"],[11,\"class\",\"k-option\"],[9],[0,\"\\n                        \"],[7,\"span\"],[11,\"class\",\"k-option__control\"],[9],[0,\"\\n                            \"],[7,\"span\"],[11,\"class\",\"k-radio k-radio--check-bold\"],[9],[0,\"\\n                                \"],[7,\"input\"],[11,\"name\",\"postgresInstanceType\"],[11,\"value\",\"external\"],[11,\"type\",\"radio\"],[9],[10],[0,\"\\n                                \"],[7,\"span\"],[9],[10],[0,\"\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                        \"],[7,\"span\"],[11,\"class\",\"k-option__label\"],[9],[0,\"\\n                            \"],[7,\"span\"],[11,\"class\",\"k-option__head\"],[9],[0,\"\\n                                \"],[7,\"span\"],[11,\"class\",\"k-option__title\"],[9],[0,\"\\n                                    External Postgres Instance\\n                                \"],[10],[0,\"\\n                            \"],[10],[0,\"\\n                            \"],[7,\"span\"],[11,\"class\",\"k-option__body\"],[9],[0,\"\\n                                Postgres instance running outside kubernetes network.\\n                            \"],[10],[0,\"\\n                        \"],[10],[0,\"\\n                    \"],[10],[0,\"\\n                \"],[10],[0,\"\\n            \"],[10],[0,\"\\n        \"],[10],[0,\"\\n\\n        \"],[7,\"div\"],[11,\"class\",\"form-group\"],[9],[0,\"\\n            \"],[7,\"button\"],[11,\"class\",\"btn btn-primary btn-create\"],[11,\"type\",\"submit\"],[9],[0,\"Submit\"],[3,\"action\",[[24,0,[]],\"deployPolaris\"]],[10],[0,\"\\n        \"],[10],[0,\"\\n    \"],[10],[0,\"\\n\"],[10],[0,\"\\n\\n\\n\"],[1,[23,\"outlet\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/ui/deploy-polaris.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/ui/help", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "O7dkS8EC",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"ui/help\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/ui/help.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/ui/home", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "0lY4lIqm",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"ui/home\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/ui/home.hbs"
    }
  });

  _exports.default = _default;
});
;define("operator-docs/templates/ui/operator", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "vPEvUtvH",
    "block": "{\"symbols\":[],\"statements\":[[1,[23,\"ui/operator\"],false]],\"hasEval\":false}",
    "meta": {
      "moduleName": "operator-docs/templates/ui/operator.hbs"
    }
  });

  _exports.default = _default;
});
;

;define('operator-docs/config/environment', [], function() {
  var prefix = 'operator-docs';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("operator-docs/app")["default"].create({"name":"operator-docs","version":"0.0.0+1d73774f"});
          }
        
//# sourceMappingURL=operator-docs.map
