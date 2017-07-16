var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index.js',
    output: {
        path: './dst',
        filename: 'calendar.js'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader?sourceMap")
            },
            { 
                test: /\.jsx?$/, 
                exclude: /node_modules/, 
                loader: "babel-loader", 
                query: { presets: ['es2015', 'react'] }
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css", {
            allChunks: true
        })
    ]
}; 