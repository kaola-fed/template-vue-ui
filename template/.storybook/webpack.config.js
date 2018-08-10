const VueLoaderPlugin = require('vue-loader/lib/plugin');
const updateWebpackConfig = require('storybook-readme/env/vue/updateWebpackConfig');

module.exports = (storybookBaseConfig, configType, defaultConfig) => {
  defaultConfig.module.rules = [{
      test: /\.vue$/,
      loader: 'vue-loader',
    },
    {
      test: /\.css$/,
      loaders: ["style-loader", "css-loader"]
    },
    {
      test: /\.scss$/,
      use: [
        'vue-style-loader',
        'css-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.md$/,
      use: [
        {
          loader: 'html-loader',
        },
        {
          loader: 'markdown-loader',
        },
      ],
    },
    {
        test: /\.stories\.jsx?$/,
        loaders: [
          {
            loader: require.resolve('@storybook/addon-storysource/loader'),
            options: {
              uglyCommentsRegex: [
                /^eslint-.*/, 
                /^global.*/,
              ],
              prettierConfig: {
                printWidth: 80,
                tabWidth: 2,
                bracketSpacing: true,
                trailingComma: 'es5',
                singleQuote: true,
              }
            }
          }
        ],
        enforce: 'pre',
      },
  ];

  defaultConfig.plugins = defaultConfig.plugins.concat([
    new VueLoaderPlugin()
  ]);

  updateWebpackConfig(defaultConfig);

  return defaultConfig;
};