// gulpfile.js
var  gulp = require('gulp'),
	 concat = require('gulp-concat'),
	 clean = require('gulp-rimraf'),
	 cssmin = require("gulp-minify-css"),
	 jsValidate = require('gulp-jsvalidate'),
	 notify = require('gulp-notify'),
	 uglify = require('gulp-uglify'),
	 jasmine = require('gulp-jasmine'),
	 webserver = require('gulp-webserver'),
	 sass = require('gulp-sass'),
	 autoprefixer = require('gulp-autoprefixer'),
	 sourcemaps = require('gulp-sourcemaps'),
	 handlebars = require('gulp-compile-handlebars'),
	 rename = require('gulp-rename');


gulp.task('clean', [], function() {
  console.log("Clean all files in build folder");

  return gulp.src("build/*", { read: false }).pipe(clean());
});

gulp.task('build-css', ['clean'], function() {
  console.log("Sass, concat, move, and minify all the css files in styles folder");
  	
  	return gulp.src('contents/styles/**/*.scss')
  	
  	  .pipe(sourcemaps.init())
  	  	.pipe(autoprefixer({

  	  		browsers: ['last 10 version'],
  	  		cascade: false

  	     }))
  	  	.pipe(sass().on('error', sass.logError))
  	  	.pipe(concat('main.min.css'))
      	.pipe(cssmin())
	  .pipe(sourcemaps.write('./maps'))

      .pipe(gulp.dest('build/styles'));
});

gulp.task('javascript', ['clean'], function () {
  console.log("Validate, Concat, Uglify, and Move all the javascript files");

  return gulp.src("contents/javascripts/**.js")
      .pipe(jsValidate())
      .on("error", notify.onError(function(error) {
        return error.message;
      }))
      .pipe(uglify())
      .pipe(concat('main.js'))
      .pipe(gulp.dest('build/javascripts'));
});

gulp.task('default', ['build-css', 'html', 'javascript']);



gulp.task('html', () => {

	return gulp.src('contents/pages/*.hbs')

		.pipe(handlebars({}, {

			ignorePartials: true,
			batch: ['contents/partials']
		}))

		.pipe(rename({
			extname: '.html'
		}))

		.pipe(gulp.dest('build'));
});

gulp.task('watch', ['default'], function() {
  return gulp.watch(['contents/**'], ['default']);
});


gulp.task('webserver', function() {
  return gulp.src('build')
    // .pipe(webserver({ livereload: true }));
    .pipe(webserver());
});