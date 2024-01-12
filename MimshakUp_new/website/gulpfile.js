"use strict";

var gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  sourcemaps = require("gulp-sourcemaps"),
  // combineMediaQuery = require("postcss-combine-media-query");
  mmq = require('gulp-merge-media-queries');

function style() {
  return gulp
    .src(["css/scss/style.scss", "css/scss/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(mmq({
      log: true
    }))
    .pipe(postcss([ autoprefixer()]))
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("css/scss"));
}

function watch() {
  gulp.watch(
    [
      "css/scss/**/*.scss",
      "css/scss/*/*.scss",
      "css/scss/*/*/*.scss",
      "css/scss/*.scss",
      "*.scss",
    ],
    style
  );
}

exports.default = watch;
