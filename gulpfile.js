'use strict';


var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-develop-server');

gulp.task('styles', function() {
   return gulp.src('./assets/styles/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});


// run server 
gulp.task( 'server:start', function() {
    server.listen( { 
    	path: './server.js' })
});

gulp.task('styles:watch',function() {
    gulp.watch('./assets/styles/**/*.*', gulp.series('styles'));
});

gulp.task( 'server:restart', function() {
    gulp.watch('./server.js', server.restart );
});

gulp.task('watchers', gulp.parallel(
    'styles:watch',
    'server:start'
    )
)

gulp.task('start', gulp.series(
    'styles',
    gulp.parallel(
        'watchers'
        // 'sync'
        )
    )
)

// // restart server if server.js changed 
// gulp.task( 'server:restart', function() {
//     gulp.watch(['./server.js','api/**/*.*','views/**/*.*'], server.restart );
// }); 

// gulp.task( 'sync', function() {
//     browserSync.init({
//         proxy: "http://localhost:8000",
//         port: 8000
//     });
//     browserSync.watch("public/**/*.*").on('change', browserSync.reload);
// });



// gulp.task('prod', gulp.series(
//     'cleanCompiledStyles',
//     'cleanCompiledJS',
//     'cleanVendor',
//     'styles',
//     'js',
//     'images',
//     'vendor:dateTimePicker',
//     'templates',
//     'server:start'
//     )
// )

// var gulp = require('gulp');
// var sass = require('gulp-sass');

// gulp.task('styles:build', function() {
//    return gulp.src('./assets/styles/app.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(gulp.dest('./css/'));
// });



// gulp.task('default',);