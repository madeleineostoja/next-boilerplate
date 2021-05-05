import { Meta } from './_generated/prismic';

export type WithMeta<T> = T & Meta;
export type PrismicDocument<T> = Meta & { data: T };
export type PrismicSlice = {
  slice_type: string;
  primary: any;
  items: any[];
};
