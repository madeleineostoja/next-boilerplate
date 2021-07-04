---
to: src/pages/<%%= name %%>.tsx
---
<%% if (staticProps) { -%%>
import { GetStaticProps } from 'next';
<%% } -%%>
import { css } from '@emotion/react';
import { Meta } from '$src/components/Meta';
<% if (features.prismic) { -%>
<%% if (prismic) { -%%>
import { queryAt } from '$src/lib/prismic';
import type { <%= h.changeCase.pascal(name) %> } from '$types/_generated/prismic';
<%% } -%%>
<% } -%>

/**
 * <%%= h.changeCase.sentence(name) %%> page
 */
export default function <%%= h.changeCase.pascal(name) %%>Page({
  <%% if (staticProps) { -%%>data<%% } %%>
}: { data: <%%= h.changeCase.pascal(name) %%> }) {
  const styles = {};

  return (
    <>
      <Meta <% if (features.prismic) { %><%% if (prismic) { %%>title={data.meta_title} description={data.meta_description} <%% } %%> /><% } %>
    </>
  );
}

<%% if (staticProps) { -%%>
/** Page data */
export const getStaticProps: GetStaticProps = async (context) => {
  <% if (features.prismic) { %><%%- prismic && `const { data } = await queryAt('document.type', '${name}');` %%><%% } %%><% } %>
  return {
    props: {
      data<%% if (prismic) { %%>,
      preview: context.preview || null
    <%% } %%>
    }
  };
};
<%% } -%%>
