const gulp = require('gulp')
require('./gulpfile');
const targetTask = gulp.task('compileLess') || gulp.series([]);
targetTask()