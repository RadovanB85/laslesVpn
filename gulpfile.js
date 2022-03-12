const gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass"));

const styleSRC = "./src/sass/**/*.scss";
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
