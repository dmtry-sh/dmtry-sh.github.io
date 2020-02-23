var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create()

gulp.task('sass', function(done) {

    gulp.src('app/sass/*.sass')
      .pipe(sass())
      .pipe(gulp.dest('app/css'))
      .pipe(browserSync.stream())

    done();
  
});

gulp.task('serve', function(done) {
    
    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/sass/*.sass", gulp.series('sass'));
    gulp.watch("app/*.html").on('change', () => {
        browserSync.reload();
        done();
    });

    done();

});

gulp.task('default', gulp.series('sass', 'serve'));


