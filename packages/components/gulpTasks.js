const gulp = require('gulp')
require('./gulpFile');
const targetTask = gulp.task('compileLib') || gulp.series([]);
targetTask()