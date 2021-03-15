---
to: src/layouts/<%= name %>.tsx
---
import { css } from '@emotion/react';
<% if (locals.props) { -%>

export type <%= name %>Props = {
<% props.forEach(prop => { -%>
  /** <%= prop.description %> */
  <%= prop.name %>: <%= prop.type %>;
<% }) -%>
};
<% } -%>

const styles = {};

/**
 * <%= description %>
 */
export function <%= name %>(<% if (locals.props) { %>{
<% props.forEach(prop => { -%>
  <%= prop.name.replace(/(\?)$/, '') %>,
<% }) -%>
  ...props
}: <%= name %>Props
<% } else { -%>props: any<% } %>) {
  return (
    <div {...props}>

    </div>
  );
}