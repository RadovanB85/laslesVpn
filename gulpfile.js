const gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  livereload = require("gulp-livereload");

const styleSRC = "./src/scss/**/*.scss";
const styleDist = "./dist/css";

function css() {
  return gulp
    .src(styleSRC)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(styleDist));
}

function watchTask() {
  gulp.watch([styleSRC], css);
}

exports.default = gulp.series(css, watchTask);
