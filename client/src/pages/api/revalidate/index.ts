import { MY_SECRET_TOKEN } from '@/utils/constants';
import { error, info } from '@/utils/logger';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function revalidateHandler(req: NextApiRequest, res: NextApiResponse) {
  const { pageUrls } = req.body;
  try {
    if (req.method !== 'POST') {
      error('405 - Method not allowed');
      return res.status(405).json({ err: '405 - Method not allowed' });
    }

    // Check for secret to confirm this is a valid request
    if (req.query.secret !== MY_SECRET_TOKEN) {
      error('401 - Unauthorized user');
      return res.status(401).json({ message: '401 - Unauthorized user' });
    }

    // Check for secret to confirm this is a valid request
    if (!(pageUrls?.length && Array.isArray(pageUrls))) {
      error('400 - Bad Request. pageUrls missing from request body');
      return res.status(400).json({ message: '400 - Bad Request. pageUrls missing from request body' });
    }

    info('400 - Bad Request. pageUrls missing from request body');
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await Promise.all(pageUrls.map((pageUrl: string) => res.revalidate(pageUrl)));
    return res.json({ revalidated: true, pageUrls });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send({ err });
  }
}
