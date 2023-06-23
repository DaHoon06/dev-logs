import { NextApiRequest, NextApiResponse } from "next";
import { axiosInstance } from "@libs/axios-instance/axios";

export default async function callbackHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {query} = req;
  if (query) {
    const {code} = query as { code: string };
    const { data } = await axiosInstance(`/oauth/callback?code=${code}`)
    if (data) {
      const {repos_url, events_url} = data;
      return res.status(200).json({
        url1: repos_url,
        url2: events_url
      })
    }
  }
}