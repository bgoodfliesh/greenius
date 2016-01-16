module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    //list of files to load in browser, pay attn to order
    files: [
      //source files
      './client/lib/angular/angular.js',
      './client/lib/angular-animate/angular-animate.js'
      './client/lib/angular-bootstrap/ui-bootstrap.js'
      './client/lib/angular-route/angular-route.js',
      './client/lib/angular-ui-router/release/angular-ui-router.js',
      './client/lib/bootstrap/dist/js/bootstrap.js',
      './client/lib/jquery/dist/jquery.js',

      //app code
      './client/app/**/*.js',

      //spec files
      './spec/*.js'
    ],

    exclude: [
      './karma.conf.js'
    ],

    plugins: [
          'nyan',
          'unicorn'
    ],
    // preprocessors: {

    // },

    reporters: ['nyan','unicorn'],

    port: 6969,

    colors: true,

    logLevel: config.LOG_INFO,

    browsers: ['Chrome'],

    singleRun: true
  })
}
