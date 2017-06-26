var path = require('path')
var webpack = require('webpack')

module.exports = {
	// entry point of the app build
	entry: './app/main.js',
	// where to bundle everything
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'build.js'
	},
	// loaders for each file type
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		// // include electron as external dependecy
		// new webpack.ExternalPlugin('commonjs', [
		// 		'electron'
		// 	]),
		new webpack.LoaderOptionsPlugin({
            options: {
                babel: {
                    "presets": ["es2015"],
                    "plugins": ["transform-runtime"]
                },
            }
        })
	]
}