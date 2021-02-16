const FEATURES = {
  prismic: [
    'src/pages/api/**/*',
    '@types/react-html-renderer.d.ts',
    'src/lib/prismic.ts'
  ],
  formComponents: 'src/components/Form/**/*',
  sitemap: 'next-sitemap.js'
};

module.exports = {
  prompts() {
    return [
      {
        type: 'input',
        name: 'name',
        message: 'Name:'
      },
      {
        type: 'input',
        name: 'packageName',
        message: 'Package name:'
      },
      {
        type: 'input',
        name: 'url',
        message: 'URL:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description:'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Author:',
        default: 'Peppercorn Studio <madi@peppercorn.studio>'
      },
      {
        type: 'input',
        name: 'brandColour',
        message: 'Brand color:'
      },
      {
        type: 'checkbox',
        name: 'features',
        message: 'Features:',
        choices: [
          {
            name: 'Prismic',
            value: 'prismic',
            checked: false
          },
          {
            name: 'Firestore',
            value: 'firestore',
            checked: false
          },
          {
            name: 'Form Components',
            value: 'formComponents',
            checked: false
          },
          {
            name: 'Sitemap',
            value: 'sitemap',
            checked: false
          }
        ]
      },
      {
        type: 'input',
        name: 'prismic',
        message: 'Prismic repository name:',
        when: ({ features }) => features.prismic
      },
      {
        type: 'input',
        name: 'contentPath',
        message: 'Content folder path:',
        when: ({ source }) => source === 'mdx'
      }
    ];
  },
  actions: ({ answers }) => {
    return [
      {
        type: 'add',
        files: [
          '**',
          ...Object.keys(FEATURES)
            .filter((feature) => !answers.features.includes(feature))
            .map((feature) =>
              feature.isArray()
                ? FEATURES[feature].map((file) => `!${file}`)
                : `!${FEATURES[feature]}`
            )
            .flat()
        ]
      }
    ];
  },

  async completed() {
    this.gitInit();
    await this.npmInstall();
    this.showProjectTips();
  }
};
