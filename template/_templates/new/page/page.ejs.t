---
to: src/pages/<%%= name %%>.tsx
---
<%% if (staticProps) { -%%>
import { InferGetStaticPropsType, GetStaticProps, GetStaticPropsContext } from 'next';
<%% } -%%>
import { Meta } from '../components/Meta';
<%% if (prismic) { -%%>
import { get } from '../lib/prismic';
<%% } -%%>

/**
 * <%%= h.changeCase.sentence(name) %%> page
 */
export default function <%%= h.changeCase.pascal(name) %%>Page({
  <%% if (staticProps) { -%%>data<%% } %%>
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <style jsx>{``}</style>
      <Meta <%% if (staticProps) { %%>title={data.meta_title} description={data.meta_description} <%% } %%> />
    </>
  );
}

<%% if (staticProps) { -%%>
/** Page data */
export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
  return {
    props: {
      data: <%% if (prismic) { %%>await get('<%%= name %%>', context)<%% } %%>,
      preview: context.preview || null
    }
  };
};
<%% } -%%>
