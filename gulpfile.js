var gulp = require('gulp');
var react = require('gulp-react');


var jsxSource = './src/jsx/*.jsx',
    jsxDest = './public/js/';


gulp.task('default', function(){
  return gulp.src(jsxSource)
      .pipe(react())
      .pipe(gulp.dest(jsxDest));  
})
