// 编译less
// 编译TSX、TS
// 优先使用gulp-typescript、再使用gulp-babel
const gulp = require('gulp')
const compileLess = require('gulp-less')

gulp.task('compileLess', () => 
    gulp.src(['**/*.less', '!**/node_modules/**/*.*'])
    .pipe(compileLess())
    .pipe(gulp.dest('./lib'))
    .pipe(gulp.dest('./es'))
)

export {}