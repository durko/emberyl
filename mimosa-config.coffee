exports.config = {
  modules: ['lint', 'server', 'es6-module-transpiler', 'require', 'minify', 'live-reload']

  template:
    handlebars:
      ember:
        enabled: true

  es6Modules:
    exclude: [ /[/\\]vendor[/\\]/, /[/\\]main[\.-]/, /common\.coffee/ ]

  lint:
    rules:
      javascript:
        indent: false
        quotmark: false

  server:
    path: 'server.js'
    views:
      compileWith: 'handlebars'
      extension: 'hbs'
}
