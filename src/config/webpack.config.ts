const path = require('path');

module.exports = {
	entry: {
		chat: './dist/public/react/chat/App.jsx',
	},
	output: {
		path: path.resolve(__dirname, '../../dist/public/react'),
		filename: '[name].js',
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-react'],
						},
					},
				],
			},
		],
	},
};
