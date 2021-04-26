---
to: src/pages/<%%= name %%>.tsx
---
<% if (features.layouts) { -%>
<%% if (layout) { -%%>
import { withLayout } from '@moxy/next-layout';
<%% } -%%>
<% } -%>
<%% if (staticProps) { -%%>
import { InferGetStaticPropsType, GetStaticProps, GetStaticPropsContext } from 'next';
<%% } -%%>
import { css } from '@emotion/react';
import { Meta } from '../components/Meta';
<% if (features.prismic) { -%>
<%% if (prismic) { -%%>
import { get } from '../lib/prismic';
import { <%= h.changeCase.pascal(name) %> } from '../../@types/_generated/prismic';
<%% } -%%>
<% } -%>

/**
 * <%%= h.changeCase.sentence(name) %%> page
 */
<% if (features.layouts) { %><%%= !layout ? 'export default ' : '' %%><% else { %>export default <% } %>function <%%= h.changeCase.pascal(name) %%>Page({
  <%% if (staticProps) { -%%>data<%% } %%>
}: { data: <%= h.changeCase.pascal(name) %> }) {
  const styles = {};

  return (
    <>
      <Meta <% if (features.prismic) { %><%% if (prismic) { %%>title={data.meta_title} description={data.meta_description} <%% } %%> /><% } %>
    </>
  );
}
<% if (features.layouts) { -%>
<%% if (layout) { -%%>
export default withLayout()(<%%= h.changeCase.pascal(name) %%>Page)
<%% } -%%>
<% } -%>

<%% if (staticProps) { -%%>
/** Page data */
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  return {
    props: {
      data: <% if (features.prismic) { %><%%- prismic ? `await get('${name}', context)` : '{}' %%><%% if (prismic) { %%>,
      preview: context.preview || null
    <%% } %%><% } %>
    }
  };
};
<%% } -%%>
