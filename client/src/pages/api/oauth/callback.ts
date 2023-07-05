import { NextApiRequest, NextApiResponse } from 'next';

export default async function callbackHandler(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<any> {
  const { query } = req;
  if (query) {
    const { code } = query as { code: string };
    return res.redirect(`/dashboard?code=${code}`);
  }
}
