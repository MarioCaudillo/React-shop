const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require('path');
const MiniCssExtractPlugin  =   require('mini-css-extract-plugin');

module.exports  =   {
    entry:  './src/index.js',
    output: {
        filename:   'bundle.[hash].js',
        path:   path.resolve(__dirname, 'dist')
    },
    mode:   'production',
    module: {
        rules:  [
            {
                test: /\.(js|jsx)$/,
                use:    'babel-loader',
                exclude:    /node_modules/,
                resolve:   {
                    extensions: ['.js', '.jsx'],
                },
            },
            {
                //test:   /\.s[ac]ss$/i,//
                test:   /\.(scss|css)$/,
                use:    ['style-loader', 
                         'css-loader', 
                         'sass-loader'],
            },
        ],
    },
    plugins:    [new CleanWebpackPlugin(), new HtmlWebpackPlugin({
        template:   './public/index.html',
        filename:   './index.html'
    }),
     new MiniCssExtractPlugin(
        {   filename: '[name].css'
        
        }),
    ],
    
};