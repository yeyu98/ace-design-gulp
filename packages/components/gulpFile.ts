// 编译less
// 编译TSX、TS
// 优先使用gulp-typescript、再使用gulp-babel
const gulp = require('gulp')
const merge2 = require('merge2');
const del = require('del')
const compileTS = require('gulp-typescript')
const compileLess = require('gulp-less')
const tsConfig = require('./tsconfig.json')
const getBabelConfig = require('./babelConfig')

// gulp.task('clean',() => {
//     del(['./es', './lib', './dist'])
// })

gulp.task('compileTS', function() {
    const tsStream = gulp.src(['**/*.ts', '**/*.tsx', '!**/node_modules/**/*.*']).pipe(compileTS({...tsConfig.compilerOptions}))
    const jsSteam = tsStream.js.pipe(getBabelConfig({isESM: true}))
    .pipe(gulp.dest('./lib'))
    .pipe(gulp.dest('./es'))

    const dtsStream = tsStream.dts
    .pipe(gulp.dest('./lib'))
    .pipe(gulp.dest('./es'))

    return merge2([jsSteam, dtsStream])
})

gulp.task('compileLess', () => 
    gulp.src(['**/*.less', '!**/node_modules/**/*.*'])
    .pipe(compileLess())
    .pipe(gulp.dest('./lib'))
    .pipe(gulp.dest('./es'))
)


// gulp.task('less', gulp.series(['clean', 'compileLess']))

export {}