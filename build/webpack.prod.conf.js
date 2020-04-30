const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [
        new HtmlWebpackPlugin({
		      template: 'public/index.html',
		      title: 'PresByter', //更改HTML的title的内容
		      minify: {
		        removeComments: true,
		        collapseWhitespace: true,
		        removeAttributeQuotes: true
		      },
            }),
            new CleanWebpackPlugin(['../dist'], { allowExternal: true }),
            new BundleAnalyzerPlugin(),
    ]
});