var gulp      = require('gulp'),
    nodemon   = require('gulp-nodemon'),
    bs        = require('browser-sync'),
    reload    = bs.reload,
    when      = require('gulp-if'),
    shell     = require('gulp-shell');


// the paths to our app files
var paths = {
  scripts: ['./client/app/**/*.js'],
  html: ['./client/app/*.html', './client/index.html'],
  styles: ['./client/assets/style.css'],
  test: ['./specs/*.js']
};


gulp.task('start', ['serve'],function () {
  bs({
    notify: true,
    // address for server,
    injectChanges: true,
    files: paths.scripts.concat(paths.html, paths.styles),
    proxy: 'localhost:3000'
  });
});

gulp.task('karma', shell.task([
  'karma start'
]));

// start our node server using nodemon
gulp.task('serve', function() {
  nodemon({script: 'index.js', ignore: 'node_modules/**/*.js'});
});

gulp.task('default', ['start']);
