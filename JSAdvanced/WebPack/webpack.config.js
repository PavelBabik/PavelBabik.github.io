let path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractor = require('mini-css-extract-plugin');

module.exports =  (env = {mode: 'development'})  => {
    return {
        devServer: {
            contentBase: path.join(__dirname, "src"),
            compress: true,
            port: 8000,
            overlay: true,
            stats: {
              modules: false
            }
          },
        mode: env.mode,

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                },
                {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader',
                    }
                },
                {
                    test: /\.(png|svg|gif|jpg)$/,
                    use: ['file-loader']
                },
                {
                    test: /\.scss$/,
                    use: ["style-loader","css-loader","sass-loader"]
                }
            ]
        },
        plugins: [
            new HtmlWebPackPlugin({
                template: "./src/index.html",
                filename: "./index.html"
            }),
            
        ]
    }
}