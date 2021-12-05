const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        script: path.resolve(__dirname, '../src/js/script.js'),
        layout: path.resolve(__dirname, '../src/js/layout.js'),
        sketchfab: path.resolve(__dirname, '../src/js/sketchfab.js'),
        matterport: path.resolve(__dirname, '../src/js/matterport.js'),
        cupixModel: path.resolve(__dirname, '../src/js/cupixModel.js'),
        cupixVirtualTour: path.resolve(__dirname, '../src/js/cupixVirtualTour.js'),
        roundme: path.resolve(__dirname, '../src/js/roundme.js'),
        qloneModel: path.resolve(__dirname, '../src/js/qloneModel.js'),
        threeTest: path.resolve(__dirname, '../src/js/threeTest.js'),
        pannellum: path.resolve(__dirname, '../src/js/pannellum.js'),
        models: path.resolve(__dirname, '../src/js/models.js'),
        vTours: path.resolve(__dirname, '../src/js/vTours.js'),
        modelViewer: path.resolve(__dirname, '../src/js/modelViewer.js'),
        myWebAr: path.resolve(__dirname, '../src/js/myWebAr.js'),
        documentation: path.resolve(__dirname, '../src/js/documentation.js'),
        studioMP: path.resolve(__dirname, '../src/js/studioMP.js'),
        studioLidar: path.resolve(__dirname, '../src/js/studioLidar.js')
    },
    output:
    {
        filename: 'bundle.[contenthash].js',
        path: path.resolve(__dirname, '../dist')
    },
    devtool: 'source-map',
    plugins:
        [
            new MiniCSSExtractPlugin(),

            new CopyWebpackPlugin({
                patterns: [
                    { from: path.resolve(__dirname, '../static') }
                ]
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/index.pug'),
                chunks: ['script'],
                filename: 'index.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/layout.pug'),
                chunks: ['script'],
                filename: 'layout.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/sketchfab.pug'),
                chunks: ['sketchfab'],
                filename: 'sketchfab.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/matterport.pug'),
                chunks: ['matterport'],
                inject: true,
                filename: 'matterport.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/cupixModel.pug'),
                chunks: ['cupixModel'],
                inject: true,
                filename: 'cupixModel.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/cupixVirtualTour.pug'),
                chunks: ['cupixVirtualTour'],
                inject: true,
                filename: 'cupixVirtualTour.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/roundme.pug'),
                chunks: ['roundme'],
                inject: true,
                filename: 'roundme.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/qloneModel.pug'),
                chunks: ['qloneModel'],
                inject: true,
                filename: 'qloneModel.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/threeTest.pug'),
                chunks: ['threeTest'],
                inject: true,
                filename: 'threeTest.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/pannellum.pug'),
                chunks: ['pannellum'],
                inject: true,
                filename: 'pannellum.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }),
            new HtmlWebpackPlugin({
              template: path.resolve(__dirname, '../src/models.pug'),
              chunks: ['models'],
              inject: true,
              filename: 'models.html',
              minify: {
                  removeComments: true,
                  collapseWhitespace: true
              }
          }),
          new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/vTours.pug'),
            chunks: ['vTours'],
            inject: true,
            filename: 'vTours.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/modelViewer.pug'),
                chunks: ['modelViewer'],
                inject: true,
                filename: 'modelViewer.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/myWebAr.pug'),
                chunks: ['myWebAr'],
                inject: true,
                filename: 'myWebAr.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }),
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, '../src/documentation.pug'),
                chunks: ['documentation'],
                inject: true,
                filename: 'documentation.html',
                minify: {
                    removeComments: true,
                    collapseWhitespace: true
                }
            }),

            new HtmlWebpackPlugin({
              template: path.resolve(__dirname, '../src/studioMP.pug'),
              chunks: ['studioMP'],
              inject: true,
              filename: 'studioMP.html',
              minify: {
                  removeComments: true,
                  collapseWhitespace: true
              }
          }),

          new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../src/studioLidar.pug'),
            chunks: ['studioLidar'],
            inject: true,
            filename: 'studioLidar.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
            new webpack.ProvidePlugin({
                '$': 'jquery',
                'jQuery': 'jquery',
                'window.jQuery': 'jquery',
                'window.$': 'jquery',
                Popper: 'popper.js'
            }),
        ],
    module:
    {
        rules:
            [
                // HTML
                {
                    test: /\.(html)$/,
                    use: ['html-loader']
                },

                //PUG
                {
                    test: /\.pug$/,
                    use: ['html-srcsets-loader', 'pug-html-loader']
                },

                // JS
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use:
                        [
                            'babel-loader'
                        ]
                },

                // CSS SCSS
                {
                    test: /\.s[ac]ss$/i,
                    use: [{
                        // inject CSS to page
                        loader: 'style-loader'
                    }, {
                        // translates CSS into CommonJS modules
                        loader: 'css-loader'
                    }, /*{
                        // Run postcss actions
                        loader: 'postcss-loader',
                        options: {
                          // `postcssOptions` is needed for postcss 8.x;
                          // if you use postcss 7.x skip the key
                          postcssOptions: {
                            // postcss plugins, can be exported to postcss.config.js
                            plugins: function () {
                              return [
                                require('autoprefixer')
                              ];
                            }
                          }
                        }
                      }, */{
                        // compiles Sass to CSS
                        loader: 'sass-loader'
                    }]
                },

                // Images
                {
                    test: /\.(jpg|png|gif|svg|webp|tiff)$/,
                    use:
                        [
                            {
                                loader: 'url-loader?name=documents/[name].[ext]',
                                options:
                                {
                                    outputPath: 'assets/images/'
                                }
                            }
                        ]
                },

                // Fonts
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    include: path.resolve(__dirname, './node_modules/bootstrap-icons/font/fonts'),
                    use:
                        [
                            {
                                loader: 'file-loader',
                                options:
                                {
                                    name: '[name].[ext]',
                                    outputPath: 'assets/fonts',
                                    publicPath: '../assets/fonts',
                                }
                            }
                        ]
                }
            ]
    }
}
