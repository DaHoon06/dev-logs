import { NextApiRequest, NextApiResponse } from "next";

export default async function callbackHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query } = req;
  if (query) {
    const {code} = query as { code: string };
    return res.redirect(`/test?code=${code}`)
  }
}