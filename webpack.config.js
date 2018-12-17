const path = require('path');

module.exports = {
    entry: './src/index.js', // Setting root of the application.
    //  Output is the place where webpack will build.
    output: {
        path: path.resolve(__dirname, 'build'), 
        filename: 'bundle.js' // makes the file bundle.js in build directory.
      },
    mode: 'development',

    module: {
        rules: [  // It is important to remember that when defining rules in your webpack config, you are defining them under module.rules and not rules. For your benefit, webpack will warn you if this is done incorrectly.
            {
                test: /\.jsx$|\.es6$|\.js$/,  // The test property identifies which file or files should be transformed.
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    }
                },
                exclude: /node_module/,
            },

            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i, 
                loader: "file-loader?name=/public/icons/[name].[ext]"
            }
        ],
    },
};
