const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    devtool: 'source-map',

    devServer: {
        port: 9000
    },

    entry: [
        './sass/main.jscss',
        './src/main.ts',
    ],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader'
            },

            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader'
            },

            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },

                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => {
                                    return [
                                        require('autoprefixer')({
                                            browsers: [
                                                'last 2 versions',
                                                'IE >= 9'
                                            ]
                                        })
                                    ];
                                },
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            }
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist'
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'main.css'
        }),
    ],
    resolve: {
        alias: {
            app: path.resolve(__dirname, 'src')
        },
        extensions: [
            '.js', '.ts', '.tsx'
        ]
    }
};

module.exports = config;
