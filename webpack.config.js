const path = require('path')
const webpack = require('webpack')

module.exports = {
    devtool: 'cheap-eval-source-map',
    entry: './docs/entry.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        library: libraryName,      
        libraryTarget: 'umd',
        publicPath: '/dist/',
        umdNamedDefine: true
    },
    resolve: {
        alias: {
            'styledbymoi': path.join(__dirname, 'src'),
            'react': path.resolve(__dirname, './node_modules/react'),
            'react-dom': path.resolve(__dirname, './node_modules/react-dom'),  
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        })
    ],
    devServer: {
        contentBase: 'docs/'
    },
    externals: {      
        "react": {          
            commonjs: "react",          
            commonjs2: "react",          
            amd: "React",          
            root: "React"      
        },      
        "react-dom": {          
            commonjs: "react-dom",          
            commonjs2: "react-dom",          
            amd: "ReactDOM",          
            root: "ReactDOM"      
        }  
    } 
}