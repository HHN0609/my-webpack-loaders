const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.xml$/,
                use: [
                    {
                        loader: path.resolve(__dirname, './loaders/xml-to-json-loader.js'),
                        options: {
                            loaderName: 'xml-to-json-loader'
                        }
                    }
                ]
            },
            {
                test: /\.css$/,   // +++正则匹配.css后缀的文件
                use: ['style-loader', 'css-loader']  // 注意loader的执行顺序是从右往左的所以先解析再加入
            }
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
    }
}