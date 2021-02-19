const withPlugins = require('next-compose-plugins');
const withPWA = require('next-pwa');
const withFonts = require('next-fonts');
<% if (features.preact) { -%>
const withPreact = require('next-plugin-preact');
<% } -%>
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

module.exports = withPlugins(
  [
<% if (features.preact) { -%>
    withPreact,
<% } -%>
    [
      withPWA,
      {
        pwa: { dest: 'public', disable: process.env.NODE_ENV === 'development' }
      }
    ],
    withFonts,
    [withBundleAnalyzer]
  ],
  {
    target: 'serverless',
    poweredByHeader: false,
    typescript: {
      ignoreBuildErrors: true
    },
    images: {
<% if (features.prisimc) { -%>
      loader: 'imgix',
      path: '',
<% } -%>
      deviceSizes: [480, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      domains: [
<% if (features.prisimc) { -%>
        'images.prismic.io',
        'prismic-io.s3.amazonaws.com',
<% } -%>
        /* development */ 'source.unsplash.com'
      ]
    },
    webpack: (config, { webpack }) => {
      // Add SVGR support
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      });

      return config;
    }
  }
);
