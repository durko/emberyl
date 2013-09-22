requirejs.config
    urlArgs: 'b=' + ((new Date()).getTime())
    shim:
        handlebars:
            deps: ['jquery']
            exports: 'Handlebars'
        ember:
            deps: ['handlebars', 'jquery']
            exports: 'Ember'
    paths:
        jquery: 'vendor/jquery/jquery-2.0.3'
        handlebars: 'vendor/handlebars/handlebars'
        ember: 'vendor/ember/ember'
    map:
        templates:
                'vendor/ember': 'ember'
