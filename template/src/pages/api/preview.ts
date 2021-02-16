import Prismic from 'prismic-javascript';
import { PRISMIC_API } from '../../lib/consts';
import { resolveLink } from '../../lib/prismic';

const Client = (req: any) => Prismic.client(PRISMIC_API, { req });

const Preview = async (req: any, res: any) => {
  const { token: ref, documentId } = req.query;
  const redirectUrl = await Client(req)
    .getPreviewResolver(ref, documentId)
    .resolve(resolveLink, '/');

  if (!redirectUrl) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  res.setPreviewData({ ref });
  res.writeHead(302, { Location: `${redirectUrl}` });
  res.end();
};

export default Preview;
