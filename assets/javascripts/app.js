
/* jshint unused:false */


// Add all imports here
import Em from 'ember';

import ApplicationController from 'controllers/application';
import ExampleController from 'controllers/example';

import Router from 'routes';
import IndexRoute from 'routes/index';
import ExampleRoute from 'routes/example';

import Templates from 'templates';




// Create app instance with es6 module (transpiled to amd) resolver
var App = Em.Application.create({
    LOG_TRANSITIONS: true,

    Resolver: Em.DefaultResolver.extend({
        resolveOther: function(parsedName) {
            var pluralizedType = parsedName.type + 's';
            var name = parsedName.fullNameWithoutType;

            var moduleName = pluralizedType + '/' + name;
            var module = require.s.contexts._.defined[moduleName];

            if (module) {
                return module;
            } else  {
                return this._super(parsedName);
            }
        },
        parseName: function(fullName) {
            var nameParts = fullName.split(':'),
                type = nameParts[0], fullNameWithoutType = nameParts[1],
                name = fullNameWithoutType,
                namespace = Em.get(this, 'namespace'),
                root = namespace;

            return {
                fullName: fullName,
                type: type,
                fullNameWithoutType: fullNameWithoutType,
                name: name,
                root: root,
                resolveMethodName: 'resolve' + Em.String.classify(type)
            };
        },
        normalize: function(fullName) {
            return fullName.replace(/\./g, '/');
        }
    })
});

export default App;

