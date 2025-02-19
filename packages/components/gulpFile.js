// 编译less、编译TSX、TS
// 优先使用gulp-typescript、再使用gulp-babel
const gulp = require('gulp')
const merge2 = require('merge2');
const del = require('del')
const compileTS = require('gulp-typescript')
const compileLess = require('gulp-less')
const compileJs = require('gulp-babel')
const getBabelConfig = require('./babelConfig')
const tsConfig = require('./tsconfig.json')

// 清空lib
gulp.task('cleanLib',() => {
    return del(['./es', './lib', './dist'])
})

// 编译TS
const compileTSToJS = ({isESM, outputDir}) => {
    const tsStream = gulp.src(['**/*.ts', '**/*.tsx', '!**/node_modules/**/*.*']).pipe(compileTS({...tsConfig.compilerOptions}))

    // 编译js
    const jsStream = tsStream.js
    .pipe(compileJs(getBabelConfig({isESM})))
    .pipe(gulp.dest(outputDir))

    // 编译d.ts
    const dtsStream = tsStream.dts
    .pipe(gulp.dest(outputDir))

    return merge2([dtsStream, jsStream])
}

// 编译成ESM
gulp.task('compileTSForESM', () => compileTSToJS({isESM: true, outputDir: './es'}))
// 编译成CJS
gulp.task('compileTSForCJS', () => compileTSToJS({isESM: false, outputDir: './lib'}))

// 编译Less
gulp.task('compileLess', () => 
    gulp.src(['**/*.less', '!**/node_modules/**/*.*'])
    .pipe(compileLess())
    .pipe(gulp.dest('./lib'))
    .pipe(gulp.dest('./es'))
)

gulp.task('compileTS', gulp.series(['compileTSForCJS']))
gulp.task('compileLib', gulp.series([
    'cleanLib', 
    'compileLess', 
    gulp.parallel([
        'compileTSForESM', 
        'compileTSForCJS'
    ])
]))