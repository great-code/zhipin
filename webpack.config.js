module.exports = {
    entry: './main.js', // 入口文件路径
    output: {
        path: __dirname + "/build",//打包后的js文件存放的地方
        filename: "bundle.js"//打包后的js文件名
    },
    devServer: {
        inline: true,
        port: 3333
    },
    module: {
        loaders: [
            {
                test: /\.js$/, // babel 转换为兼容性的 js
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'latest']
                }
            }, 
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }, {
                test: /\.less$/,
                loader: 'style-loader!css-loader!less-loader'
            }, {
        　　　　　　test: /\.(png|jpg)$/,
        　　　　　　loader: 'url-loader?limit=8192&name=images/[name].[ext]'
        　　　　}
        ]
        
    }
}