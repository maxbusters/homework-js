"use strict";
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

async function optimizeImg(){
	gulp.src('./assets/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./assets/images_opt/'))
};

export {optimizeImg};