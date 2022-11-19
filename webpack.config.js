const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require('path');
const MiniCssExtractPlugin  =   require('mini-css-extract-plugin');

module.exports  =   {
    entry:  './src/index.js',
    output: {
        filename:   'bundle.[hash].js',
        path:   path.resolve(__dirname, 'dist'),
        publicPath: '/',
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
                    alias: {
                        '@components':path.resolve(__dirname, 'src/components/'),
                        '@containers':path.resolve(__dirname, 'src/Containers/'),
                        '@pages':path.resolve(__dirname, 'src/pages/'),
                        '@routes':path.resolve(__dirname, 'src/routes/'),
                        '@styles': path.resolve(__dirname, 'src/styles/'),
                        '@icons': path.resolve(__dirname, 'src/assets/icons/'),
                        '@logos': path.resolve(__dirname, 'src/assets/logos/'),
                        '@context': path.resolve(__dirname, 'src/context/'),
                        '@hooks': path.resolve(__dirname, 'src/hooks'),
                    }
                },
            },
            {
                //test:   /\.s[ac]ss$/i,//
                test:   /\.(scss|css)$/,
                use:    ['style-loader', 
                         'css-loader', 
                         'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                type: 'asset'
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
    devServer:{
        historyApiFallback: true,
    }
    
};