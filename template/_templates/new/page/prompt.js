module.exports = [
  {
    type: 'input',
    name: 'name',
    message: 'Name'
  },
  {
    type: 'confirm',
    name: 'staticProps',
    message: 'Will this page have staticProps?',
    default: true
  },
  <% if (features.prismic) { -%>
  {
    type: 'confirm',
    name: 'prismic',
    message: 'Will this page query Prismic?',
    default: true
  }
  <% } -%>
];
