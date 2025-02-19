const webpack = require('webpack')
const webpackConfig = require('./webpack.config')
const compileDist = () => new Promise((resolve, reject) => {
    webpack(webpackConfig, function(err, stats) {
        if(err) {
            return reject(err)
        }
        const info = stats.toJson();
        
        if (stats.hasErrors()) {
            (info.errors || []).forEach(error => {
                console.error(error);
                reject(err);
            });
            return
        }
        resolve()
    })
})

compileDist().then(res => {
    console.log("success")
}).catch(err => {
    console.log("err", err)
})