"use strict";

var gulp = require("gulp"),
    react = require('gulp-react'),
    watch = require('gulp-watch');

var paths = {
    webroot: "./public/"
};

paths.jsx = paths.webroot + "js/app/**/*.jsx";
paths.jsxdist = paths.webroot + "js/dist";

gulp.task('react', function () {
    return gulp.src(paths.jsx)
		.pipe(react())
		.pipe(gulp.dest(paths.jsxdist));
});


gulp.task('watch', function () {
    watch(paths.jsx, function () {
        gulp.start('react');
    });
});


gulp.task("default", ["react"]);