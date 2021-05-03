const path = require('path')
require('dotenv')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/app.js",
    output:{
        filename:'myBundle.js',
        path: path.resolve(__dirname,'dist'),
        publicPath:'',
        // publicPath: path.resolve(__dirname,'public'),
        clean:true
    },
    devServer:{
        port:9000,
        contentBase:path.resolve(__dirname,'dist'),
        hot:true
    },
    plugins:[
        new HTMLWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            inject:'body'
        })
    ],
    module:{
        rules:[
            {
                 test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
                 type: 'asset/resource',                  
            },
            {
                test:/\.scss$/,
                use:["style-loader","css-loader","sass-loader"]
            },
            {
                test:/\.js$/,
                exclude:/(node_modules)/,
                use:{
                    loader:"babel-loader",
                    options:{
                        presets:["@babel/preset-env","@babel/preset-react"]
                    }
                }
            }
        ]
    },
    mode:process.env.MODE=="production"?"production":"development",
}