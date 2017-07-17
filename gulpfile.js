// Dependencies
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync').create();
 
// Task

gulp.task('default', function() {
	// listen for changes
	livereload.listen();
	// configure nodemon
	nodemon({
		// the script to run the app
		script: 'server.js',
		ext: 'js'
	}).on('restart', function(){
		// when the app has restarted, run livereload.
		gulp.src('server.js')
			.pipe(livereload())
			.pipe(notify('Reloading page, please wait...'));
	});
});  
 
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "http://localhost:3000"
//     });
// });

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "http://localhost:3000"
        }
    });
});