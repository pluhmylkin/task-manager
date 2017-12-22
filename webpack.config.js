const path = require('path')
const merge = require('webpack-merge')

const developerServer = require('./webpack/developerServer')
const react = require('./webpack/react')

const PATHS = {
    source: path.join(__dirname, '/client/'),
    build: path.join(__dirname, '/public/')
}

const common = {
    entry: [PATHS.source + "index.js"],
    output: {
        path: PATHS.build + "build/",
        publicPath: "build/",
        filename: 'bundle.js'
    },
    module: react()
}

module.exports = (env) => {
    if (env === 'production') {
        return common
    }
    if (env === 'development') {
        return merge([
            common,
            developerServer()
        ])
    }
}

