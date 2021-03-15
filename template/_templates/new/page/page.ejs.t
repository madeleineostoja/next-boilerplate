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
<%% } -%%>
<% } -%>

/**
 * <%%= h.changeCase.sentence(name) %%> page
 */
<%%= !layout && 'export default ' %%>function <%%= h.changeCase.pascal(name) %%>Page({
  <%% if (staticProps) { -%%>data<%% } %%>
}: InferGetStaticPropsType<typeof getStaticProps>) {
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
      data: <% if (features.prismic) { %><%% if (prismic) { %%>await get('<%%= name %%>', context)<%% } %%><% } %><% if (features.prismic) { %>,
      preview: context.preview || null<% } %>
    }
  };
};
<%% } -%%>
