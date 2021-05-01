const path = require('path')

module.exports = {
    entry: "./src/app.js",
    output:{
        filename:'myBundle.js',
        path: path.resolve(__dirname,'dist'),
        // publicPath: path.resolve(__dirname,'public'),
    },
    devServer:{
        port:9000,
        contentBase:path.resolve(__dirname,'dist'),
        hot:true
    },
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
    mode:"development",
}