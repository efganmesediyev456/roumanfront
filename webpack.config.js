const path = require('path');
const fs = require('fs');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin') ;
const HtmlWebpackInjector = require('html-webpack-injector');
// const CopyWebpackPlugin = require('copy-webpack-plugin') ;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ESLintPlugin = require('eslint-webpack-plugin');
const glob = require('glob');

//Variables
const  about = JSON.parse(fs.readFileSync(path.resolve(__dirname,'package.json'), 'utf8'));
const PAGES_DIR = `src/pug/pages/`;
const PAGES = (glob.sync(PAGES_DIR + "**/*.pug")).map(file => file.replace(PAGES_DIR,''))
// const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));   OLD METHOD FOR ONE FOLDER
const isDev = process.env.NODE_ENV === 'development' ;
const isProd = !isDev ;
const modeType = isDev ? 'development' : 'production' ;




module.exports = {
    mode: modeType,
    entry: {
        // main: ['@babel/polyfill',path.resolve(__dirname, 'src/conf.ts')],
        // main: [path.resolve(__dirname, 'src/conf.ts')],
     main: ['@babel/polyfill',path.resolve(__dirname, 'src/js/import.js')],
     // source: [path.resolve(__dirname, 'src/js/chunks/carousel-fancybox.js')],
     // prod: [path.resolve(__dirname, 'src/js/salam.ts')],
    },
    output: {
        filename: "assets/js/[name].js",
        path: path.resolve(__dirname, "dist"),
        publicPath: '/',

    },
    target: "web",
    experiments: {
    topLevelAwait: true,
    // asset: true
     },

    devServer :{
        port : 5555,
        contentBase: './src',

    },

    devtool: isDev ? 'source-map' : false ,
    optimization: {
        splitChunks: {
            chunks: "all"
        },
        minimize: isProd,
        minimizer: [
            new TerserPlugin({
                extractComments: false,
            }),
            new CssMinimizerPlugin()
        ],
    },

    //Plugins
    plugins: [

        new CleanWebpackPlugin() ,

        ...PAGES.map(page => new HTMLWebpackPlugin({
            template: `${PAGES_DIR}/${page}`,
            filename: `./${page.replace(/\.pug/, '.html')}`,
            minify : false ,
        })),

        new HtmlWebpackInjector(),

        new MiniCssExtractPlugin({
            filename : 'assets/css/[name].css',
        }),

        new webpack.BannerPlugin({
            banner: () => {
                return `
                @auhor ${about.author}
                @author-url ${about.authorUrl}
                @version ${about.version}
                `;
            }


        }),

        // new CopyWebpackPlugin({
        //     patterns : [
        //         {
        //             from: path.resolve(__dirname, 'src/img'),
        //         to: path.resolve(__dirname, 'dist/img')
        //         },
        //     ],
        // })
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),




    ],
    //end Plugins

    module: {
        rules: [
            //PUG TEMPLATE
            {
                test: /\.pug$/,
                use: [
                    {
                        loader: "pug-loader",
                        options: {
                            pretty: true,
                        }
                    }
                ],
            },
            //CSS,SCSS,SASS
            {
                test: /.s?css$/,
                use: [ {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                    },
                },
                    'css-loader',
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer",
                                    ],
                                ],
                            },

                        },
                    },
                    'sass-loader',
                    ]


            },
            //FILE LOADER
            {
                test: /\.(png|svg|jpe?g|gif|mp4)$/i,
                type: "asset",
                generator: {
                    filename: 'assets/images/[name][ext][query]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize:  0,   //< 1mb converted to base64
                    },
                },

            },
            {
                test: /\.(woff(2)?|ttf|otf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                type: "asset",
                generator: {
                    filename: 'assets/fonts/[name][ext][query]'
                },
            },

            //BABEL
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: [
                  "babel-loader",
                ]
            },

            //TYPESCRIPT
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },

        ]
    },



}

if (isDev)
{
    module.exports.plugins.push(
        new ESLintPlugin({
            overrideConfigFile : path.resolve(__dirname,'.eslintrc'),
        })
    )
    module.exports.plugins.push(
     //Analyzer
     new BundleAnalyzerPlugin()
    )

}



