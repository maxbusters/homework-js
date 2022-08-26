"use strict";
import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';

async function optimizeImg(){
	gulp.src('./assets/images/*')
		.pipe(imagemin([
            imageminMozjpeg({quality: 50, progressive: true}),
        ]))
		.pipe(gulp.dest('./assets/images_opt/'))
};

export {optimizeImg};