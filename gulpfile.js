const gulp = require("gulp");
const sass = require("gulp-sass");
const browsersync = require("browser-sync");
const autoprefixer = require("gulp-autoprefixer");

function style() {
  return gulp
    .src("./scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        cascade: false
      })
    )
    .pipe(gulp.dest("./css"))
    .pipe(browsersync.stream());
}

function watch() {
  browsersync.init({
    server: "./"
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browsersync.reload);
}

exports.style = style;
exports.watch = watch;
