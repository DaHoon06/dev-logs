import { NextPage } from "next";
import { axiosInstance } from "@libs/axios-instance/axios";
import { useEffect } from "react";


interface GigHub {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean,
  name: string;
  company: string,
  blog: string;
  location: string;
  email: string;
  hireable: any,
  bio: any,
  twitter_username: string;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;

}

interface Props {
  data: GigHub
}

const TestPage: NextPage = ({ data }: Props) => {
  const useName = data && data.login;

  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [])
  return (<p>{useName}</p>)
}

TestPage.getInitialProps = async ({ query }) => {
  const { code } = query as { code: string };
  try {
    const {data} = await axiosInstance.get(`/oauth/callback?code=${code}`);
    return { data };
  } catch (e) {
    console.log(e);
    return {data: {}};
  }
}

export default TestPage;