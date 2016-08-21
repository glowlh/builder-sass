'use strict';

module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js:process'));
  });
};
