const gulp = require('gulp')
const gulpPostcss = require('gulp-postcss')
const postcssPx2rem = require('postcss-px2rem')
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
gulp.task('default', (() => {
	const processors = [
	  postcssPx2rem({ remUnit: 75 }),
	  autoprefixer(),
	  cssnano()
	]
	return gulp.src('./src/css/mobile.css').pipe(gulpPostcss(processors)).pipe(gulp.dest('./dist/css/'))
}))