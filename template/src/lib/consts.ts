export const SITE_URL = '<%= url %>';
<% if (features.prismic) { -%>
export const PRISMIC_API = ``;
<% } -%>
<% if (features.firestore) { -%>
export const FIREBASE_CONFIG = {};
<% } -%>