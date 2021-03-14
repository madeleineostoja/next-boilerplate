import path from 'path';
const toPath = (_path: string) => path.join(process.cwd(), _path);

const CONFIG = {
  stories: ['../**/*.stories.@(ts|tsx|mdx)'],
  webpack: {
    rules: [
      {
        removeMatch: '.svg',
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      }
    ]
  }
};

module.exports = {
  stories: CONFIG.stories,
  addons: ['@storybook/addon-docs'],
  reactOptions: {
    fastRefresh: true
  },
  webpackFinal: async (config: any) => {
    const findRule = (ext: string) => {
      return config.module.rules.find((rule: RegExp) => {
        return rule.test.toString().includes(ext.replace('.', ''));
      });
    };

    // Add new rules
    CONFIG.webpack.rules.forEach((rule) => {
      if (rule.removeMatch) {
        findRule(rule.removeMatch).exclude = rule.test;
        delete rule.removeMatch;
      }
      config.module.rules.push(rule);
    });

    // HACK for Emotion 11 compat
    // See https://github.com/storybookjs/storybook/issues/13277
    config.resolve.alias = {
      ...config.resolve.alias,
      '@emotion/core': toPath('node_modules/@emotion/react'),
      '@emotion/styled': toPath('node_modules/@emotion/styled'),
      'emotion-theming': toPath('node_modules/@emotion/react')
    };

    return config;
  }
};
