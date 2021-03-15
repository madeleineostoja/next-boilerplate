export const SITE_URL = '<%= url %>';
<% if (features.prismic) { -%>
export const PRISMIC_API = `https://<%= prismic %>.cdn.prismic.io/api/v2`;
<% } -%>
<% if (features.firestore) { -%>
export const FIREBASE_CONFIG = {};
<% } -%>