module.exports = ({ config }) => {
  config.module.rules = config.module.rules.filter(
    (rule) => !rule.test.test('.scss')
  );

  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [require.resolve('babel-preset-react-app')],
      },
    },
    {
      test: /\.(scss)$/,
      loaders: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: {
            modules: true,
          },
        },
        require.resolve('sass-loader'),
      ],
    }
  );

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
