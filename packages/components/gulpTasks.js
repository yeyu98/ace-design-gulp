const gulp = require('gulp')
require('./gulpFile');
const targetTask = gulp.task('compileTS') || gulp.series([]);
targetTask()