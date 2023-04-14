const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.glsl$/,
        use: 'raw-loader',
        include: [path.resolve(__dirname, 'node_modules/glsl-noise')],
      },
    ],
  },
};
