const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(s?)css/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(jpe?g|png)$/i,
				type: 'asset',
			},
		],
	},
	resolve: {
		extensions: ['.js'],
		alias: {
			['@globals']: path.resolve(__dirname, 'src/global'),
			['@ui']: path.resolve(__dirname, 'src/components/ui'),
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
	],
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		historyApiFallback: true,
	},
};
