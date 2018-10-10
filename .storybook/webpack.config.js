const path = require('path');

module.exports = (baseConfig, env, config) => {
    config.module.rules[0] = {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, '..', 'src'),
        loader: require.resolve('babel-loader'),
    };

    config.resolve.extensions.push('.tsx', '.ts', '.jsx', '.js', '.json');
    return config;
};