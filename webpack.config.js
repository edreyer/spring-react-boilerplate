const webpack = require('webpack');
const path = require('path');

const publicPath = path.join(__dirname, 'src', 'main', 'resources', 'public');

console.log('Public Path: ' + publicPath);

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8081',
        'webpack/hot/dev-server',
        './src/main/resources/public/js/index.jsx'
    ],
    output: {
        path: path.join(publicPath, 'static'),
        filename: 'bundle.js',
        publicPath: '/static'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel-loader'],
            include: path.join(__dirname, 'src')
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './src/main/resources/public'
    }
};
