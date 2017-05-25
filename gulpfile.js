var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var nunjucks = require('gulp-nunjucks');
var imagemin = require('gulp-imagemin');
var browserify = require('gulp-browserify');
var sourcemaps = require('gulp-sourcemaps');
var cache = require('gulp-cache');


//TODO:
//Implement the optimze functions from Zell's tutorial
//https://css-tricks.com/gulp-for-beginners/

gulp.task('nunjucks', function () {
    gulp.src('templates/index.html')
        .pipe(nunjucks.compile({name: 'Index'}))
        .pipe(gulp.dest('public'))
        .pipe(browserSync.reload({
            stream: true
            }))
});


//Function to optimize images (not really utilized)
gulp.task('images', function() {
    return gulp.src('source/images/**/*.+(png|jpg|gif)')
                                       .pipe(cache(imagemin()))
                                       .pipe(gulp.dest('public/images'))

});
gulp.task('js', function() {
    return gulp.src('source/js/app.js')
               .pipe(browserify({
                insertGlobals: true,
                debug : !gulp.env.production
               }))
               .pipe(gulp.dest('public/js'))
});

gulp.task('sass', function(){
    return gulp.src('source/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed',
            includePaths: [require('node-normalize-scss').includePaths,  'node_modules/susy/sass', 'node_modules/susy/sass', 'node_modules/breakpoint-sass/stylesheets']
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('public/css/'))
        .pipe(browserSync.reload({
            stream: true
            }))
});

gulp.task('browserSync', function() {
    browserSync.init({
        browser: "firefox",
        server: {
            baseDir: 'public'
        }
    })
});

//watch the scss folder and rukn sass whenever
//a file changes
//We put browser sync in an array as the second argument
//that means that we want to run the browser sync task first
//and then watch for file changers
gulp.task('watch', ['nunjucks', 'sass', 'images', 'js', 'browserSync'], function() {
    gulp.watch('source/scss/**/*.scss', ['sass']);
    gulp.watch('templates/**/*.html', ['nunjucks']);
    gulp.watch('source/js/**/*.js', ['js', browserSync.reload]);
    gulp.watch('source/images/**/*.+(png|jpg|gif)', ['images', browserSync.reload]);
});
