const path = require('path');

module.exports = baseConfig => {
  baseConfig.module.rules.push({
    test: [/\.stories\.tsx?$/, /index\.ts$/],
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          parser: 'typescript',
        },
      },
    ],
    // include: [path.resolve(__dirname, '../src')],
    include: [path.resolve(__dirname, '../src')],
    enforce: 'pre',
  });

  return baseConfig;
};
