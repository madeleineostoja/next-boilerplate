const FEATURES = {
  prismic: [
    'src/pages/api/**/*',
    '@types/react-html-renderer.d.ts',
    'src/lib/prismic.ts',
    'codegen.yaml',
  ],
  formComponents: 'src/components/Form/**/*',
  sitemap: 'next-sitemap.js',
  firestore: 'src/lib/firebase.ts',
};

module.exports = {
  prompts() {
    return [
      {
        type: 'input',
        name: 'name',
        message: 'Name:',
      },
      {
        type: 'input',
        name: 'packageName',
        message: 'Package name:',
      },
      {
        type: 'input',
        name: 'url',
        message: 'URL:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description:',
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author:',
        default: 'Peppercorn Studio <madi@peppercorn.studio>',
      },
      {
        type: 'input',
        name: 'brandColour',
        message: 'Brand color:',
      },
      {
        type: 'checkbox',
        name: 'features',
        message: 'Features:',
        choices: [
          {
            name: 'Prismic',
            value: 'prismic',
            checked: true,
          },
          {
            name: 'Firestore',
            value: 'firestore',
            checked: false,
          },
          {
            name: 'Form Components',
            value: 'formComponents',
            checked: false,
          },
          {
            name: 'Sitemap',
            value: 'sitemap',
            checked: false,
          },
        ],
        filter: (features) =>
          features.reduce((ac, a) => ({ ...ac, [a]: true }), {}),
      },
      {
        type: 'input',
        name: 'prismic',
        message: 'Prismic repository name:',
        when: ({ features }) => features.prismic,
      },
      {
        type: 'input',
        name: 'contentPath',
        message: 'Content folder path:',
        when: ({ source }) => source === 'mdx',
      },
    ];
  },
  actions: ({ answers }) => {
    return [
      {
        type: 'add',
        files: [
          '**',
          ...Object.keys(FEATURES)
            .filter((feature) => !answers.features[feature])
            .map((feature) =>
              Array.isArray(feature)
                ? FEATURES[feature].map((file) => `!${file}`)
                : `!${FEATURES[feature]}`
            ),
        ].flat(),
      },
    ];
  },

  async completed() {
    this.gitInit();
    await this.npmInstall();
    this.showProjectTips();
  },
};
