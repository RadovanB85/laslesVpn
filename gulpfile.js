const gulp = require("gulp"),
  sass = require("gulp-sass")(require("sass")),
  autoprefixer = require("gulp-autoprefixer");
const sourceMaps = require("gulp-sourcemaps");

const styleSRC = "./src/sass/**/*.scss";
const styleDist = "./dist/css";

function css() {
  return gulp
    .src(styleSRC)
    .pipe(sourceMaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
        cascade: false,
      })
    )
    .pipe(sourceMaps.write("./"))
    .pipe(gulp.dest(styleDist));
}

function watchTask() {
  gulp.watch([styleSRC], css);
}

exports.default = gulp.series(css, watchTask);
