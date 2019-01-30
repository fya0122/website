const gulp = require('gulp')
const gulpPostcss = require('gulp-postcss')
const postcssPx2rem = require('postcss-px2rem')
gulp.task('default', (() => {
	const processors = [postcssPx2rem({ remUnit: 75 })]
	return gulp.src('./src/css/mobile.css').pipe(gulpPostcss(processors)).pipe(gulp.dest('./dist/css/'))
}))