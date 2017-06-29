var path = require('path')
var webpack = require('webpack')

module.exports = {
	watch: true,
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
			},{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			},{
				test: /\.scss$/,
				loader: 'sass-loader!autoprefixer!resolve-url'
			},{
				test: /\.css$/,
				loader: 'css-loader'
			},{
		    	test: /\.styl$/,
		    	loader: 'css-loader!stylus-loader?paths=node_modules/bootstrap-stylus/stylus/'
		  	},{
		  		test: /\.(jpe?g|png|gif|svg)$/,
		  		loader: 'url-loader?limit=10000&name=images/[name].[ext]'
		  	},{
		  		test: /\.ttf$/,
		  		loader: 'font-loader'
		  	}
		]
	},
	resolve: {alias:{
		vue: 'vue/dist/vue.js', 
		semantic: 'semantic-ui-css/semantic.min.js',
		images: path.join(__dirname, 'static/images'),
		styles: path.join(__dirname, 'static/css'),
		electron: 'electron'
	}},
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
        }), 
        new webpack.ProvidePlugin({
		    // jquery
		    $: 'jquery',
		    jQuery: 'jquery',
		    'window.jQuery': 'jquery',
		    // semantic ui
		    semantic: 'semantic-ui-css', 
		    'semantic-ui': 'semantic-ui-css',
		    Semantic: 'semantic-ui-css'
		})
	]
}